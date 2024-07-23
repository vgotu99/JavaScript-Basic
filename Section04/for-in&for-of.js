// 객체 예제
const testObj = {
    testKey1: 'testValue1',
    testKey2: 'testValue2',
    testKey3: 'testValue3',
    testKey4: 'testValue4',
    testKey5: 'testValue5'
}

// for-in문
for (let key in testObj) {
    // let A(key) in B(obj)는 객체B의 키A를 가져오는 것으로 A 위치에는 해당 객체의 키값들을 담아줄 변수명을 넣어주면 된다.
    console.log(key)
}
testKey1
testKey2
testKey3
testKey4
testKey5
// for-in문은 자동으로 하나씩 증감하며 객체의 길이까지만 증감한다. 따라서 증감식과 조건문을 작성해줄 필요가 없다. / 객체에 사용하기 좋음


const testArr = ['testElement1', 'testElement2', 'testElement3', 'testElement4', 'testElement5']
// for-of문
for (let element of testArr ) {
    console.log(element)
}
testElement1
testElement2
testElement3
testElement4
testElement5