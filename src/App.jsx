import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'

function App() {

  return (
    <>
      <main className='container my-5'>
        <Titulo />
        <section className='container my-4'>
          <Formulario />
        </section>
      </main>
    </>
  )
}

export default App
