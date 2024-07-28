// Destructring Assignment 구조 분해 할당
// 구조화 되어있는 배열, 객체와 같은 데이터를 구조 분해하여, 각각의 변수에 담는 것
let arr = [1, 2, 3]

let one = arr[0]
let two = arr[1]
let three = arr[2]

console.log(one, two, three)
// 1 2 3
// 위 배열의 값을 하나하나 새로운 변수에 담아주는 것 대신 아래처럼 구조분해하는 방법이 있다.

let testArr = [1, 2, 3]

let [testOne, testTwo, testThree] = testArr
// let [변수명1, 변수명2, ....] = 구조분해할 배열

console.log(testOne, testTwo, testThree)
// 1 2 3

// =========================================

let obj = {
    name: 'otter',
    gender: 'male',
    age: 30
}

let objName = obj.name
let objGender = obj.gender
let objAge = obj.age

console.log(objName, objGender, objAge)
// otter male 30
// 위 객체의 값을 하나하나 새로운 변수에 담아주는 것 대신 아래처럼 구조분해하는 방법이 있다.

let testObj = {
    name: 'otter',
    gender: 'male',
    age: 30
}

let {name, gender, age} = testObj
// let {키1, 키2, ....} = 구조분해할 객체
// 키를 정확하게 입력해주어야만 구조분해할당이 가능하다.
// 하지만 새로운 키 이름을 할당할 수 있다
let {name: userName, gender: userGender, age:userAge} = testObj

console.log(name, gender, age)
// otter male 30

console.log(userName, userGender, userAge)
// otter male 30

