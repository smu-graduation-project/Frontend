import React from 'react';
import Button from '@mui/material/Button';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import SitePost from './SiteAdd_post';

const SiteMap = () => {
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

  const handleClick = () => {
    open({ onComplete: handleComplete });
    
  };

  return (
    
    <>
    <Button variant="outlined" onClick={handleClick}>주소 검색</Button>
    
    </>
    
    )
    

};

export default SiteMap;