import axios from 'axios';
import React from 'react';

var bodyFormData = new FormData();
bodyFormData.set('nodeName', 'Site', 'Node');

const DataPost = () => {
    
    axios({
        method: 'post',
        url: '/setting/addnode',
        data: bodyFormData
    })
        .then(function (response) { console.log(response); }) 
        .catch(error => { console.log('error : ',error.response) })
}

export default DataPost;