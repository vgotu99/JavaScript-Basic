// Shallow Copy 얕은 복사
// 복사본과 원본은 객체 내의 객체를 제외한 모든 데이터의 참조가 연결되어있지 않지만 객체 내의 객체의 참조는 연결되어있다.
// 객체 내의 객체 값을 변경하게 되면 원본과 복사본 모두에게 영향을 준다.

let origin = {
    name: 'otter',
    age: 25,
    favoriteFood: {
        first: 'sushi',
        second: 'hamburger'
    }
}

let copy = {...origin}

copy.name = 'sam'
copy.favoriteFood.first = 'chicken'

console.log(origin)
// { name: 'otter',
// age: 25,
// favoriteFood: {
//     first: 'chicken',
//     second: 'hamburger'
// {

console.log(copy)

// { name: 'sam',
// age: 25,
// favoriteFood: {
//     first: 'chicken',
//     second: 'hamburger'
// {

// copy.name = 'sam'은 copy에게만 적용됬지만 copy.favoriteFood.first = 'chicken'은 origin과 copy 모두에게 적용되었다. why?

// origin = [주소값:100 / 데이터:5000] -> [주소값:5000 / 데이터:{..., favoriteFood: 5900}]  -> [주소값:5900 / 데이터: {first:.. ,second:...}]
// copy = [주소값:102 / 데이터:5002] -> [주소값:5002 / 데이터:{..., favoriteFood: 5900}]  -> [주소값:5900 / 데이터: {first:.. ,second:...}]
// 객체 내의 객체는 독단적으로 주소값을 가지고 있기에 해당 주소값이 그대로 복사되어 copy가 5900이라는 주소값을 가진 객체를 가지게 된다. 따라서 얕은 복사에서는 객체 내의 객체의 값을 변경하였을 때 원본과 복사본 모두에게 영향이 가게된다.

// ==============================================================

// Deep Copy 깊은 복사

let origin1 = {
    name: 'otter',
    age: 25,
    favoriteFood: {
        first: 'sushi',
        second: 'hamburger'
    }
}

let copy1 = JSON.stringify(origin1)
let deepCopy = JSON.parse(copy1)

console.log(deepCopy)
// name: 'otter',
// age: 25,
// favoriteFood: {
//     first: 'sushi',
//     second: 'hamburger'
// }

deepCopy.name = 'sam'
deepCopy.favoriteFood.first = 'chicken'

console.log(origin1)
// name: 'otter',
// age: 25,
// favoriteFood: {
//     first: 'sushi',
//     second: 'hamburger'
// }

console.log(deepCopy)
// name: 'sam',
// age: 25,
// favoriteFood: {
//     first: 'chicken',
//     second: 'hamburger'
// }

// JSON.stringify로 인하여 객체는 JSON 문자열로 변하게 되고 그 이후 JSON.parse로 다시 객체로 되돌렸을 때 객체 origin1과 deepCopy는 완전히 다른 주소값을 가지게 된다.