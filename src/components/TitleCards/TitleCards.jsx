import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
// import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const TitleCards = ({title, category}) => {

  const[apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGMyM2M2NDdhYjNkY2I1NTkxMDFjZGNmY2E4MGJkMCIsIm5iZiI6MTc1MDQzNjIwNy45NjIsInN1YiI6IjY4NTU4OTZmOGMwMTUwMDI5ZTI5ZTY2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pKt2Bi--kPT5RaC2mCKBlKTBT8w4BumM4Uwy4EulWOM'
  }
};


const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  const current = cardsRef.current;
  current.addEventListener('wheel', handleWheel, { passive: false });

  return () => current.removeEventListener('wheel', handleWheel);
}, []);


  return (
    <div className='title-cards'>
      <h3>{title?title: "Popular on Netflix" }</h3>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
           return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
           </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
