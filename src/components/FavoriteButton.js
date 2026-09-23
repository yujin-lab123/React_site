import React from 'react';

export default function FavoriteButton({perfume, isFavorite, onFavorite}) {
  return (
    <i className={
      isFavorite ? "fa-solid fa-heart"
      : "fa-regular fa-heart"
    }
    onClick={(e)=>{
      e.preventDefault();
      e.stopPropagation();
      onFavorite(perfume);
    }
    }></i>
  )
}
