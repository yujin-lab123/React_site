import React from 'react';
import './PerfumeDetail.css';
import perfumeDetailData from '../data/perfumesDetailData.js';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import bgTxt from '../images/bg_txt.png';
import { addFavorite } from './store.js';
import ArchivePopup from '../components/ArchivePopup.js';


function PerfumeDetail() {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [archivePopup, setArchivePopup]=useState(false);
  const perfume = perfumeDetailData.find(
    (item) => item.id === Number(id)
  );

  if(!perfume){
    return(
      <p className="not_found">향수 정보를 찾을 수 없습니다.</p>
    );
  }

  return (
    <section className="perfume_detail">

      <div className="bread_nav">
        <Link to="/"><span className="home">Home</span></Link>
        <span>&gt;</span>
        <Link to="/perfumes"><span className="perfumes">Perfumes</span></Link>
        <span>&gt;</span>
        <span className="current">Perfumes Detail</span>
      </div>

      {/*-------- DetailPage_design --------*/}

      <img className='bgTxt' src={bgTxt} alt="백그라운드 텍스트" />

      <div className="detail_container">

        <div className="detail_main">
          <div className="detail_main_img">
            <img src={perfume.mainImage} alt={perfume.nameKo} />
          </div>
          {/* <i className="fa-regular fa-heart" onClick={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            dispatch(addFavorite(perfume));
            setArchivePopup(true);
          }}></i> */}
        </div>

        <div className="detail_text">
          <p className="perfume_name">{perfume.nameKo}</p>
          <p className="perfume_size">({perfume.size})</p>
          <div className="perfume_tags">
            {perfume.tags.map((tag, index)=>(
              <span key={index} className='perfume_tag'>#{tag}</span>
            ))}
          </div>
        </div>

        <div className="scent_image_content">
          <div className="perfume_title_box">
            <p className="detail_main_title">Scent Image</p>
            <p className="detail_sub_title">이 향기를 닮은 이미지들이에요.</p>
          </div>

          <div className="scent_images">
            {perfume.scentImages.map((image, index)=>(
              <div className='scent_perfume_item'>
                <div className="scent_img" key={index}>
                  <img src={image.src} alt={image.alt} />
                </div>
                <div className='scent_img_info'>{image.alt}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="scent_info_content">
          <div className="perfume_title_box">
            <p className="detail_main_title">Scent Info</p>
            <p className="detail_sub_title">향에 대한 설명을 쉽게 해드릴게요.</p>
          </div>

          <div className="scent_info_text">
            {perfume.scentInfo.map((info, index)=>(
              <div className="scent_info" key={index}>
                <div className="scent_info_tag">
                  #{info.tag}
                </div>
                <div className="scent_info_txt">
                  {info.description.map((txt, txtIndex)=>(
                    <p key={txtIndex}>{txt}</p>
                  ))}
                </div>
              </div>
            ))}
            <div className="info_bg">
              <img src={perfume.mainImage} alt={perfume.nameKo} />
            </div>
          </div>
        </div>

        <div className="scent_story_content">
          <div className="perfume_title_box">
            <p className="detail_main_title">Scent Story</p>
            <p className="detail_sub_title">이 향수를 사람으로 표현한다면...</p>
          </div>

          <p className="scent_story_title">{perfume.scentStory.title}</p>

          <div className="story_text_box">
            {perfume.scentStory.story.map((story, index)=>(
              <div className="story_text" key={index}>
                {story.map((txt, txtIndex)=>(
                  <p key={txtIndex}>{txt}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Button
          className="ex_perfumes"
          text="다른 향수 알아보기"
          onClick={()=>navigate('/perfumes')}
        />

      </div>

      <ArchivePopup
        open={archivePopup}
        close={()=>setArchivePopup(false)}  
      />

    </section>
  )
}

export default PerfumeDetail;
