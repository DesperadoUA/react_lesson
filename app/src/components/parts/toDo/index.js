import './style.css'
function ToDo(props) {
    return (
      <section className='to_do'>
          <div className='container'>
              <div className='row'>
                  <div className='to_do_left'>
                      <h2>To do list</h2>
                  </div>
                  <div className='to_do_right'>
                      <h2>To do menu</h2>
                  </div>
              </div>
          </div>
      </section>
    )
  }
  export default ToDo