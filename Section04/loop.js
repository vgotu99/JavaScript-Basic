// for 문
for(let i = 0; i < 10; i = i + 1) {
    // for(최초식; 조건식; 증감문)
    console.log(i)
}
// 최초식 -> 조건식 -> console.log -> 증감문 -> 최초식 -> 조건식 -> .........
0
1
2
3
4
5
6
7
8
9

// while 문
let i = 0;
// 최초식
while (i < 10) {
    // (조건식)
    console.log(i)
    i= i + 1
    // 증감문
}
// 최초식 -> 조건식 -> console.log -> 증감문 -> 최초식 -> 조건식 -> .........
// 조건식에 종료 조건을 제대로 설정해야만 한다. 그렇지 않다면 무한 반복된다.
0
1
2
3
4
5
6
7
8
9

// 종료 조건을 제대로 설정하지 않은 while문
let i2 = 0;
let status2 = true
while (status2 === true) {
    console.log(i2)
    i2 = i2 + 1
}
// 이때는 종료 조건이 제대로 설정되어 있지않다. 왜냐면 status2는 항상 true이니까
let i3 = 0;
let status3 = true
while (status3 === true) {
    console.log(i3)

    if(i3 < 10) {
        status3 = false
    }
    // i3가 10을 초과하면 status3는 false가 되어야한다는 조건을 추가해주니 비로소 종료 조건이 제대로 설정된 것이다.

    i3 = i3 + 1
}