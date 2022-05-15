import AddBurgerForm from './AddBurgerForm'
function Admin(props) {
    return (
        <>
          <h2>Admin menu</h2>
          <AddBurgerForm addBurger={props.addBurger}/>
          <button onClick={props.loadBurger}>Load Burger</button>
        </>
    )
}
export default Admin