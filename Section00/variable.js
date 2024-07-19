let box;
// let 키워드로 box라는 변수를 선언해줌
box = 1;
// box라는 변수에 1을 할당해줌
console.log(box)
1
box = 5;
// box라는 변수에 5를 재할당해줌
console.log(box)
5


let test;
// let 키워드로 test라는 변수를 선언해줌
// let test;
// test라는 변수를 재선언해주니 오류가 발생함
// Uncaught SyntaxError: Identifier 'box' has already been declared

// let 키워드는 재할당은 가능o / 재선언은 불가능x

// ========================================

// const word;
// VM914:1 Uncaught SyntaxError: Missing initializer in const declaration
// const 키워드는 변수 선언과 할당을 동시에 해야한다 아래 firstWord 참고
const firstWord = 'abc';
firstWord
'abc'

const secondWord = 'abc';
// const secondWord = 'def';
// Uncaught SyntaxError: Identifier 'secondWord' has already been declared
// const 키워드는 재할당이 불가능하다

// const 키워드는 재할당 불가능x / 재선언 불가능x 따라서 에러를 미연에 방지할 수 있는 엄격한 키워드이다.

var uniqueWord;
uniqueWord = 'unique';
console.log(uniqueWord)
unique
var uniqueWord;
uniqueWord = 'unUnique';
console.log(uniqueWord)
unUnique
// var 키워드는 재할당 가능o / 재선언 가능o 따라서 변수명이 중복 사용된다면 예기치 못한 에러 발생 가능 절대 사용 하지말자 xxxxxx

// ===================================

// [ 변수명 주의사항 ]
// 변수명은 명사로 -> 동사로 사용 가능하지만 우리간의 약속
// 첫글자 숫자x -> 그냥 알파벳으로만 사용하자
// 자바스크립트 예약어는 사용하면 안됨 -> https://ko.w3hmong.com/js/js_reserved.htm 참고
