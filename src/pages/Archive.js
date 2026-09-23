import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from './store';
import { changeName } from './store';
import pinkBg from '../images/pink_bg.png';
import './Archive.css';

function Archive() {

  const favorites = useSelector((state)=> state.favorite
  );
  const user = useSelector((state)=> state.user
  );
  const dispatch = useDispatch();

  return (
    <section className='Archive_page'>

      <img className="pinkBg" src={pinkBg} alt="bg01" />

      <div className="bread_nav">
        <Link to="/"><span className="home">Home</span></Link>
        <span>&gt;</span>
        <span className="current">Archive</span>
      </div>

      {/*-------- Favorite_container --------*/}

      <div className="archive_name_section">
        <p className="archive_name"><span className="user_name">{user.name}</span> 님의 향수 아카이브입니다.</p>
      </div>

      <div className="archive_list">
        {favorites.length === 0 ?(
          <p className='empty_message'>아카이브가 비어있습니다.</p> ):(
            favorites.map((perfume)=>(
            <div className="archive_item" key={perfume.id}>
              <button className='archive_delete' onClick={()=>dispatch(removeFavorite(perfume.id))}>
                <i class="fa-solid fa-xmark"></i>
              </button>

              <Link to={`/perfume/${perfume.id}`}>
              <div className="archive_perfume">
                <img src={perfume.image} alt={perfume.name} />
                <p className="archive_perfume_name">{perfume.name}</p>
              </div>
              </Link>
            </div>
          ))
        )}
      </div>

      <div className="margin_box"></div>

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

    </section>
  )
}

export default Archive;
