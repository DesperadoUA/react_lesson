import './style.css'
function Header(props) {
	const deleteBurger = (id) => props.deleteBurger(id)
	const addOrder = (id) => props.addOrder(id)
	return (
		<header className="top">
			<div className="wrap">
				<div className="header-content">
					<div className="header-rating">
					    <div className="header-rating_tag">Рейтинг:</div>
						<div className="header-rating_icon">★★★★★</div>
					</div>

					<div className="header-divider"></div>
					<h1 className="header-ttl">{props.title}</h1>
					<h3>
						<span>
							Быстрая доставка
							<span className="sub-header">#бургеров</span>
						</span>
					</h3>
					{
						Object.keys(props.burgers).map(item => {
						  return <div key={item} className='item'>
							        <div className='item_ttl'>
									 {props.burgers[item].name}
									</div>
									<div className='item_price'>
										Price: <b>{props.burgers[item].price}</b>
									</div>
									<div className='item_thumbnail'>
										<img src={props.burgers[item].img} alt={props.burgers[item].name} />
									</div>
									<div className='item_desc'>
									   {props.burgers[item].desc}
									</div>
									<div className='item_action'>
										<button onClick={()=>deleteBurger(item)}>Delete</button>
										{
											props.burgers[item].status === 'available'
											? <button onClick={()=>addOrder(item)}>Order</button>
											: null
										}
									</div>
								 </div>
						})
                    }
				</div>
			</div>
		</header>
	)
}
export default Header