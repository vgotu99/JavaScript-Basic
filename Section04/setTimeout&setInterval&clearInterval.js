setTimeout(code, delay)
// setTimeout은 delay 이후 code를 1번 실행시켜주는 method 이다
// 여기서 code는 원하는 함수(화살표함수) 등을 넣어주면 되고, delay는 ms 단위로 1초 = 1000을 입력해주면 된다.

setInterval(code, delay)
// setInterval은 delay 때마다 code를 계속 실행시켜주는 method이다.

// ex)
let test = function () {
    console.log('hi')
}

setTimeout(test, 1000)
// 기본적인 형태로 사용해줄때는 test 뒤에 ()를 붙이지 않아야만 한다.XX
setTimeout(() => {
    test()
}, 1000);
// 화살표 함수 형태의 익명함수를 code 부분에 넣어서 사용할 때는 test 뒤에 ()를 붙여야만 한다.OO
hi

setInterval(test, 1000)
// 기본적인 형태로 사용해줄때는 test 뒤에 ()를 붙이지 않아야만 한다.XX
setInterval(() => {
   test() 
}, 1000);
// 화살표 함수 형태의 익명함수를 code 부분에 넣어서 사용할 때는 test 뒤에 ()를 붙여야만 한다.OO
hi
hi
hi
hi
hi
hi
hi
// ...

const intervalID = setInterval(code, delay)
clearInterval(intervalID)
// 이전에 setInterval method로 설정되어있는 interval을 종료함.
