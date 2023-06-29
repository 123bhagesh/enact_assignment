import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard'
import { Search } from '../Pages/Search'
import { Video } from '../Pages/Video'
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path={'/'} element={<Dashboard/>}/>
        <Route path={'/search'} element={<Search/>}/>
        <Route path={'/video'} element={<Video/>}/>
        <Route path={'/profile'} element={<Dashboard/>}/>

    </Routes>
  )
}
