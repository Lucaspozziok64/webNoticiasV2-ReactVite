import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import ListaNoticia from "./components/ListaNoticias";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    obtenerNoticia();
  });

  const obtenerNoticia = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/latest?apikey=pub_7c1484730fa64707bd2289a5f123fd36&q=deportes`
      );
      const datos = await respuesta.json();
      console.log(datos.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className="container my-5">
        <Titulo />
        <section className="container my-4 contenedorForm">
          <Formulario />
        </section>
        <div className="container my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          <ListaNoticia />
          <ListaNoticia />
          <ListaNoticia />
          <ListaNoticia />
          <ListaNoticia />
          <ListaNoticia />
        </div>
      </main>
    </>
  );
}

export default App;
