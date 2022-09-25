import React, { useEffect, useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//import { selectRow } from '@modules/boardReducer'
import axios from 'axios';
import { cookies, setCookie, useCookies, getCookie } from "react-cookie";
import BatteryReg from './BatteryAdd_reg';
import { Button } from '@mui/material';
 
function Sitevalue(e)  {
    // 선택된 목록 가져오기

    let sitename = '';
    if (e.target.checked)  {
        sitename = e.target.value;
    }else {
        sitename = '';
    }
  
    var sitevalue = document.getElementById('sitename').innerText;
    return(
        sitevalue,
        <BatteryReg sitename={e} />
    )
}

function SiteList() {
    const [inputData, setInputData] = useState([{
        address: '',
        id: '',
        information: '',
        name: '',
        type: ''
      }])
    
    // 글 리스트의 갯수를 세기 위해 선언, 기본값 0
    const [lastid, setLastid] = useState(0)
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async() => {
        try{
            const res = await axios.get('/api/product/site/all')
            const inputData = await res.data.data.map((rowData) => (
                // rowData 의 갯수만큼 증가
                setLastid(lastid+1),
                {
                    address: rowData.address,
                    id: rowData.id,
                    information: rowData.information,
                    name: rowData.name,
                    type: rowData.type
                })
            )
            setInputData(inputData)
        } catch(e){
            console.error(e.message)
        }
    },[])
 
    return(
        <div>
                <table className='listTable'  >
                    <tbody>
                        <tr>
                            <td className='listTableId th' text-second width={100} padding={10}>Id</td>
                            <td className='listTableName th' text-second width={100} padding={10}>Name</td>
                            <td className='listTableType th' text-second width={100} padding={10}>Type</td>
                            <td className='listTableAddress th' text-primary width={100} padding={10}>Address</td>
                            <td className='listTableInformation th' text-primary width={100} padding={10}>Information</td>
                        </tr>
                        {/* rowData 가 없으면 'site 없습니다'를 나타냄 */}
                        {lastid !== 0 ?
                            inputData.map(rowData => (
                            	// 최초 선언한 기본값은 나타내지 않음
                                rowData.name !== '' &&
                                <tr>
                                    <td className='listTableId'>
                                        {rowData.id}
                                    </td>
                                    <td className='listTableName'>
                                    	{/* router 로 이동 시 name값을 param 으로 전달 */}
                                        {/*<input type='checkbox'
                                            name='sitename'
                                            id='sitename'
                            value={rowData.name}/>*/} {rowData.name}
                                        {/*<Button variant="outlined" onclick='Sitevalue({rowData.name})'> 들어가기</Button> */}
                                    </td>
                                    <td className='listTableType'>
                                        {rowData.type}
                                    </td>
                                    <td className='listTableAddress'>
                                        {rowData.address}
                                    </td>
                                    {/*<Button variant="contained" onclick='Sitevalue({rowData.name})'>선택</Button>
                                    <div id='result'>  </div>*/}
                                    <td className='listTableInformation'>
                                        {rowData.information}
                                    </td>
                                </tr>
                            )) : 
                            <tr>
                                <td className='listTableName'></td>
                                <td className='listTableAddress noData'>작성된 내용이 없습니다.</td>
                            </tr>
                        }

                    </tbody>
                </table>
        </div>
    )
}
 
export default SiteList;