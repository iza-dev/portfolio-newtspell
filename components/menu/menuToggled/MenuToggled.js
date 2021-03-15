import { bool } from 'prop-types'
import style from './MenuToggled.module.css'

export default function MenuToggled({ open }) {
    return (
        <span className={style.wrapperMenuToggled} open={open}>
            <a href="/work" className={style.contentMenu}>Work</a>
            <a href="/aboutme" className={style.contentMenu}>About me</a>
            <a href="/contact" className={style.contentMenu}>Contact</a>
        </span>
    );
}
MenuToggled.propTypes = {
    open: bool.isRequired,
  }