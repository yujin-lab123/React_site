import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import './ScanResult.css';
import perfumeData from '../data/perfumeData';
import pinkBg from '../images/pink_bg.png';
import download from '../images/icon/downloading.png';
import reload from '../images/icon/reload.png';
import share from '../images/icon/share.png';
import { useSelector ,useDispatch } from 'react-redux';
import { addFavorite } from './store';
import ArchivePopup from '../components/ArchivePopup';
import FavoriteButton from '../components/FavoriteButton';

function ScanResult() {

  const dispatch = useDispatch();
  const favorites = useSelector((state)=> state.favorite);
  const location = useLocation();
  const [archivePopup, setArchivePopup]=useState(false);
  const mood = location.state.mood;
  const use = location.state.use;
  const season = location.state.season;

  const resultPerfumes = perfumeData.filter((perfume)=>{
    return(
      perfume.mood === mood ||
      perfume. season === season ||
      perfume.use === use
    );
  });

  return (
    <section className='scanResult'>

      <div className="bread_nav">
          <Link to="/"><span className="home">Home</span></Link>
          <span>&gt;</span>
          <Link to="/scan"><span>Scan</span></Link>
          <span>&gt;</span>
          <span className='current'>Scan Report</span>
        </div>

        {/* ---------- Report ---------- */}

        <div className='report_container'>

          <img className="pinkBg" src={pinkBg} alt="bg01" />

          <p className='result_title'>[ Scent Scan Report ]</p>

          <div className='result_text'>
            <p>
              <span className='result_point'>{mood}</span>
              한 분위기를 만들고
            </p>
            <p>
              <span className='result_point'>{use}</span>
              에 사용하기 좋으며
            </p>
            <p>
              <span className='result_point'>{season}</span>
              계절에 잘 어울리는
            </p>
            <p>향수들을 추천해드릴게요.</p>
          </div>

          <div className='result_perfumeList'>
            {resultPerfumes.slice(0, 3).map((perfume)=>(
              <Link to={`/perfume/${perfume.id}`}>
              <div className='perfume_item' key={perfume.id}>
                <div className='perfume_img'>
                  <img src={perfume.image} alt={perfume.name}>
                  </img>
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
                    setArchivePopup(true);
                  }}></i> */}
                </div>

                <div className='item_txt'>
                  <p className='item_name'>{perfume.name}</p>
                  <p className='item_size'>{perfume.size}</p>
                  <div className='item_tags'>
                    {perfume.tags.map((tag, index)=>(
                      <span key={index}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>

          <div className='icon_box'>
            <div>
              <img src={download} art='download' />
              <p>다운로드</p>
            </div>
            <Link to="/scan">
              <div>
                <img src={reload} art='reload' />
                <p>다시하기</p>
              </div>
            </Link>
            <div>
              <img src={share} art='share' />
              <p>공유하기</p>
            </div>
          </div>

        </div>

        <ArchivePopup
          open={archivePopup}
          close={()=>setArchivePopup(false)}  
        />

    </section>
  )
}

export default ScanResult;
