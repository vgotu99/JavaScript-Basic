// Hoisting 호이스팅
// 위에서 아래로 내려가며 코드를 읽고 차례대로 실행되는 것

// ========= Declaration =========

console.log(letKeyWord);
let letKeyWord = "let is safe";

// letKeyWord is not defined
// letKeyWord가 아직 선언되기 이전에 console.log(letKeyWord)에서 letKeyWord가 사용되었으니 미연에 에러를 방지하여 letKeyWord is not defined 라며 에러메세지를 반환해주는 let

// =========

// 우리가 작성한 코드
console.log(varKeyWord);
var varKeyWord = "var is not safe";

undefined;
// 반면에 varKeyWord가 아직 선언되기 이전에 console.log(varKeyWord)에서 varKeyWord가 사용되었을 때 에러메시지를 반환해주지 않고 undefined라는 falsy한 값을 반환해주며 undefined인 상태로 코드가 계속 실행되어가게 된다.

// JavaScript가 해석한 코드
var varKeyWord;
console.log(varKeyWord);
varKeyWord = "var is not safe";

undefined;
// 위 내용은 JavaScript가 우리가 작성한 코드와는 다르게 해석하는 것으로 Hoisting으로 인하여 선언부가 최상단으로 올라가게되고 console.log하게 된 후 재할당하는 과정을 거치게된다.

// ========= Function =========

fn1;

const fn1 = function () {
  console.log("error occured");
};

// fn2 is not defined
// 함수 표현식은 let 키워드와 같이 호이스팅이 일어나지 않으며 에러메세지를 반환한다.

// =========

fn2();

function fn2() {
  console.log("hoisting occurred");
}

// hoisting occured
// 함수 선언식은 var 키워드와 같이 hoisting이 되어 정의되기 이전에 호출되어도 작동한다.

// ========= TDZ (Temporal Dead Zone) =========
// 왜 let과 const는 var와 다르게 동작하는 것인가?
// let과 const 변수 선언, 함수 표현식은 총 세단계로 이루어진다
// 1단계. 선  언 단계 - 선언한 변수를 식별자(변수명)가 담기는 객체에 할당하는 단계
// (1.5단계  TDZ 단계 -
// 2단계. 초기화 단계 - 변수에 할당할 메모리 공간을 부여하는 단계
// 3단계. 할  당 단계 - 정의된 변수에 데이터가 할당되는 단계

console.log(constKeyWord);
const constKeyWord = "const is safe";

// constKeyWord is not defined
// 초기화 단계를 거치며 메모리가 할당되기도 전에 console.log로 constKeyWord를 참조하려고 했기에 오류가 발생
// 위 코드에서 const(let도 마찬가지)는 var 키워드와 마찬가지로 hoisting에 의해 선언부가 올라가서 console.log 이전에 1단계인 선언 단계를 거치게된다. 하지만 선언 단계 이후 곧바로 2단계인 초기화 단계로 가지 않고 1.5단계인 TDZ에 머무르게 된다. 따라서 선언부가 console.log 위로 올라간다고 하더라도 constKeyWord는 아직 초기화 단계로 가지 않고 TDZ에 머무르는 중이므로 메모리가 할당되지 않아 console.log(constKeyWord) 입력시 오류가 발생하는 것이다.

// var 변수 선언은 총 두단계로 이루어진다
// 1단계 선언 + 초기화 단계 - 선언과 메모리 할당이 동시에 이루어진다.
// 2단계 할당 단계
// 1단계에서 선언과 초기화 단계가 동시에 이루어지므로 hoisting이 일어났을 때 에러메세지가 아닌 undefined를 반환하는 것이다.

// 함수 선언식은 또 var 키워드와는 다르게 선언+초기화 단계에 더해 할당 단계까지 붙어있다고 볼 수 있다.
// 따라서 undefined를 반환하지 않고 코드가 실행되어버린다
