let name = 'Jason'

if(name === 'Jason') {
    console.log('Hi, Jason')
}
// 만약 name이라는 변수와 'Jason'이라는 문자열이 같다면 console.log()로 'Hi, Jason'이라는 문자열을 출력한다.


const obj = {
    name: 'Peter',
    age: 25
}

if (obj.name === 'Peter') {
    console.log('Hi,' + obj.name)
}

// ====

if (obj.name === 'Peter') {
    console.log('Hi,' + obj.name)
}
else if (obj.name === 'Jason') {
    console.log('Hi,' + obj.name)
} else {
    console.log('You are not our member!')
}
//===========

// && (AND 연산자) => 두 조건을 모두 만족하는 경우 true
if (obj.name === 'Peter' && obj.age === 25) {
    console.log('Hi,' + obj.age +'years old' + obj.name)
} else {
    console.log('You are not our member!')
}

// || (OR 연산자) => 두 조건 중 하나라도 만족하는 경우 true
if (obj.name === 'Peter' || obj.name === 'Jason') {
    console.log('Hi,' + obj.name)
} else {
    console.log('You are not our member!')
}

// ! (NOT 연산자) => 반대되는 값을 true or false로 출력해줌
!undefined
true
!null
true
!0
true
!""
true
!NaN
true
![]
false
!1
false


