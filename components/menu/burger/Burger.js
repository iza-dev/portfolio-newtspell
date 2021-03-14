import style from './Burger.module.css'

export default function Burger(props) {
    return (
        <span className={style.wrapperBurger}>
            <div className={style.burgerLayout}/>
            <div className={style.burgerLayout}/>
            <div className={style.burgerLayout}/>
        </span>
    );
}