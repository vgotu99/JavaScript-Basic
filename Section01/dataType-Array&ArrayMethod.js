// Array (배열)
// 순서가 있는 여러 데이터(요소)들의 집합

let ranking = ["Jason", "Alice", "Chris"];
// 변수에 배열을 할당해줄 때는 반드시 [ ]를 사용해야한다 !!!
console.log(ranking)
(3) ['Jason', 'Alice', 'Chris']
console.log(ranking[0])
Jason
console.log(ranking[1])
Alice
// 각 요소는 index값을 가지고 있고 그 index값은 왼쪽에서 0번부터 시작한다. ex) index 0번 = Jason / index 1번 = Alice / index 2번 = Chris

console.log(ranking.length)
3
// Array.length는 length라는 property를 배열에 적용한 모습으로 해당 배열에 들어있는 데이터의 길이(갯수)를 확인할 수 있다.
// length는 index값과 다르게 왼쪽에서 1부터 시작한다
// ex) Jason = index 0번, length 1번 / Alice = index 1번, length 2번 / Chris = index 2번, length 3번

// =============================================

// Method란 어떠한 기능을 가지고 있는 명령어이다.
// Array.push()
// 배열의 가장 뒤에 원하는 데이터를 추가하는 method
ranking.push("Jane")
console.log(ranking)
(4) ['Jason', 'Alice', 'Chris', 'Jane']
// push method로 Jane이라는 데이터를 추가해준 모습

// Array.pop()
// 배열의 가장 뒤에 있는 데이터를 삭제하는 method
ranking.pop()
// push metohd 와는 다르게 ()안에 특정 데이터를 넣는 것이 아님. 항상 맨 뒤 데이터만 삭제 가능함
console.log(ranking)
(3) ['Jason', 'Alice', 'Chris']
// pop method로 맨 뒤에 있는 데이터를 삭제해준 모습

// Array.includes()
// 해당 배열에 특정 데이터가 존재하는지 확인하는 method로 Boolean 데이터 타입인 true 혹은 false로 반환한다.
ranking.includes("Alice")
true
ranking.includes("alice")
false
// 대소문자 유의해야함! includes method 경우를 제외하고도 항상 대소문자 유의!!

// Array.indexOf()
// 해당 배열에서 특정 데이터의 index 값을 반환해주는 method
// indexof가 아닌 indexOf로 반드시 대문자로 입력해주어야함
ranking.indexOf("Alice")
1