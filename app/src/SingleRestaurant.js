import './App.css'
import React, { useState } from 'react'
import Header from './parts/header'
import Order from './parts/order'
import Admin from './parts/admin'
import { NavLink } from 'react-router-dom'
import store from './store'

function SingleRestaurant() {
  const [state, setState] = useState({burgers: {}, order: {}})

  const addBurger = (burger) => {
    const {burgers} = state
    burgers[`burger${Date.now()}`] = burger
    setState({...state, burgers})
  }
  const loadBurger = () => {
    const burgers = {...store.burgers}
    setState({...state, burgers})
  }
  const deleteBurger = (id) => {
    const {burgers} = state
    delete burgers[id]
    setState({...state, burgers})
  }
  const addOrder = (id) => {
    const {order} = state
    const {burgers} = state
    if(id in order) order[id].counter = order[id].counter + 1
    else {
      order[id] = burgers[id]
      order[id].counter = 1
    }
    setState({...state, order})
  }
  return (
    <>
      <div className='row'>
        <div className='col-3 border'>
          <Header 
            title='Very Hot Burger' 
            amount={10} 
            hot={true}
            burgers={state.burgers}
            deleteBurger={deleteBurger}
            addOrder={addOrder}
          />
        </div>
        <div className='col-3 border'>
          <Order order={state.order}/>
        </div>
        <div className='col-3 border'>
          <Admin addBurger={addBurger} loadBurger={loadBurger} />
        </div>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
    </>
  )
}
export default SingleRestaurant
