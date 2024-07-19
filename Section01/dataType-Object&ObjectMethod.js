// Object (객체)
// 특정 데이터를 상세 항목(각 카테고리)별로 분류한 데이터들의 집합
let jasonData = {
    name: "Jason",
    age: 25,
    gender: "Male"
};
// 변수에 객체를 할당해줄 때는 반드시 { }를 사용해야한다 !!
// 여기서 name, age, gender는 객체의 property이며 property는 key: value 로 이루어져있다.
// ex) name: "Jason"을 보면 이 자체는 userData의 property이며 name은 key, "Jason"은 value이다.
console.log(jasonData)
// {name: 'Jason', age: 25, gender: 'Male'}

// ===============================================

// Dot natation
// 객체의 데이터에 접근하는 방식
// Object.key로 작성해주면 해당 object의 원하는 key의 value 값을 반환해준다.
console.log(jasonData.name)
Jason
console.log(jasonData.age)
25
console.log(jasonData.gender)
Male

jasonData.favoriteFood = "Meat"
console.log(jasonData)
// {name: 'Jason', age: 25, gender: 'Male', favoriteFood: 'Meat'}
// dot notation을 이용해서 특정 Object에 key와 value를 추가할 수 있다.

// Bracket notation
// 객체의 데이터에 접근하는 방식
// Object["key"]로 작성해주면 해당 object의 원하는 key의 value 값을 반환해준다
// 하지만 [ ]안에 들어갈 key는 반드시 " " 로 감싸서 작성해줘야함!!!
console.log(jasonData["name"])
Jason
console.log(jasonData[name])
undefined
// [ ] 안에 들어갈 key 값을 " "로 감싸지 않아서 원하는 jasonData의 name의 value 값이 반환되지 않음.
let name = 'age'
console.log(jasonData[name])
25
// 만일 name이라는 변수에 age라는 값이 할당되어 있었던 상황이었더라면 [ ]안에 " "없이 name을 작성했기 때문에 jasonData의 age의 value인 25를 반환한 것이다.
jasonData["OS"] = "MAC"
'MAC'
console.log(jasonData)
// {name: 'Jason', age: 25, gender: 'Male', favoriteFood: 'Meat', OS: 'MAC'}
// bracket notation을 이용해서 특정 Object에 key와 value를 추가할 수 있다.

// =====================================================

// Object.keys()
// ( ) 안에 입력되는 object의 key만을 가져와 배열의 형태로 반환해주는 method
// key들을 모두 문자열로 반환해준다
console.log(Object.keys(jasonData))
(3) ['name', 'age', 'gender']
let keysResult = Object.keys(jasonData)
// jasonData의 key들을 keysResult라는 변수에 할당해주었다.
console.log(keysResult)
(3) ['name', 'age', 'gender']
console.log(keysResult.includes("name"))
// Array.includes method를 활용하여 keysResult에 name이라는 요소가 있는지 확인한다
// 이는 jasonData에 name이라는 키가 있는지 확인하는 과정으로 봐도 된다.
true

// Object.values()
// ( ) 안에 입력되는 object의 value만을 가져와 배열의 형태로 반환해주는 method
// value들을 각각의 온전한 데이터타입으로 반환해준다. ex) String -> String / Number -> Number
console.log(Object.values(jasonData))
(3) ['Jason', 25, 'Male']
jasonData.favoriteFood = ["rice", "noodle", "chicken"]
// jasonData에 favoriteFood: rice, noodle, chicken 이라는 property를 추가해준 것
console.log(jasonData)
// {name: 'Jason', age: 25, gender: 'Male', favoriteFood: Array(3)}
// favoriteFood : (3) ['rice', 'noodle', 'chicken']
// jasonData에 favoriteFood라는 key와 그에 속한 value값들이 추가된 모습
let valuesResult = Object.values(jasonData)
console.log(valuesResult)
(4) ['Jason', 25, 'Male', ['rice', 'noodle', 'chicken'] ]
console.log(valuesResult.includes("Male"))
true
console.log(valuesResult.includes(25))
true