import { bool, func } from 'prop-types'
import style from './Burger.module.css'

export default function Burger({ open, setOpen }) {
    return (
        <span className={style.wrapperBurger} open={open} onClick={() => setOpen(!open)}>
            <div className={style.burgerLayout}/>
            <div className={style.burgerLayout}/>
            <div className={style.burgerLayout}/>
        </span>
    );
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };