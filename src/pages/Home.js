import React, { useState } from 'react';
import './Home.css';
import heroImg from '../images/hero_banner.jpg';
import bgTxt from '../images/bg_txt.png';
import intro01 from '../images/intro01.jpg';
import intro02 from '../images/intro02.jpg';
import intro03 from '../images/intro03.jpg';
import prevBtn from '../images/icon/prevBtn.png';
import nextBtn from '../images/icon/nextBtn.png';
import lastBg01 from '../images/bg01.jpg';
import lastBg02 from '../images/bg02.jpg';

import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import perfumeData from '../data/perfumeData';
import scentStoryData from '../data/scentstoryData';
import Button from '../components/Button';
import ArchivePopup from '../components/ArchivePopup';
import FavoriteButton from '../components/FavoriteButton';
import { addFavorite } from './store';
import { useSelector ,useDispatch } from 'react-redux';


function Home() {

  const listRef = useRef();

  const prevSlide = () => {
    listRef.current.scrollBy({
      left: -370,
      behavior: 'smooth'
    });
  };

  const nextSlice = () => {
    listRef.current.scrollBy({
      left: 370,
      behavior: 'smooth'
    });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector((state)=> state.favorite);
  const [archivePopup, setArchivePopup]=useState(false);

  return (
    <div>

      <main>

        <section className='hero'>
          <img src={heroImg} alt="메인베너" />
          <p className="hero_description">
            당신의 취향에서 <br />
            <span>향의 공식</span>을 찾습니다.</p>
        </section>

        <section className='intro_info'>

        <div className='formula_intro'>
          <div className="formula_title">
            <p className='title_main'>Find Your Scent Formula</p>
            <p className='title_shadow'>Find Your Scent Formula</p>
            <p className="sub_title">당신만의 향수를 찾아드립니다.</p>
          </div>
          <Link to="/scan" className="scan_btn">
          분석해보기 →</Link>
        </div>

          <img className='bgTxt' src={bgTxt} alt="백그라운드 텍스트" />

          <img className='introImg01' src={intro01} alt="인트로01" />

          <div className="intro_txt">
            <p className="intro_txt01">향수, 어렵게 느껴지셨다면 SCENT LAB이 도와드릴게요.</p>
            <p className="intro_txt02">Scent LAB은 개인의 취향을 분석하고 분위기·상황에 맞게 향수를 조합해 제안하는 향의 연구소입니다.<br />
            어려운 조향 용어 없이, 몇 가지 질문에 답하면 나만의 향수 리스트가 소개돼요.<br />
            마음에 드는 향수는 저장해두고 언제든 꺼내보세요.</p>
          </div>
        </section>

        <section className='best_perfumes'>
          <div className="line"></div>

          <div className="mainTitle_box">
            <div className="title_box">
              <p className='mainTitle'>Best Perfumes</p>
              <p className='subTitle'>Scent LAB에서 가장 많이 추천된 향수들</p>
            </div>

            <div className="slideBtn">
              <button className="prevBtn" onClick={prevSlide}>
                <img src={prevBtn} alt="이전버튼" />
              </button>
              <button className="nextBtn" onClick={nextSlice}>
                <img src={nextBtn} alt="다음버튼" />
              </button>
            </div>
          </div>

          <div className="perfumes_list" ref={listRef}>

            {perfumeData.slice(0, 8).map((perfume) => (
              <Link to={`/perfume/${perfume.id}`} key={perfume.id}>
              <div className="perfume_item">
                <div className="perfume_img">
                  <img src={perfume.image} alt={perfume.name} />
                  <FavoriteButton
                    perfume={perfume}
                    isFavorite={
                      favorites.some((item)=>item.id === perfume.id)
                    }
                    onFavorite={(perfume)=>{
                      dispatch(addFavorite(perfume));
                      setArchivePopup(true);
                    }}
                  />
                  {/* <i className="fa-regular fa-heart" onClick={(e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    dispatch(addFavorite(perfume));
                    setArchivePopup(true);}}></i> */}
                </div>

                <div className="item_text">
                  <p className='item_name'>{perfume.name}</p>
                  <p className='item_size'>{perfume.size}</p>
                </div>

                <div className="tags">
                  {perfume.tags.map((tag, index) => (
                    <span key={index}>#{tag}</span>
                  ))}
                </div>
              </div>
              </Link>
            ))}

          </div>
        </section>

        <section className='scent_story'>
          <div className="mainTitle_box">
            <div className="title_box">
              <p className='mainTitle'>Scent Story</p>
              <p className='subTitle'>어려운 향기의 세계, 이야기로 설명해드릴게요.</p>
            </div>
            <p className="more"><Link to="/perfumes">더보기→</Link></p>
          </div>

          <div className="story_list">
            {scentStoryData.map((story) => (
              <div className="story_box" key={story.id}>
                <div className="story_img">
                  <img src={story.image} alt={story.name} />
                </div>

                <div className="story_text">
                  <p className="story_name">{story.name}</p>
                  <p className="story_tag">{story.tag}</p>
                  <p className="story_desc">{story.desc}</p>

                  <Button
                  text="관련 향수 보러가기"
                  onClick={() => navigate('/Perfumes')}
                />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='last_box'>
          
          <img className='lastbg01' src={lastBg01} alt="lastbg01" />

          <div className='deco_txt'>
          <p className='deco01'><span className='deco_black'>Find</span> Your Scent Formula&nbsp;&nbsp;&nbsp;</p>
          <p className='deco02'>&nbsp;&nbsp;Find <span className='deco_black'>Your</span> Scent Formula</p>
          <p className='deco03'>Find Your <span className='deco_black'>Scent</span> Formula&nbsp;&nbsp;</p>
          <p className='deco04'>Find Your Scent <span className='deco_black'>Formula</span></p>
        </div>

          <img className='lastbg02' src={lastBg02} alt="lastbg02" />

            <div className="lastbg03">
              <div className="lastbg_text">
                <p>Scent LAB에서 당신만의 향수를 찾아보세요.</p>
                <p>Scent LAB은 개인의 취향을 분석하고 조건을 조합해<br /> 최적의 맞춤 향수를 추천해드립니다.</p>
                <Button
                  className="cta_scan"
                  text="나만의 향수 찾아보기"
                  onClick={()=>navigate('/scan')}
                />
                <Button
                  className="cta_scan"
                  text="모든 향수 탐색해보기"
                  onClick={()=>navigate('/perfumes')}
                />
              </div>
            </div>

        </section>

        <div className="top_btn"
          onClick={()=>{
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
        >
          ↑<br />TOP
        </div>

        <ArchivePopup
          open={archivePopup}
          close={()=>setArchivePopup(false)}  
        />

      </main>

    </div>
  )
}

export default Home;
