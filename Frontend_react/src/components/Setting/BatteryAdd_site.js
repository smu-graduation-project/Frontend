import React, { useEffect, useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//import { selectRow } from '@modules/boardReducer'
import axios from 'axios';
import { cookies, setCookie, useCookies, getCookie } from "react-cookie";
 
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
            const res = await axios.get('http://220.149.31.104:9090/api/product/site/all')
            const inputData = await res.data.map((rowData) => (
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
            setInputData(inputData.concat(inputData))
        } catch(e){
            console.error(e.message)
        }
    },[])
 
    return(
        <div>
                <table className='listTable'>
                    <tbody>
                        <tr>
                            <td className='listTableName th'>name</td>
                            <td className='listTableAddress th'>address</td>
                        </tr>
                        {/* rowData 가 없으면 'site 없습니다'를 나타냄 */}
                        {lastid !== 0 ?
                            inputData.map(rowData => (
                            	// 최초 선언한 기본값은 나타내지 않음
                                rowData.name !== '' &&
                                <tr>
                                    <td className='listTableName'>
                                    	{/* router 로 이동 시 name값을 param 으로 전달 */}
                                        <Link to={`/${rowData.name}`}>{rowData.name}</Link>
                                    </td>
                                    <td className='listTableAddress'>
                                        {rowData.address}
                                    </td>
                                </tr>
                            )) : 
                            <tr>
                                <td className='listTableName'></td>
                                <td className='listTableAddress noData'>작성된 글이 없습니다.</td>
                            </tr>
                        }
                    </tbody>
                </table>
        </div>
    )
}
 
export default SiteList;