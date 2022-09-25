/*
import React from 'react';
import Button from '@mui/material/Button';
import DaumPostcodeEmbed, { useDaumPostcodePopup } from 'react-daum-postcode';
import SitePost from './SiteAdd_post';
import DaumPostcode from 'react-daum-postcode';
import { renderMatches } from 'react-router-dom';
import { useEffect, useState} from 'react';
import render from 'react-dom';

class SiteMap extends React.Component{

  SetAddress = () => {
    const open = useDaumPostcodePopup();

    const handleComplete = (data) => {
      let fullAddress = data.address;
      let extraAddress = '';

      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }

      console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
      
    };
  }

  handleClick = () => {
    open({})
    
  };

  useEffect(() => { this.SetAddress() }, []);

  render(){
  return (
    
    <>
    <Button variant="outlined" onClick={handleClick}>주소 검색</Button>
    <div> hi, {this.props.fullAddress} </div>
    </>

    );
  };

}
export default SiteMap;

*/

import React, { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import SitePost from './SiteAdd_post';

const SiteMap = ({recieveadd}) => {
  const [insertaddress,setAddress] = useState([]);
  const open = useDaumPostcodePopup();

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress([fullAddress]);

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    
  };

  useEffect(()=>{handleComplete()},[])

  const handleClick = () => {
    open({ onComplete: handleComplete });
    
  };

    return (
      
      <>
      <Button variant="outlined" onClick={handleClick}>주소 검색</Button>
      {/* <Button variant="outlined" onClick={recieveadd(insertaddress)}>123</Button> */}
      
      </>
      
      )

    

};

export default SiteMap;