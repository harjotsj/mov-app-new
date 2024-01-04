import React, { useEffect, useState } from 'react'
import "./Home.scss"
import Buttons from '../Buttons'
import axios from 'axios'


// const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const apiKey = "c1cb4d2e763721daaa3469125b71c0b4";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";

const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({img})=>( <img src={img} alt='' className='card'/>)

// const values = {
//   img: "https://www.themoviedb.org/t/p/w220_and_h330_face/mmciEbI6HGrCGbSYVEen8wVpkYf.jpg",
// }
const Row = ({title,arr=[]})=>(
  <div className='row'>
    <h2>{title}</h2>
    <div >
      {arr.map((item,index)=>(
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        
        
      ))}
    </div>
  </div>
)

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
          data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
  };
    const fetchNowPlaying = async () => {
      const {
          data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
  };
  const fetchPopular = async () => {
      const {
          data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
  };
  const fetchTopRated = async () => {
      const {
          data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
  };
  
        fetchUpcoming();
        fetchNowPlaying();
        fetchPopular();
        fetchTopRated();
    
  }, []);
    
  
  
    
  return (
    
    <section className='hero'>
      <div className='banner'>
      <div className="hero-text">
    <h1>Stranger Things</h1>
    <h6>#1 in TV Shows Today </h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
    At ut vero inventore in minima, aliquid laboriosam <br/>
    vitae culpa ducimus? Itaque vero, iure aperiam inventore dicta deleniti</p>
    <Buttons title='Play'  type="button"/>
    <Buttons title="My List"  type="button"/>
  </div>
      </div>
      <Row title={"Upcoming"} arr={upcomingMovies} />
            <Row title={"Now Playing"} arr={nowPlayingMovies} />
            <Row title={"Popular"} arr={popularMovies} />
            <Row title={"Top Rated"} arr={topRatedMovies} />
    </section>
  )
}

export default Home