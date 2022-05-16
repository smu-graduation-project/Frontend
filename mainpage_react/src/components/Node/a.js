import axios from 'axios';
import React, { useEffect, useState} from 'react';
var port = 1;

const DataRequest = (props) => {
    const [data, setData] = useState('전송실패');
    useEffect(() => { 
        axios({
        method: "get", // 통신 방식
        url: "http://220.149.31.104:9090/api/formerData/temperature/list"+"/"+":port", // 서버
        params: {
            "startDate" : "2022-01-01",
            "endDate" : "2022-03-05",
            }
        })
        .then(function(response) {
            setData(response.data);
            console.log(response.success);
            // console.log(response.status)
            // console.log(response.statusText)
            // console.log(response.headers)
            // console.log(response.config)
        })
    });
    return(
        <h1> {data} </h1>
    );

}

export default DataRequest;