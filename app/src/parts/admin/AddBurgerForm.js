import {useRef} from "react"
import './AddBurgerForm.css'
function AddBurgerForm(props){
    const nameRef = useRef()
    const priceRef = useRef() 
    const imageRef = useRef()
    const statusRef = useRef()
    const descRef = useRef()

    const createBurger = event => {
        event.preventDefault()
        const state = {
            name: nameRef.current.value,
            price: parseInt(priceRef.current.value),
            img: imageRef.current.value,
            status: statusRef.current.value,
            desc: descRef.current.value
        }
        props.addBurger(state)
        event.currentTarget.reset()
    }
    return(
    <>
    <form className="burger-edit" onSubmit={createBurger}>
        <input name='name' type='text' placeholder='name' className='input-item' ref={nameRef} />
        <input name='price' type='text' placeholder='price' className='input-item' ref={priceRef} />
        <input name='image' type='text' placeholder='image' className='input-item' ref={imageRef} />
        <select name='status' type='text' placeholder='status' className='status select-item' ref={statusRef}>
            <option value='available'>Доступно</option>
            <option value='unavailable'>Убрать из меню</option>
        </select>
        <textarea name='desc' placeholder='desc' className='text-item' ref={descRef} />
        <input type='submit' value='Add burger'/>
    </form>
    </>
    )
}
export default AddBurgerForm