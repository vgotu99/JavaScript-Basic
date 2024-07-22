// Primitive type 원시 타입
// String, Number, Boolean, Bigint, Undefined, Symbol, Null 이 해당된다
let box = "abc";
box = "def";

// 예를 들어 abc라는 데이터가 담겨있는 주소값이 100이라고 가정하고 def라는 데이터가 담겨있는 주소값이 200이라고 가정하면
// let box = 'abc'를 하였을 때 실제로 box 안에는 100이라는 주소값이 들어가있는 것이고 해당 주소값에 해당하는 데이터가 abc니까 box에는 abc가 들어있는 것 처럼 보이는 것이다.
// 이후 box = 'def'를 하였을 때 실제로 box 안에는 200이라는 주소값이 들어가있는 것이고 해당 주소값에 해당하는 데이터인 def가 들어 있는 것 처럼 보이는 것이다.

// box 안에는 특정 주소값이 있고 특정 주소값에 해당하는 데이터를 반환해주는 것이다.
// box -> 특정 주소값 -> 실제 데이터

let origin = "hi";
let copy = origin;
origin = "bye";
console.log(copy);
hi;
// 처음에 origin에 "hi"를 할당해주었을 때 "hi"라는 데이터가 들어가있는 주소값이 예를 들어 100이라고 하였을 때 copy는 100이라는 주소값이 할당되며 "hi"라는 데이터가 들어가게 된다. 이후 origin에 주소값 200인 "bye"를 할당해주었는데 이때 origin에 들어깄는 주소값만 100->200으로 변경되게 된 것이고 copy에는 여전히 주소값 100이 할당되어있으니 console.log(copy)를 해주었을 때 hi라는 데이터가 출력되는 것이다.
let origin2 = "hi";
let copy2 = origin2;
origin2 = "bye";
copy2 = origin2;
console.log(copy2);
bye;
// 다만 위의 경우 처럼 origin에게 새로운 주소값을 할당해준 뒤 copy에게 다시 origin의 새로운 주소값을 할당해준다면 copy도 origin과 같이 200이라는 주소값을 가지게 되며 bye가 출력되게 된다.

// Reference type 참조 타입
// Primitive type에 포함되는 data type들을 제외한 Array, Object 등이 포함된다.
let obj = {
  name: "tigger",
  color: "orange",
};

// obj 안에는 특정 주소값이 있고 특정 주소값 안에는 실제 객체(object)가 저장되어있는 주소값이 있어서 obj 안에는 실제 객체가 있는 것처럼 보이는 것이다.
// obj -> 특정 주소값 -> 객체가 저장되어있는 주소값 -> 실제 객체 데이터

let arr = [1, 2, 3];
// arr === [1, 2, 3]
false;
// arr에 들어있는 [1, 2, 3]이라는 데이터에 할당된 주소값과 새로 만들어준 [1, 2, 3]이라는 배열에 할당된 주소값이 다르기 때문에 같아 보이더라도 false를 반환하게 되는 것이다. 실제로 다르다는 뜻

let origin3 = [1, 2, 3];
let copy3 = origin3;
origin3.pop();
console.log(copy3)[(1, 2)];
console.log(origin3)[(1, 2)];
// 원시 타입과 달리 참조 타입은 origin -> 특정 주소값 -> 객체가 저장되어있는 주소값 -> 실제 객체 데이터 의 흐름으로 데이터를 반환하기 때문에 origin의 배열에서 pop method로 3을 삭제하더라도 객체가 저장되어있는 주소값은 변함이 없다. 예를 들어 origin의 특정 주소값이 200, 객체가 저장되어있는 주소값이 256 실제 객체 데이터가 [1, 2, 3]이었을 때 copy는 200이라는 특정 주소값을 갖게되고 자연스럽게 객체가 저장되어있는 주소값이 256이 되며 실제 객체 데이터가 [1, 2, 3]이 된다. 이때 origin의 배열에 pop method로 3이라는 데이터를 삭제한다면 origin의 특정 주소값은 변함 없이 200이고, 객체가 저장되어있는 주소값도 역시 변함없이 256이고 객체 데이터만 [1, 2]로 변경된다. 그러므로 copy는 let copy = origin을 통해서 200이라는 특정 주소값을 갖게 되었으니 origin과 같은 데이터를 반환할 수 있게되는것이다.
