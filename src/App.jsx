import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import ListaNoticia from './components/ListaNoticias'

function App() {

  return (
    <>
      <main className='container my-5'>
        <Titulo />
        <section className='container my-4 contenedorForm'>
          <Formulario />
        </section>
        <div className='container my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4'>
          <ListaNoticia />
          <ListaNoticia />
          <ListaNoticia />
          <ListaNoticia />
          <ListaNoticia />
          <ListaNoticia />
        </div>
      </main>
    </>
  )
}

export default App
