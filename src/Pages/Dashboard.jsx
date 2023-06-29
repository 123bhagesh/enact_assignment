import React, { useEffect } from 'react'
import { getData } from '../Redux/action'
import { useDispatch } from 'react-redux'
import { AutoSwiper } from '../Component/Dashboard/AutoSwiper'
import { LatestMovies } from '../Component/Dashboard/LatestMovies'

export const Dashboard = () => {
    const dispatch = useDispatch()

    useEffect(()=>(
        dispatch(getData())
    ),[])

  return (
    <div>
      <h2>Top Movies</h2>
      <AutoSwiper/>
      <LatestMovies/>
      {/* <BottomBar/> */}
    </div>
  )
}