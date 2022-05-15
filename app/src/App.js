import store from './store'
import Menu from './parts/menu'

function App() {
  return (
    <>
      <Menu restaurants={store.restaurants}/>
    </>
  )
}
export default App
