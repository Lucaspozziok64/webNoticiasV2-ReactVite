import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import ListaNoticia from "./components/ListaNoticias";
import { useState } from "react";
import nProgress from "nprogress";
import NoticiaSkeleton from "./components/NoticiaSkeleton";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [paises, setPaises] = useState("ar");
  const [categorias, setCategorias] = useState("sports");
  const [mostrarSpinner, setMostrarSpinner] = useState(false)

  const miApiKey = import.meta.env.VITE_API_APIURL;

  const obtenerNoticia = async () => {
    try {
      setMostrarSpinner(true)
      nProgress.start();
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula 2 segundos de espera
      const respuesta = await fetch(
        `https://newsdata.io/api/1/latest?apikey=${miApiKey}&category=${categorias}&country=${paises}&language=es`
      );
      const datos = await respuesta.json();
      setNoticias(datos.results || []);
    } catch (error) {
      console.error(error);
    } finally {
      nProgress.done();
      setMostrarSpinner(false)
    }
  };

  return (
    <>
      <header className="bg-secondary">
        <nav className="container-fluid">
          <div className="d-flex justify-content-between p-1">
            <h6 className="mb-0 p-2">NoticiasApp🗺️</h6>
            <h6 className="mb-0 p-1 fs-4">🌐</h6>
          </div>
        </nav>
      </header>
      <main className="container my-3">
        <Titulo />
        <section className="container my-4 contenedorForm">
          <Formulario
            obtenerNoticia={obtenerNoticia}
            categoria={categorias}
            pais={paises}
            setCategorias={setCategorias}
            setPaises={setPaises}
          />
        </section>
        <h4 className="text-white text-center my-2">
          {noticias.length === 0
            ? "No hay noticias aún 😔"
            : "Mire sus noticias aqui 👇😎"}
        </h4>
        {mostrarSpinner ? (
          <div className="container my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <NoticiaSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="container my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {noticias.map((noticia, index) => (
              <ListaNoticia key={index} noticia={noticia} />
            ))}
          </div>
        )}

        <h4 className="text-white text-center my-3">
          {noticias.length === 0 ? "" : "Agradecemos mucho su visita🥰🤩"}
        </h4>
      </main>
      <footer className="bg-secondary text-center text-black">
        <p className="mb-0">&copy;Todos los derechos reservados</p>
        <p className="mb-0">
          Desarrollado por{" "}
          <a href="https://github.com/Lucaspozziok64">Lucas Figueroa</a>
        </p>
      </footer>
    </>
  );
}

export default App;
