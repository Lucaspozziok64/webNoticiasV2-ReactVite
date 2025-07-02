import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import ListaNoticia from "./components/ListaNoticias";
import { useEffect, useState } from "react";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [paises, setPaises] = useState('ar')
  const [categorias, setCategorias] = useState('sports')

  const obtenerNoticia = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/latest?apikey=&category=${categorias}&country=${paises}&language=es`
      );
      const datos = await respuesta.json();
      setNoticias(datos.results || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header className="bg-secondary">
        <nav className="container-fluid">
          <div className="d-flex justify-content-between p-1">
            <h6>NoticiasApp🗺️</h6>
            <h6 className="fs-4">🌐</h6>
          </div>
        </nav>
      </header>
      <main className="container my-5">
        <Titulo />
        <section className="container my-4 contenedorForm">
          <Formulario obtenerNoticia={obtenerNoticia} categoria={categorias} pais={paises} setCategorias={setCategorias} setPaises={setPaises} />
        </section>
        <div className="container my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          {noticias.map((noticia, index)=> (
            <ListaNoticia key={index} noticia={noticia} />
          ))}
        </div>
      </main>
      <footer className="bg-secondary text-center text-black">
        <p className="mb-0">&copy;Todos los derechos reservados</p>
        <p className="mb-0">Desarrollado por <a href="http://">Lucas Figueroa</a></p>
      </footer>
    </>
  );
}

export default App;
