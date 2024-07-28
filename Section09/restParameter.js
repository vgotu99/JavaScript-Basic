// Rest Parameter 나머지 매개변수

let origin = {
    name: 'sam',
    age: 25,
    petName: 'cherry',
    hobby: 'playing game'
}

const {petName, hobby, ...rest} = origin

console.log(petName) // cherry
console.log(hobby) // playing game
console.log(rest) // {name: 'sam', age: 25}

// Rest Parameter는 원본 객체에서 구조분해된 property를 제외한 나머지 property들의 집합을 객체 형태로 묶어준다.
// const {key1, key2, ...변수명(rest parameter)} = obj이름