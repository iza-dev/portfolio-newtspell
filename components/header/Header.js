import styles from './Header.module.css'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStylesBase = makeStyles({
  h1: {
    fontSize:'10rem'
  },
  h2: {
    fontSize: '3rem'
  }
})

const useStyles = makeStyles({
  h1: {
    fontSize:'5rem'
  },
  h2: {
    fontSize:'2rem'
  }
})

export default function Header (props) {

  const classNameHeader = (props.page != 'home') ? useStyles() : useStylesBase()

  return (
    <header className={styles.header}>
      
      <Typography variant='h1' className={classNameHeader.h1}>NewtSpell</Typography>
      <Typography variant='h2' className={classNameHeader.h2}>Environemnt Artist · Houdini specialized</Typography>
    </header>
  )
}
