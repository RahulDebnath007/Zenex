import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import timeFormat from '../lib/timeFormat'
import { dateFormat } from '../lib/dateFormat'

const MyBookings = () => {

 const currency = import.meta.env.VITE_CURRENCY

 const [bookings, setBookings] = useState([])
 const [isLoading, setIsLoading] = useState(true)

 const getMyBookings = async () =>{
  setBookings(dummyBookingData)
  setIsLoading(false)
 }

 useEffect(()=>{
  getMyBookings()
 }, [])

  return !isLoading ? (
   <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>
      <BlurCircle top="100px" left="100px"/>
      <div>
        <BlurCircle bottom="0px" left="600px"/>
      </div>
      <h1 className='text-lg font-semibold mb-4'>My Bookings</h1>

      {bookings.map((item,index)=>(
        <div key={index} className='flex flex-col md:flex-row bg-primary/8 border border-primary/20 rounded-lg mt-6 p-4 max-w-3xl'>
  <img
    src={item.show.movie.poster_path}
    alt=""
    className='w-full md:w-60 aspect-video object-cover object-bottom rounded'
  />

  <div className='flex flex-col justify-between p-4'>
    <div>
      <p className='text-lg font-semibold'>{item.show.movie.title}</p>
      <p className='text-gray-400 text-sm'>{timeFormat(item.show.movie.runtime)}</p>
    </div>
    <p className='text-gray-400 text-sm mt-4 md:mt-auto'>{dateFormat(item.show.showDateTime)}</p>
  </div>



          <div className='flex flex-col items-end text-right justify-between p-4 w-full md:w-60 ml-auto md:pr-4'>

  <div className='flex items-center gap-4'>
    <p className='text-2xl font-semibold'>{currency}{item.amount}</p>
    {!item.isPaid && (
      <button className='bg-primary px-4 py-1.5 text-sm rounded-full font-medium cursor-pointer'>
        Pay Now
      </button>
    )}
  </div>
  <div className='text-sm mt-2'>
    <p><span className='text-gray-400'>Total Tickets:</span> {item.bookedSeats.length}</p>
    <p><span className='text-gray-400'>Seat Number:</span> {item.bookedSeats.join(", ")}</p>
  </div>
</div>


        </div>
      ))}

    </div>
  ) : <Loading />
}

export default MyBookings
