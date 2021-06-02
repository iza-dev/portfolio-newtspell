import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Menu from '../components/menu/Menu'
import Form from '../components/contact/Form'

export default function Contact () {
  return (
    <div>
      <Menu />
      <main>
        <Header page='contact'/>
        <Form/>
        <Footer />
      </main>
    </div>
  )
}
