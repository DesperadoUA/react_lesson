import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import NotFound from './NotFound'
import Home from './components/layouts/pages/home'
import Contacts from './components/layouts/pages/contacts'
import Price from './components/layouts/pages/price'
import Header from './components/parts/header'
import Footer from './components/parts/footer'

const Router = ()=>{
    return(
          <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/contacts' element={<Contacts/>}/>
                <Route exact path='/price' element={<Price/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer />
          </BrowserRouter>
    )
}
export default Router