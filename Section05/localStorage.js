localStorage.setItem(keyName, keyValue);
// 해당 객체에 key와 value를 포함하는 property를 추가한다
// objectName.keyName = keyValue / objectName['keyName'] = 'keyValue' 와 비슷하다고 생각하면 될 거 같음
// 해당 key에 새로운 value가 입력되면 이전에 있던 value는 삭제되고 가장 최근 value만 남게된다

localStorage.getItem(keyName);
// 해당 key에 존재하는 value를 가져온다

localStorage.removeItem(keyName);
// 해당 key에 존재하는 value를 삭제한다
