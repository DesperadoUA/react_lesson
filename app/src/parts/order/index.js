function Order(props) {
  console.log(props)
  return (
    <>
    <h2>Order</h2>
        {
						Object.keys(props.order).map(item => {
						  return <div key={item} className='item'>
							          <div className='item_ttl'>
                          {props.order[item].name}
                        </div>
                        <div className='item_price'>
                          Price: <b>{props.order[item].price}</b>
                        </div>
                        <div className='item_price'>
                          Counter: <b>{props.order[item].counter}</b>
                        </div>
								      </div>
						})
        }
        <div className="total_price">
          {
            Object.keys(props.order).reduce((previousValue, currentValue) => previousValue + (props.order[currentValue].price * props.order[currentValue].counter), 0)
          }
        </div>
    </>
  )
}
export default Order
