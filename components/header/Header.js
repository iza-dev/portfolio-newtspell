import styles from './Header.module.css'
import { Typography } from '@material-ui/core'

export default function Header () {
  return (
    <header className={styles.header}>
      <Typography variant="h1">NewtSpell</Typography>
      <p>Environemnt Artist · Houdini specialized</p>
    </header>
  )
}
