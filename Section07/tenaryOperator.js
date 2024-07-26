// Tenary Operator 삼항 연산자 (조건문)

condition ? exprIfTrue : exprIfFalse
// condition = 조건문
// exprIfTrue = 조건문이 true를 반환할 경우 실행되는 표현식
// exprIfFalse = 조건문이 false를 반환할 경우 실행되는 표현식

if (condition) {
    exprIfTrue
} else {
    exprIfFalse
}
// 위 if 문과 같은 결과를 도출한다.

// ===============

condition1 ? exprIf1
: condition2 ? exprIf2
: condition3 ? exprIf3
: exprIf4
// 위의 삼항 연산자를 활용한 조건문은 아래의 if... else if... else문과 같다.

if (condition1) {
    exprIf1
} else if (condition2) {
    exprIf2
} else if (condition3) {
    exprIf3
} else {
    exprIf4
}