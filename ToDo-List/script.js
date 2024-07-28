const toDoInput = document.querySelector("#toDo-input");
const toDoList = document.querySelector("#toDo-list");
const savedToDoList = JSON.parse(localStorage.getItem("saved-items"));
// JSON.parse()는 아래에서 saved-items라는 키에 saveItems라는 객체를 JSON 문자열로 변환하여 localStorage에 저장해두었는데 saveItems라는 JSONS 문자열을 다시 localStorage에서 꺼내서 원래의 데이터타입(객체)로 변환해주는 역할을 한다
const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"))

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
    saveItemsFn();
  });

  if (storageData?.completeLiData) {
    // 옵셔널 체이닝 = storageData라는 객체의 값이 nullish한 값(null, undefined)인 경우 completeLiData라는 키의 value를 찾지 않고 해당 조건을 무시한다.
    // storageData에 아무런 값도 없을 때 toDoInput에 새로운 값을 입력해주었을 때 에러가 발생하는 것을 방지한다
    // if (storageData && storageData.completeLiData)
    // 옵셔널 체이닝을 사용하지 않았을 때 storageData가 존재하고 storageData.completeLiData가 존재할 때 true를 반환해주게 하는 방법도 있다.
    newLi.classList.add("completeLi");
  }

  if (storageData?.completeBtnData) {
    newBtn.classList.add("completeBtn");
  }

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
  if (window.event.keyCode === 13 && toDoInput.value.trim() !== "") {
    // window는 전역설정으로 사실 생략해도 된다
    // event는 키보드가 눌리거나 마우스가 눌리거나 등의 여러 이벤트에 대한 것을 나타내준다
    // keyCode는 위의 event로  인해 발생한 것들 중 키보드의 어떤 키가 눌렸을 때 그 키의 값을 나타내주는 것으로 keyCode 13은 Enter키이다.
    // toDoInput.value.trim()에서 trim()은 데이터 좌우에 있는 쓸데없는 공백을 지워주는 method인데 toDoInput에 공백을 입력하였을 때 toDoList에 해당 공백 값이 들어가는 것을 방지해준다.
    createToDo();
  }
};

const delAll = function () {
  const liList = document.querySelectorAll("li");
  // querySelectorAll은 모든 li태그들을 NodeList에 담겨있는 array의 형태로 반환해준다. index값을 각각 가지고 있다는 뜻
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
  saveItemsFn();
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

  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));
  // 삼항 연산자를 활용한 조건문으로 아래의 if ... else문과 같다.

  // if (saveItems.length === 0) {
  //   localStorage.removeItem('saved-items')
  // } else {
  //   localStorage.setItem("saved-items", JSON.stringify(saveItems));
  //   // JSON.stringify는 JSON 문자열 형태로 변환하는 것
  // }
};

if (savedToDoList) {
  // if(savedToDoList)라는 조건문은 savedToDoList라는 데이터의 존재하는지를 따지는 조건문이므로 존재한다면 if문 안에 있는 코드가 실행될 것이다.
  for (let i = 0; i < savedToDoList.length; i++) {
    createToDo(savedToDoList[i]);
  }
}

const weatherDataActive = function ({ location, weather }) {
  const weatherMainList = ['Clear', 'Clouds', 'Drizzle', 'Fog', 'Rain', 'Snow', 'Thunderstorm']
  weather = weatherMainList.includes(weather) ? weather : 'Fog'
  // 현재 weather가 weatherMainList에 있으면 현재 weather를 변수 weather에 할당해주고 false라면 'Fog'를 변수 weather에 할당해줘라.
  const locationNameTag = document.querySelector("#location-name-tag");
  locationNameTag.textContent = location
  document.body.style.backgroundImage = `url('./images/${weather}.jpg')`

  if (!savedWeatherData || savedWeatherData.location !== location || savedWeatherData.weather !== weather) {
    // !savedWeatherData에서 !는 not 연산자로 ! 뒤에 오는 데이터의 boolean 값을 부정해준다 ex !true = false, !false = true
    localStorage.setItem("saved-weather", JSON.stringify({location, weather}))
  }
};

const weatherSearch = function ({ latitude, longitude }) {
  // position 대신에 구조분해된 latitude와 longitude를 바로 가져왔다.
  const poenWeatherRes = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b1d9982941049e89a32530967f0f3c7f`
  )
    .then((res) => {
      return res.json();
      // json 데이터 형태로 응답이 왔으므로 일반 데이터 타입으로 변환해주어야해서 .json() method를 사용한 것이다.
      // .json() method는 JSON.parse()와 같은 기능을 하지만 JSON.parse()는 헤더가 포함되어있는 데이터는 제대로 변환하지 못하므로 .json method를 사용한 것이다.
    })
    .then((json) => {
      console.log(json.name, );
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
      };
      weatherDataActive(weatherData)
    })
    .catch((err) => {
      console.log(err);
    });
};

// const askForLocation = function () {
//   navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position)
//   })
// } 화살표 함수가 들어간 위 형태의 함수를 아래 형태로 함수 표현식을 사용하여 필요에 따라 나눠서 사용할 수 있다.

const accessToGeo = function ({ coords }) {
  // position을 구조분해할당하여 {coords}를 바로 가져왔다.
  const { latitude, longitude } = coords;
  // coords를 구조분해하여 latitude와 longitude를 가져왔다.
  const positionObj = {
    latitude,
    longitude,
  };
  // short-hand property (key = value 가 같은 데이터일때 =를 생략하고 데이터를 한번만 작성해줌)
  // 위도와 경도를 객체에 담아 정리해두었다.
  weatherSearch(positionObj);
};

const askForLocation = function () {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    // 위치 정보를 받아오는 것에 success했을 때, error가 발생했을 때 모두를 화살표 함수를 사용하여 넣다보면 식이 길어지고 가독성이 떨어지기에 success상황에 대한 함수를 위에서 accessToGeo에 담아주어 따로 넣어줬다.
    console.log(err);
  });
};
askForLocation();
if (savedWeatherData) {
  weatherDataActive(savedWeatherData)
}
