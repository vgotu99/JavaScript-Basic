// Global Scope 전역 스코프
let x = 1
let y = 2

const globalScopeTest = function () {
    let z = 100
    console.log(x)
    console.log(y)
}
1
2

console.log(x + y)
3
// 변수 x, y는 전역 스코프에서 선언되었기 때문에 전역 스코프에 있는 console.log(x + y)에도 사용될 수 있고, 지역 스코프 안에 있는 console.log(x)와 console.log(y)에도 사용될 수 있다.

//  ============================
// Local Scop 지역 스코프

let a = 1
let b = 2

const localScopeTest = function () {
    let c = 100
    console.log(a)
    console.log(b)
}
0
1

console.log(c)
undefined
// 변수 a, b는 전역 스코프에서 선언되었고 c는 지역스코프 내에서 선언되었기 때문에 전역 스코프에 있는 console.log(c는 c의 값을 사용할 수 없고, 지역 스코프 안에 있는 console.log(a)와 console.log(b)는 a와 b의 값을 사용할 수 있다.