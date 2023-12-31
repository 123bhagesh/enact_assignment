import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard'
import { Search } from '../Pages/Search'
import { Video } from '../Pages/Video'
import { FilterMovies } from '../Pages/FilterMovies'
import { MovieDetail } from '../Pages/MovieDetail'
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="#" element={<Video/>}/>
        <Route path="/#" element={<Dashboard/>}/>
        <Route path="/filter/:filter" element={<FilterMovies/>}/>
        <Route path="/movie-details/:detail" element={<MovieDetail/>}/>

    </Routes>
  )
}
