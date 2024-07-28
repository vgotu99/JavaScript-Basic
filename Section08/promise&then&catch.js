// Promise 객체
// 비동기 작업이 맞이할 미래의 완료 혹은 실패와 그 결과 값을 나타냄
// pending - 요청에 대한 응답이 아직 도착하지 않아 기다리고 있는 상태
// fulfilled - 요청이 성공한 상태
// rejected - 요청이 실패한 상태

const promiseTestFulfilled = function () {
    return new Promise((resolve, reject) => {
        resolve(100)  
    })
}
console.log(promiseTestFulfilled())
// Promise {<fulfilled>: 100}
//     [[Prototype]] : Promise
//     [[PromiseState]] : "fulfilled"
//     [[PromiseResult]] : 100
// 요청에 성공했기에 fulfilled상태임


const promiseTestPending = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(100)  
      }, 2000);
    })
}  
console.log(promiseTestPending())
// Promise {<pending>}
//     [[Prototype]] : Promise
//     [[PromiseState]] : "fulfilled"
//     [[PromiseResult]] : undefined
// setTimeout 딜레이가 2초가 설정되어있기에 console.log()될 당시에는 응답이 바로 돌아오지 않아 pending 상태이며 PromiseResult 값이 undefined이다. 하지만 2초 후 fulfilled 상태가 되며 100이라는 값을 가지게 될 것이다.


const promiseTestReject = function () {
    return new Promise((resolve, reject) => {
        reject('error')
    })
}
console.log(promiseTestReject()) 
// Promise {<rejected>: 'error'}
//     [[Prototype]] : Promise
//     [[PromiseState]] : "rejected"
//     [[PromiseResult]] : "error"
// 요청에 실패했기에 reject상태이고 setTimeout으로 딜레이가 걸려있는 것은 아니기에 PromiseResult는 그대로 들어오는 모습. 만약 setTimeout으로 딜레이가 걸려있었다면, 초기에는 pending상태이고 PromiseResult는 undefined 상태일것이다.

// ========================

// promise + then method
// then method는 promise가 resolve 되었을 때, reject 되었을 때의 값을 반환하며 setTimeout으로 딜레이가 적용되어있을 경우 해당 시간 이후 값을 반환해준다.
// promise변수명().then(onFulfilled, onRejected)
// onFulfilled에는 성공했을 때 실행될 콜백 함수를 입력해준다
// onRejected에는 실패했을 때 실행될 콜백 함수를 입력해준다.

const promiseThenTest1 = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('success')  
      }, 2000);
    })
}
promiseThenTest1().then((res) => {
    console.log(res)
})
// success (2s delayed)

const promiseThenTest2 = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('success')
        reject('fail')
      }, 2000);
    })
}
promiseThenTest2().then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})
// success (if promise on fulfilled)
// fail (if promise on rejected)

// promise + then + catch
// // then method는 promise가 resolve 되었을 때, catch method는 reject 되었을 때의 값을 반환하며 setTimeout으로 딜레이가 적용되어있을 경우 해당 시간 이후 값을 반환해준다.
// promise변수명().then(onFulfilled).catch(onRejected)
const promiseThenCatchTest = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')  
      reject('fail')
    }, 2000);
  })
}
promiseThenTest1().then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
// success (if promise on fulfilled)
// fail (if promise on rejected)
// then method만을 사용하여 fulfilled인 상황, rejected인 상황을 모두 핸들링하는 것 보다 추가적으로 catch method를 함께 사용하여 then method로는 fulfilled인 상황을 핸들링하고 catch method로는 rejected인 상황을 핸들링하는 것이 명시적으로 보기 편하고 특히 then method를 여러번 사용해야할 때 catch method를 추가적으로 사용하여 상황에 맞게 핸들링되는 코드를 짜는게 현명하다. 예를 들어 promise변수명().then().then().then().catch()