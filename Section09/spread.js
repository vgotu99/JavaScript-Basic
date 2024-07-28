// Spread 연산자
// 배열이나 문자열과 같은 데이터의 묶음을 풀어주어 데이터만 남도록 해준다.

const arr = [1, 2, 3, 4, 5]
console.log(arr)
// [1, 2, 3, 4, 5]

console.log(...arr)
// 1 2 3 4 5

let str = "Hello"
console.log(str)
// Hello

console.log(...str)
// H e l l o


// ===========================


const obj = {
    name: 'otter',
    gender: 'male',
    age : 30
}

const copyObj = {...obj}

console.log(copyObj)
// {name: 'otter', gender: 'male', age:30 }

copyObj.name = 'Jason'

console.log(copyObj)
// {name: 'Jason', gender: 'male', age:30 }

console.log(obj)
// {name: 'otter', gender: 'male', age:30 }

// 참조타입인 객체는 주소값 -> 주소값에 해당하는 데이터 -> 실제 객체 데이터의 순으로 객체 데이터를 불러오기 때문에 const copyObj = obj를 하고 obj의 특정 키 값 혹은 codyObj의 특정 키 값을 변경하게되었을 때 obj와 copyObj의 해당 키에 대한 값이 동시에 변하지만 Spread 연산자 ... 을 이용하여 property들을 객체 obj에서 꺼내주고 이러한 property들을 다시 { }로 감싸 copyObj라는 객체에 담아주면 obj와 완전히 같은 key와 value를 가진 property들로 구성된 다른 객체가 생겨나게된다. 따라서 obj의 값을 변경하더라도 copyObj의 값은 변경되지 않는다. 다만 객체 안에 담겨있는 객체의 값은 obj와 copyObj가 동시에 변할 수 있다.