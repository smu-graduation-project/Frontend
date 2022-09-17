// import axios from "axios";
// import { cookies, setCookie, useCookies } from "react-cookie";

// const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

// const onLoginSuccess = response => {
//   setCookie('access-token', response.headers["authorization"]);
//   // refreshToken 헤더에 설정
//   axios.defaults.headers.common['Authorization'] = cookies.get('refresh-token')
//   // accessToken 만료하기 1분 전에 로그인 연장
//   setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
// }

// const onSilentRefresh = () => {
//   //주소에 refreshtoken헤더 설정값 붙힌 상태로 post -> acesstoken 재발급.
//   axios.post('//', data) 
//       .then(onLoginSuccess)
//       .catch(function (error) {
//         console.log(error);
//       })
// }

// export {onLoginSuccess,onSilentRefresh};

// //이 모듈은 순전히 refreshtoken을 이용해 accesstoken을 갱신하는데에 이용된다.
// //이 모듈을 import 하면서(자동 accesstoken갱신) 서버로 어떠한 요청을 보낼때마다 accesstoken을
// //쿠키값에서 빼온다음, 헤더에 강제 저장후 보내기.