import React, { useEffect, useState } from 'react';
import './TrendingCarousel.css';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';

const TrendingCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGMyM2M2NDdhYjNkY2I1NTkxMDFjZGNmY2E4MGJkMCIsIm5iZiI6MTc1MDQzNjIwNy45NjIsInN1YiI6IjY4NTU4OTZmOGMwMTUwMDI5ZTI5ZTY2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pKt2Bi--kPT5RaC2mCKBlKTBT8w4BumM4Uwy4EulWOM'
      }
    };

    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          setMovies(data.results);
        }
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  const handlePlayClick = async (movieId) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGMyM2M2NDdhYjNkY2I1NTkxMDFjZGNmY2E4MGJkMCIsIm5iZiI6MTc1MDQzNjIwNy45NjIsInN1YiI6IjY4NTU4OTZmOGMwMTUwMDI5ZTI5ZTY2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pKt2Bi--kPT5RaC2mCKBlKTBT8w4BumM4Uwy4EulWOM'
      }
    };

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
    const data = await res.json();
    const trailer = data.results.find(video => video.site === 'YouTube' && video.type === 'Trailer');
    if (trailer) {
      setTrailerKey(trailer.key);
    } else {
      alert('Trailer not available');
    }
  };

  if (movies.length === 0) return null;

  const movie = movies[currentIndex];

  return (
    <>
      <div
        className="trending-hero"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        }}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {showControls && (
          <div className="carousel-controls">
            <button className="carousel-btn left" onClick={handlePrev}>&lt;</button>
            <button className="carousel-btn right" onClick={handleNext}>&gt;</button>
          </div>
        )}

        <div className="trending-content">
          <h1 className="trending-title">{movie.title}</h1>
          <p className="trending-overview">{movie.overview}</p>
          <div className="hero-btns">
            <button className="btn" onClick={() => handlePlayClick(movie.id)}>
              <img src={play_icon} alt="Play" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="Info" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {trailerKey && (
        <div className="trailer-popup">
          <button className="close-btn" onClick={() => setTrailerKey(null)}>✖</button>
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            title="Trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default TrendingCarousel;