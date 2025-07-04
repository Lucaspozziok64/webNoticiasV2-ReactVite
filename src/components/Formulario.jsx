const categorias = [
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "world", label: "Internacional" },
  { value: "politics", label: "Política" },
];

const paises = [
  { value: "ar", label: "Argentina" },
  { value: "us", label: "Estados Unidos" },
  { value: "mx", label: "México" },
  { value: "br", label: "Brasil" },
  { value: "co", label: "Colombia" },
  { value: "es", label: "España" },
  { value: "fr", label: "Francia" },
  { value: "de", label: "Alemania" },
];

const Formulario = ({ setPaises, setCategorias, obtenerNoticia, categoria, pais }) => {

  const handleCategoriaChange = (e) => {
    setCategorias(e.target.value)
  }

  const handlePaisesChange = (e) => {
    setPaises(e.target.value);
  }

  const hanleSubmit = (e) => {
    e.preventDefault()
    obtenerNoticia()
  }

  return (
    <form onSubmit={hanleSubmit} className="container d-flex flex-column formulario">
      <div className="d-flex justify-content-center mb-4">
        <label className="form-label" style={{ fontStyle: "italic" }}>
          <strong>Buscar por categoria:</strong>
        </label>
        <select
          className="form-select w-25 mx-4"
          aria-description="defautl example"
          onChange={handleCategoriaChange}
          value={categoria}
        >
          <option value="">Selecciona una categoria</option>
          {categorias.map((cat)=> (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex justify-content-center">
        <label className="form-label" style={{ fontStyle: "italic" }}>
          <strong>Selecciona un Pais:</strong>
        </label>
        <select
          className="form-select w-25 mx-4"
          aria-description="defautl example"
          onChange={handlePaisesChange}
          value={pais}
        >
          <option value="">Selecciona un pais</option>
          {paises.map((pais)=> (
            <option key={pais.value} value={pais.value}>
              {pais.label}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex justify-content-center justify-content-md-end my-3">
          <button className="bg-success text-white">Consultar</button>
      </div>
    </form>
  );
};

export default Formulario;
