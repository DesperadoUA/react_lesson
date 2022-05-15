import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
const Menu = function(props) {
    const [state, setState] = useState({display:false, title:'', url:''})
    const stateMenu = ()=>setState({...state, display: !state.display})
    const selectRestaurant = (item)=>setState({...state, url:item.url, title:item.title})
    const navigate = useNavigate()
    const goToRestaurant = ()=>{
        navigate(`/restautant/${state.url}`)
    }
    return (
        <div className='restaurant_select'>
                <div className='restaurant_select_top'>
                    <div className='restaurant_select_top-header' onClick={stateMenu}>
                        {state.title ? state.title : 'Выбор ресторана'}
                    </div>
                    <div className='arrow_picker'>
                       <div className='arrow_picker-up'></div>
                       <div className='arrow_picker-down'></div>
                    </div>
                </div>
                {state.display ? 
                (<div className='restaurant_select_bottom'>
                    <ul>
                        {
                            props.restaurants.map(item => <li className='list_item'
                                key={item.id} 
                                onClick={()=>selectRestaurant(item)}
                                >
                            {item.title}</li>)
                        }
                    </ul>
                </div>)
                :null}
                {
                    state.display && state.title
                    ? <button type='button' onClick={goToRestaurant}>Перейти в ресторан</button>
                    : null
                }
        </div>
        )
}
export default Menu