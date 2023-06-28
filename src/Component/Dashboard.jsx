import React, { useEffect } from 'react'
import { getData } from '../Redux/action'
import { useDispatch } from 'react-redux'
import { AutoSwiper } from './AutoSwiper'

export const Dashboard = () => {
    const dispatch = useDispatch()

    useEffect(()=>(
        dispatch(getData())
    ),[])

  return (
    <div>
      <h1>Dashboard</h1>
      <AutoSwiper/>
    </div>
  )
}