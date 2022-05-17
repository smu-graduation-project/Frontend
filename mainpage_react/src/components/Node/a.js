import axios from 'axios';
import React, { useEffect, useState} from 'react';
import qs from 'qs';

var port=1;

const DataRequest = () => {
    const [datas, setDatas] = useState([]);
    

    useEffect(() => { 
        axios({
        method: "get", // 통신 방식
        url: "http://220.149.31.104:9090/api/formerData/temperature/list"+"/"+port, // 서버
        params: {
            startDate : "2022-01-01",
            endDate : "2022-03-06"
        },
        paramsSerializer: function (params) {
            return qs.stringify(params, {arrayFormat: 'brackets'})
        },
        responseType: 'json',
        headers: {'Content-Type': `application/json`},
        })

// axios 정의 마침.
// axios.then 시작.
        .then(res => {
            console.log(res.data); // [{}, ... ,{}] 형태
            return res.data;
        })
        .then(data => {
            setDatas(JSON.stringify(data));
            
            // console.log(response.success)
            // console.log(response.status)
            // console.log(response.statusText)
            // console.log(response.headers)
            // console.log(response.config)
        })
    },[]);

    return(
        <>
        {/* 출력테스트1 */}
        <h1> {datas} </h1>

        
        </>
    );

}

export default DataRequest;