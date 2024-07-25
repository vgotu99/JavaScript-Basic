const toDoInput = document.querySelector("#toDo-input");
const toDoList = document.querySelector("#toDo-list");
const savedToDoList = JSON.parse(localStorage.getItem("saved-items"));
// JSON.parse()는 아래에서 saved-items라는 키에 saveItems라는 객체를 JSON 문자열로 변환하여 localStorage에 저장해두었는데 saveItems라는 JSONS 문자열을 다시 localStorage에서 꺼내서 원래의 데이터타입(객체)로 변환해주는 역할을 한다

const createToDo = function (storageData) {
  let toDoContents = toDoInput.value;
  if (storageData) {
    toDoContents = storageData.contentsData;
  }

  const newLi = document.createElement("li");
  // createElement는 HTML 내부에 원하는 태그를 생성해주는 속성
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    // addEentLister method를 이용하여 click되었을 때 뒤의 함수가 newBtn에게 적용되도록 해줌
    newLi.classList.toggle("completeLi");
    // classList.toggle('complete')를 이용하여 newBtn이 클릭(체크)되었을 때 newLi에게 없던 class명을 complete로 지정해주고 다시 클릭(체크해제)되었을 때 newLi의 class명인 complete를 삭제해준다.
    newBtn.classList.toggle("completeBtn");
    saveItemsFn();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    // 더블클릭되었을 때 해당 newLi 삭제
    // 모든 각각의 newLi에게 eventListner가 추가되었고 그렇기 때문에 특정 newLi에게 더블클릭해주었을 때 해당 newLi만 삭제되는 것이다

    if (storageData.completeLi) {
      newLi.classList.add("completeLi")
    }

    if (storageData.completeBtn) {
      newBtn.classList.add("completeBtn")
    }
  });

  

  newSpan.textContent = toDoContents; // === newSpan.textContent = toDoInput.value;
  // 밑에서 toDoInput.value = ''를 사용하여 빈 값을 재할당해줘야하니 value 값을 const toDoInput의 위치가 아닌 현 위치에서 가져왔다.
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  // appendChild method는 내부에 하위 속성으로 하나의 태그를 추가하는 경우에 사용한다
  // newSpan에는 textContent를 사용하여 toDoInput에 담겨있는 input 값(String)을 담아주는 것이라 textContent를 사용하는 것이 가능했지만 newLi의 경우에는 newSpan에 담겨있는 span태그를 담아야하기 때문에 textContent가 아닌 appendChild를 사용하게 되었다.
  toDoList.appendChild(newLi);
  toDoInput.value = "";
  // 위에서 const를 활용하여 toDoInput을 선언해주었으므로 toDoInput.value 값 자체를 빈 값으로 바꾸면 된다. 하지만 let을 사용하여 선언했다 하더라도 toDoInput = ''는 작동하지 않으니 빈 값으로 만들어야할때는 변수명.value = ''을 사용하자

  saveItemsFn();
};

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && toDoInput.value !== "") {
    // window는 전역설정으로 사실 생략해도 된다
    // event는 키보드가 눌리거나 마우스가 눌리거나 등의 여러 이벤트에 대한 것을 나타내준다
    // keyCode는 위의 event로  인해 발생한 것들 중 키보드의 어떤 키가 눌렸을 때 그 키의 값을 나타내주는 것으로 keyCode 13은 Enter키이다.
    createToDo();
  }
};

const delAll = function () {
  const liList = document.querySelectorAll("li");
  // querySelectorAll은 모든 li태그들을 NodeList에 담겨있는 array의 형태로 반환해준다. index값을 각각 가지고 있다는 뜻
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
};

const saveItemsFn = function () {
  const saveItems = [];
  for (let i = 0; i < toDoList.children.length; i++) {
    const toDoObj = {
      contentsData: toDoList.children[i].querySelector("span").textContent,
      completeLiData: toDoList.children[i].classList.contains("completeLi"),
      completeBtnData:
        toDoList.children[i].children[0].classList.contains("completeBtn"),
    };
    saveItems.push(toDoObj);
  }
  localStorage.setItem("saved-items", JSON.stringify(saveItems));
  // JSON.stringify는 JSON 문자열 형태로 변환하는 것
};

if (savedToDoList) {
  // if(savedToDoList)라는 조건문은 savedToDoList라는 데이터의 존재하는지를 따지는 조건문이므로 존재한다면 if문 안에 있는 코드가 실행될 것이다.
  for (let i = 0; i < savedToDoList.length; i++) {
    createToDo(savedToDoList[i]);
  }
}
