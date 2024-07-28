// Geolocation API
// navigator.geolocation.getCurrentPosition(success, error)
// 사용자의 현재 위치값을 가져오는 method
// success는 성공시 실행되는 콜백 함수(화살표 함수로 사용)
// error는 에러 발생시 실행되는 콜백 함수(화살표 함수로 사용)

const locationTest = function () {
    navigator.geolocation.getCurrentPosition((userLocation) => {
        console.log(userLocation)
    }, (err) => {
        console.log(err)
    })
}
// console.log(userLocation)의 결과
// GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1722130344281}
//     coords : GeolocationCoordinates
//         accuracy : 13.804
//         altitude : null
//         altitudeAccuracy : null
//         heading : null
//         latitude : 37.3589431
//         longitude : 127.1234699
//         speed : null
//         [[Prototype]] : GeolocationCoordinates
//     timestamp : 1722130344281
//     [[Prototype]] : GeolocationPosition
// 여기서 사용자 위치를 나타내는 정보는 latitude(위도), longitude(경도)이다.
// userLocation.coords.latitude
// userLocation.coords.longitude

// console.log(err)의 결과
// GeolocationPositionError {code: 1, message: 'User denied Geolocation'}
//     code: 1
//     message: "User denied Geolocation"
//     [[Prototype]]: GeolocationPositionError
// User denide Geolocatio이라는 메세지를 출력하고 있으며 사용자가 위치정보 엑세스를 허용해두지 않았을 때 이런 결과가 반환된다.