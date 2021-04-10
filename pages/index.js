import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Works from '../components/works/Works'
import Menu from '../components/menu/Menu'

export default function Home () {
  // travailler sur les states pour lanime du début
  return (
    <div>
      <Menu/>
      <main style={{width:'85%', margin:'auto'}}>
        <Header />
        <Works />
        
        <Footer />
      </main>
    </div>
  )
}
