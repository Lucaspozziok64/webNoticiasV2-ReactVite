const imagen =
  "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/7TZCY4E3D5DB5GCTB7IZGFK66M.jpg";

const ListaNoticia = () => {
  return (
    <div className="card p-1 mx-3">
      <div className="card-header text-center">
        <h6>
          Pais: <strong>sdsdsdd</strong>
        </h6>
      </div>
      <img src={imagen} className="card-img-top" alt="" />
      <div className="card-body p-1">
        <h6 className="card-header">Titulo</h6>
        <p className="card-text truncate-3-lines">Description:</p>
      </div>
      <div className="card-footer d-flex flex-column justify-content-center">
        <a className="botonVerNoticia text-white" target="blank">
          Ver noticia completa
        </a>
        <p className="card-text"><small class="text-body-secondary">Publicacion</small></p>
      </div>
    </div>
  );
};

export default ListaNoticia;
