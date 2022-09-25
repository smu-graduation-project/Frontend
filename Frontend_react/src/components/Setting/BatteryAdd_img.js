import Button from '@mui/material/Button';
import axios from 'axios';
import { inputRef, useCallback } from "react";
import React, { ChangeEvent } from 'react';

const Siteimg = () => {
  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    axios({
      url: '/api/product/battery/upload/image/1',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }

    alert("사진을 등록하였습니다.")
    inputRef.current.click();
  }, []);
  
  return (
    <>
      <input type="file" accept="image/*" ref={inputRef} onChange={onUploadImage} />
      <Button label="이미지 업로드" onClick={onUploadImageButtonClick} />
      </>
  );
}

export default Siteimg;