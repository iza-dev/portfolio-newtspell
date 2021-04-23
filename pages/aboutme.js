import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Menu from '../components/menu/Menu'
import Bio from '../components/aboutme/Bio'
import Timeline from '../components/aboutme/Timeline'
import { StylesProvider } from '@material-ui/styles'

export default function AboutMe () {
  return (
    <div>
      <Menu />
      <main>
        <Header page='aboutme'/>
        <Bio />
        <Timeline />
        <Footer />
      </main>
    </div>
  )
}
