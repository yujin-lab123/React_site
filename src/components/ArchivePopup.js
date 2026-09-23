import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './ArchivePopup.css';

export default function ArchivePopup({ open, close }) {
  
  const navigate = useNavigate();
  
  if(!open){
    return null;
  }

  return (
    <div className='Archive_popup'>
      <div className="archive_popup_box">
        <button className='popup_close' onClick={close}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        <p className="popup_message">아카이브에 저장되었습니다.</p>
        <Button
          text="아카이브로 바로가기"
          onClick={()=>navigate('/archive')}
          className='popup_btn'
        />
      </div>
    </div>
  );
}
