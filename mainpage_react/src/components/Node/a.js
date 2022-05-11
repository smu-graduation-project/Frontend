import axios from 'axios';

export default function a() {
    return(
        axios({
            method: "get", // 통신 방식
            url: "http://220.149.31.104:8080/api/formerData/temperature/list", // 서버
            params : {
                "startDate" : "2022-01-01",
                "endDate" : "2022-03-05",
                "port" : 1
            },
            headers: {
                'Content-Type': 'application/json'
            }
           
        })
        .then(function(response) {
            console.log(response.success)
            // console.log(response.status)
            // console.log(response.statusText)
            // console.log(response.headers)
            // console.log(response.config)
        })
    )
}