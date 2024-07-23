const msgContainer = document.querySelector("#d-day-msg");
// msgContainer.textContent = "D-Day를 입력해주세요.";
// .textContent 해당 태그 내부에 직접 메세지를 입력해줄 수 있는 속성
msgContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
// innerHTML 속성은 = ' ' 안에 <태그>내용을 넣어줄 수 있게 해주는 속성이다. <button> 등도 사용 가능

const container = document.querySelector("#d-day-container");

container.style.display = "none";
// style이라는 속성을 부여해주면 css 속성을 사용할 수 있게 된다. 따라서 display = 'none' 속성을 부여해줌으로써 #d-day-container가 화면에 표시되지 않도록 한다.

const intervalIdArr = [];
// starter에 쓰일 배열

const savedData = localStorage.getItem('saved-date')



const dateFormMaker = function () {
  const inputYear = document.querySelector("#targetYearInput").value;
  const inputMonth = document.querySelector("#targetMonthInput").value;
  const inputDate = document.querySelector("#targetDateInput").value;
  // querySelector이란 document의 method로 원하는 태그를 가져올 수 있다.
  const inputDateForm = `${inputYear}-${inputMonth}-${inputDate}`;
  // 템플릿 리터럴 = ` `으로 감싸준 내용은 ' '와 문자열로 만들어준다는 내용은 같지만 ' '와는 다르게 ` `안에 바로 변수 데이터를 넣을 수 있다. ${변수} 형식으로 입력해주면 되고 변수 외에 내용들은 자유롭게 입력해주면 되며 + 기호는 사용하지 않아도 된다.
  // const inputDateForm = inputYear + '-' + inputMonth + '-' + inputDate
  //=> 템플릿 리터럴 방식을 사용하지 않고 작성한다면 이런 식으로 작성되었을 것임, 따라서 조금 더 깔끔하고 짧게 작성할 수 있기에 나중에 꼭 다시 활용해보자

  return inputDateForm;
  // return 변수 = 현재 함수를 종료하면서 현재 함수 내에 있던 변수 값을 밖으로 꺼내주는 역할을 한다. dateFormMaker에 묶여있던 inputDateForm 라는 변수값을 밖으로 꺼내주어 밑 counterMaker에서 사용할 수 있도록 해주었다.
};

const counterMaker = function (data) {
  const nowDate = new Date();
  // new Date()는 현재시간을 가져와준다
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  // new Date("0000-00-00")은 해당 날짜를 가져온다(오전 9시 고정) , .setHours(0,0,0,0) method를 뒤에 입력해주면 자정 0시를 기준으로 셋팅한다.
  const remaining = (targetDate - nowDate) / 1000;
  // targetDate - nowDate한 값은 0.000초 까지 표현하기 때문에 / 1000 해줘서 소수점 밑 수를 구분해줌
  if (remaining <= 0) {
    // console.log("타이머가 종료되었습니다.");
    // 만약 remaining = 0이라면, 타이머가 종료되었습니다. 메시지 출력
    msgContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    msgContainer.style.display = "flex";
    container.style.display = "none";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    // isNaN(data) = data의 값이 NaN으로 반환되는지 확인하는 방법이다.
    // console.log("유효한 시간대가 아닙니다.");
    // 만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 메시지 출력
    msgContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    // innerHTML은 script 파일 중 위에서 사용된 innerHTML의 내용을 지우고 새로 만들어준다. 따라서 위에 입력된 'D-Day를 입력해주세요.', '타이머가 종료되었습니다.' 라는 내용의 innerHTML이 사라지고 밑에서 새로 만들어진 innerHTML이 해당 자리에 들어가게 된다.
    msgContainer.style.display = "flex";
    container.style.display = "none";
    setClearInterval();
    // 타겟 날짜를 잘못 입력했을 때 interval이 내부에서 계속 돌아가는 것을 방지하기 위하여 clearInterval함수를 넣어주어야한다.
    return;
    // 함수를 반환할때는 return 함수명 으로 쓰이지만 함수를 종료할 때도 쓰인다. 굳이 함수가 더 진행될 필요가 없을 때 return만 입력해서 함수 종료용으로 쓰자
  }

  //   const remainingDate = Math.floor(remaining / 60 / 60 / 24);
  //   // Math.floor method를 사용하여 소수점 밑 수를 없애줬고 remaining 을 60으로 나눠서 분으로 또 60으로 나눠서 시간으로 그리고 24로 나눠서 일로 구분하였다.
  //   const remainingHour = Math.floor((remaining / 60 / 60) % 24);
  //   // % 연산자는 나머지를 가져온다. 그러므로 % 24를 하여 몇분 남았는지만 확인하는 것
  //   // ex) 5 % 2 = 1 , 10 % 5 = 0
  //   const remainingMin = Math.floor((remaining / 60) % 60);
  //   const remainingSec = Math.floor(remaining % 60);
  // 아래에 객체 형태로 담아주었기에 주석처리함

  const remainingObj = {
    remainingDate: Math.floor(remaining / 60 / 60 / 24),
    remainingHour: Math.floor((remaining / 60 / 60) % 24),
    remainingMin: Math.floor((remaining / 60) % 60),
    remainingSec: Math.floor(remaining % 60),
  };

  // const days = document.querySelector("#days");
  // const hours = document.querySelector("#hours");
  // const minutes = document.querySelector("#minutes");
  // const seconds = document.getElementById("seconds");
  // // document의 getElementById 속성은 html 파일에서 id값을 가져온다. 따라서 querySelector과는 다르게 (' ')안에 #을 붙이지 않고 id명만 작성해줘도 된다.
  // // getElementByClassName도 있음
  // 아래에 객체 형태로 담아주었기에 주석처리함

  // const documentObj = {
  //   days: document.querySelector("#days"),
  //   hours: document.querySelector("#hours"),
  //   minutes: document.querySelector("#minutes"),
  //   seconds: document.getElementById("seconds"),
  // };
  // 위 html의 태그를 가져오던 배열을 아래 for-of문을 이용하여 내용을 줄여주었.

  const documentArr = ["days", "hours", "minutes", "seconds"];

  // documentObj.days.textContent = remainingObj.remainingDate;
  // documentObj.hours.textContent = remainingObj.remainingHour;
  // documentObj.minutes.textContent = remainingObj.remainingMin;
  // // 닷 노테이션 형식
  // documentObj["seconds"].textContent = remainingObj["remainingSec"];
  // // 브라켓 노테이션 형식
  // documentObj와 remainingObj 연결해줌
  // 아래 반복문을 통해 해당 내용을 줄였다.

  const remKeys = Object.keys(remainingObj);
  // const docKeys = Object.keys(documentObj);
  //
  // for (let i = 0; i < remKeys.length; i = i + 1) {
  //   documentObj[docKeys[i]].textContent = remainingObj[remKeys[i]]
  //   // documentObj.docKeys[i].textContent = remainingObj.remKeys[i]
  // }
  // for문을 사용하여 위의 내용을 줄여주었다.
  // 위 for문을 아래 for-in문으로 바꿔주었고 for-in문으로 변경하는 과정에서 const docKeys는 필요없어져서 주석 처리해주었다.

  // // 위 주석처리된 const documentObj 배열 확인해서 아래 for-in문을 작성했다.
  // let i = 0
  // for (let key in documentObj) {
  //   documentObj[key].textContent = remainingObj[remKeys[i]]
  //   i++
  //   // [i++]은 [i = i + 1]과 같은 의미로 하나씩 증감한다는 뜻
  // }
  // // 여기서 i에 관한 최초식, 증감식을 작성해준 이유는 for-in문은 현재 documentObj에 걸려있는 것으로 remainingObj의 remKeys에는 i에 대한 최초식, 증감식이 필요한 상태이다. 하지만 조건문(종료 조건)이 없는 이유는 for-in문으로 작성한 documentObj가 있기 때문에 조건문을 작성해주지 않아도 자동으로 documentObj의 길이에 맞춰 종료된다.

  const numberForm = function (time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  // 조금 위의 const documentArr = ['days', 'hours', 'minutes', 'seconds'] 를 참고해서 아래 for-of문을 작성했다
  let i = 0;
  for (let tag of documentArr) {
    const remainingTime = numberForm(remainingObj[remKeys[i]]);
    // remainingObj[remKeys[i]] << 이거가 remainingObj의 전달인자로 작동함
    document.getElementById(tag).textContent = remainingTime;
    i++;
  }
};

const starter = function () {
  const targetDateInput = dateFormMaker();
  // 카운트다운 시작 후 날짜를 변경시 즉시 카운트다운에 영향을 가는 부분을 수정하기 위해서 starter 함수 내로 이동함.
  localStorage.setItem("saved-date", targetDateInput);
  // localStorage는 특정 웹페이지를 접속해둔 브라우저 및 탭을 닫더라도 데이터가 존재하도록하여 나중에 해당 웹페이지를 접속하였을 때 이전 데이터를 가져올 수 있도록 하는 storage이다.
  // setItem(keyName, keyValue) method는 해당 객체에 key와 value를 포함하는 property를 추가한다
  // objectName.keyName = keyvalue 와 비슷하다고 생각하면 될 거 같음
  // targetDateInput에 새로운 value가 입력되면 이전에 있던 value는 삭제되고 가장 최근 value만 남게된다
  container.style.display = "flex";
  msgContainer.style.display = "none";
  setClearInterval();
  counterMaker(targetDateInput);
  // counterMaker로 targetDateInput값을 보내기 위해서 targetDateInput을 매개변수로 활용함

  // for (let i = 0; i < 100; 1++) {
  //   setTimeout(() => {
  //     counterMaker()
  //   }, i * 1000)
  // }
  // for문과 setTimeout method를 활용하여 카운트다운 시간이 흐르는 것 처럼 보여주었지만 종료 조건 설정이 까다롭고 동작이 어색했다. 따라서 setInterval method를 적용하여 카운트다운 시간 흐름을 보여주겠다.
  const intervalId = setInterval(() => {
    counterMaker(targetDateInput);
    // 전달인자 targetDateInput을 넣어줘야하니 화살표 익명 함수를 넣어주었다.
    // starter함수 내의 counterMaker에는 모두 매개변수 targetDateInput을 넣어줘야함
  }, 1000);
  //
  intervalIdArr.push(intervalId);
};

const setClearInterval = function () {
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};

const resetTimer = function () {
  container.style.display = "none";
  msgContainer.style.display = "flex";
  msgContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
  setClearInterval();
};
