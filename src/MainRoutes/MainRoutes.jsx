import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Dashboard } from '../Component/Dashboard'
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path={'/'} element={<Dashboard/>}/>
    </Routes>
  )
}
