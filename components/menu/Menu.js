import Burger from './burger/Burger'
import style from './Menu.module.css'

export default function  Menu () {
  return (
    <nav className={style.burger}>
      <Burger/>
      {/* <p>menu</p> */}
    </nav>
  )
}