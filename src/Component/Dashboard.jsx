import React, { useEffect } from 'react'
import { getData } from '../Redux/action'
import { useDispatch } from 'react-redux'
import { AutoSwiper } from './AutoSwiper'
import { LatestMovies } from './LatestMovies'
import { BottomBar } from './BottomBar'

export const Dashboard = () => {
    const dispatch = useDispatch()

    useEffect(()=>(
        dispatch(getData())
    ),[])

  return (
    <div>
      <h1>Dashboard</h1>
      <AutoSwiper/>
      <LatestMovies/>
      {/* <BottomBar/> */}
    </div>
  )
}