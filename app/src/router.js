import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import SingleRestaurant from './SingleRestaurant'
import NotFound from './NotFound'

const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App/>}/>
                <Route path='/restautant/:url' element={<SingleRestaurant/>} />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router