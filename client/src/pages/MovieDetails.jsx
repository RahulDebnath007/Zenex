import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import BlurCircle from '../components/BlurCircle'
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react'
import timeFormat from '../lib/timeFormat'
import DateSelect from '../components/DateSelect'
import MovieCard from '../components/MovieCard'
import Loading from '../components/Loading'

const MovieDetails = () => {
  const {id}= useParams()
  const [show, setShow] = useState(null)

  const getShow = async ()=>{
     const show =dummyShowsData.find(show => show._id==id)
     if(show){
     setShow({
      movie:show,
      dateTime: dummyDateTimeData
     })
    }
  }
    useEffect(()=>{
      getShow()
    },[id])
  
    return show ? (
  
  // area to display movie details
  <div className="min-h-screen flex flex-col items-center justify-center px-8 md:px-20 lg:px-48 pt-48">


  <div className="flex flex-col md:flex-row gap-8 items-start max-w-6xl w-full">


    <img
      src={show.movie.poster_path}
      alt={show.movie.title}
      className="rounded-xl h-[420px] w-auto max-md:mx-auto object-cover"
    />

    <div className="flex flex-col gap-3 max-w-2xl">
     <div className="relative">
  <BlurCircle top="-80px" left="-40px" />
</div>

      <p className="text-primary">ENGLISH</p>

      <h1 className="text-4xl font-bold">{show.movie.title}</h1>

      <div className="flex items-center gap-2 text-gray-300">
        <StarIcon className="w-5 h-5 text-primary fill-primary" />
        {show.movie.vote_average.toFixed(1)} User Rating
      </div>

      <p className="text-gray-400 mt-2 text-sm leading-relaxed">
        {show.movie.overview}
      </p>

      <p className="text-white font-medium">
        {timeFormat(show.movie.runtime)} • {show.movie.genres.map(g => g.name).join(', ')} • {show.movie.release_date.split("-")[0]}
      </p>
       <div className='flex items-center flex-wrap gap-4 mt-4'>
            <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95'>
              <PlayCircleIcon className="w-5 h-5"/>
         
          Watch Trailer
          </button>
         <a href="#dateSelect" className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95'>Buy Tickets</a>
        <button>
          <Heart className={`w-5 h-5`}/>
        </button>
      </div>
         </div>
         </div>

 {/* area where cast display shows */}
        <div className="w-full max-w-6xl mt-28">
  <p className="text-lg font-medium text-white mb-4">Your Favorite Cast</p>

  <div className="overflow-x-auto no-scrollbar pb-4">
    <div className="flex items-center gap-6 w-max px-2">
      {show.movie.casts.slice(0, 12).map((cast, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center flex-shrink-0 w-24"
        >
          <img
            src={cast.profile_path}
            alt={cast.name}
            className="rounded-full h-20 w-20 object-cover border border-white"
          />
          <p className="font-medium text-xs mt-3 text-white">{cast.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>

<DateSelect dateTime={show.dateTime} id={id}/>


 <div className="w-full flex justify-start mt-20 mb-8 px-2">
  <p className="text-lg font-medium">You May Also Like</p>
</div>

<div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 md:px-8">
  <div className='flex flex-wrap justify-center gap-8'>
          {dummyShowsData.slice(0,4).map((movie, index)=> (
            <MovieCard key={index} movie={movie}/>
          ))}
      </div>
      <div className='flex justify-center mt-20'>
          <button onClick={()=> {navigate('/movies'); scrollTo(0,0)}} className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'>Show more</button>
      </div>
      </div>

         </div>
  ) : <Loading />
}

export default MovieDetails
