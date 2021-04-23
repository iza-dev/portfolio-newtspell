import FooterIcons from './FooterIcons'
import style from './Footer.module.css'

export default function Footer () {
  return (
    <footer className={style.footer}>
      <FooterIcons />
      <p>© 2021 <strong>NewtSpell</strong> INC. ALL RIGHTS RESERVED</p>
    </footer>
  )
}
