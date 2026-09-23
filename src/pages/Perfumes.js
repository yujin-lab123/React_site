import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import perfumeData from '../data/perfumeData';
import pinkBg from '../images/pink_bg.png';
import './Perfumes.css';
import { addFavorite } from './store';
import { useSelector ,useDispatch } from 'react-redux';
import ArchivePopup from '../components/ArchivePopup';
import FavoriteButton from '../components/FavoriteButton';

function Perfumes() {

const dispatch = useDispatch();
const favorites = useSelector((state)=> state.favorite);
const [archivePopup, setArchivePopup]=useState(false);
const [sortSelect, setSortSelect] = useState('popular');

let sortedPerfumes = [...perfumeData];

if (sortSelect === 'popular') {
  sortedPerfumes.sort((a, b) => b.popularity - a.popularity);
}

if (sortSelect === 'new') {
  sortedPerfumes.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}

  return (
    <section className='perfumes_page'>

      <div className="bread_nav">
        <Link to="/"><span className="home">Home</span></Link>
        <span>&gt;</span>
        <span className="current">Perfumes</span>
      </div>

      {/*-------- perfumes_container --------*/}

      

      <div  className='perfumesPage_text'>
        <img className="pinkBg" src={pinkBg} alt="bg01" />
        <p className='perfumesPage_title'>Perfumes List</p>
        <p className='perfumesPage_subtitle'>Scent LAB이 추천하는 향수들을 소개합니다.</p>
      </div>

      <select 
      value={sortSelect} 
      onChange={(e)=>setSortSelect(e.target.value)}
      >
        <option value="popualr">인기순</option>
        <option value="new">최신순</option>
      </select>

      <div className='perfumsList_container'>
      {sortedPerfumes.map((perfume)=>(
        <Link to={`/perfume/${perfume.id}`} key={perfume.id}>
        <div className="perfume_item" key={perfume.id}>
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
              setArchivePopup(true);
            }}></i> */}
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

    </section>
    
    
  )
}

export default Perfumes;
