const ListaNoticia = () => {
  return (
    <div className="card p-1 mx-3">
      <img
        src=""
        className="card-img-top"
        alt=""
      />
      <div className="card-body p-1">
        <h6 className="card-header"></h6>
        <p className="card-text truncate-3-lines">
          dsdsd
        </p>
        <div className="d-flex flex-column mb-0">
          <span>
            Pais: <strong>sdsdsdd</strong>
          </span>
          <span>
            Publicacion: <strong>sdsdsdsd</strong>
          </span>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <a className="botonVerNoticia text-white" target="blank" >Ver noticia completa</a>
      </div>
    </div>
  );
};

export default ListaNoticia;
