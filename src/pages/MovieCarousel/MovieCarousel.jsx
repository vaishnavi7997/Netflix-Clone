import React, { useEffect, useState } from 'react';
import './MovieCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const MovieCarousel = ({ category = "popular", title = "Featured" }) => {
  const [movies, setMovies] = useState([]);

  const API_KEY = 'YOUR_TMDB_API_KEY'; 

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error("TMDb Fetch Error:", err));
  }, [category]);

  return (
    <div className="carousel-section">
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              className="carousel-img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
