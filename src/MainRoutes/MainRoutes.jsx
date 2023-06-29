import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard'
import { Search } from '../Pages/Search'
import { Video } from '../Pages/Video'
import { FilterMovies } from '../Pages/FilterMovies'
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/profile" element={<Dashboard/>}/>
        <Route path="/filter-movieslist" element={<FilterMovies/>}/>

    </Routes>
  )
}
