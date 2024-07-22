const msgContainer = document.querySelector("#d-day-msg");
// msgContainer.textContent = "D-Day를 입력해주세요.";
// .textContent 해당 태그 내부에 직접 메세지를 입력해줄 수 있는 속성
msgContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
// innerHTML 속성은 = ' ' 안에 <태그>내용을 넣어줄 수 있게 해주는 속성이다. <button> 등도 사용 가능

const container = document.querySelector("#d-day-container");
// container.style.display = 'none'
// style이라는 속성을 부여해주면 css 속성을 사용할 수 있게 된다. 따라서 display = 'none' 속성을 부여해줌으로써 #d-day-container가 화면에 표시되지 않도록 한다.

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
  // return 변수 = 현재 함수를 종료하면서 현재 함수 내에 있던 변수 값을 밖으로 꺼내주는 역할을 한다. dateFormMaker에 묶여있던 inputDateForm 이라는 변수값을 밖으로 꺼내주어 밑 counterMaker에서 사용할 수 있도록 해주었다.

  // console.log(inputYear, inputMonth, inputDate)
};

const counterMaker = function () {
  console.log(container);
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  // new Date()는 현재시간을 가져와준다
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  // new Date("0000-00-00")은 해당 날짜를 가져온다(오전 9시 고정) , .setHours(0,0,0,0) method를 뒤에 입력해주면 자정 0시를 기준으로 셋팅한다.
  const remaining = (targetDate - nowDate) / 1000;
  // targetDate - nowDate한 값은 0.000초 까지 표현하기 때문에 / 1000 해줘서 소수점 밑 수를 구분해줌
  if (remaining <= 0) {
    // console.log("타이머가 종료되었습니다.");
    // 만약 remaining = 0이라면, 타이머가 종료되었습니다. 메시지 출력
    msgContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
  } else if (isNaN(remaining)) {
    // isNaN(data) = data의 값이 NaN으로 반환되는지 확인하는 방법이다.
    // console.log("유효한 시간대가 아닙니다.");
    // 만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 메시지 출력
    msgContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    // innerHTML은 script 파일 중 위에서 사용된 innerHTML의 내용을 지우고 새로 만들어준다. 따라서 위에 입력된 'D-Day를 입력해주세요.', '타이머가 종료되었습니다.' 라는 내용의 innerHTML이 사라지고 밑에서 새로 만들어진 innerHTML이 해당 자리에 들어가게 된다.
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

  const documentObj = {
    days: document.querySelector("#days"),
    hours: document.querySelector("#hours"),
    minutes: document.querySelector("#minutes"),
    seconds: document.getElementById("seconds"),
  };

  documentObj.days.textContent = remainingObj.remainingDate;
  documentObj.hours.textContent = remainingObj.remainingHour;
  documentObj.minutes.textContent = remainingObj.remainingMin;
  // 닷 노테이션 형식
  documentObj["seconds"].textContent = remainingObj["remainingSec"];
  // 브라켓 노테이션 형식
};
