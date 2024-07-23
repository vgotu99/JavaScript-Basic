// Parameter 매개변수
// 함수를 선언할 때, 소괄호 안에 정의되는 변수

const test1 = function(a,b) {
    // 여기서 임의로 설정된 a와 b가 매개변수
    console.log(a)
    console.log(b)
}
test()
undefined
undefined

// Arguments 전달인자
// 함수를 호출할 때, 함수 내부로 전달되는 데이터

const test2 = function(a,b) {
    console.log(a)
    console.log(b)
}
test(10,20)
// 여기서 입력된 전달인자 10은 매개변수 a에 할당되고, 전달인자 20은 매개변수 b에 할당된다.
10
20

const sum = function (a,b) {
    let result = a + b
    return result
}
sum(30,70)
100