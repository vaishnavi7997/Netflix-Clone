import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
// import hero_banner from '../../assets/hero_banner.jpg'
// import hero_title from '../../assets/hero_title.png'
// import play_icon from '../../assets/play_icon.png'
// import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import TrendingCarousel from '../Trending/TrendingCarousel'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
         <TrendingCarousel />
      </div>
      <div className="more-cards">
            <TitleCards/> 
            <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
            <TitleCards title={"Only on Netflix"} category={"popular"} />
            <TitleCards title={"Upcoming"} category={"upcoming"}/>
            <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home