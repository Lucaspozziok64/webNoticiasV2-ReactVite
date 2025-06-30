const Formulario = () => {
  return (
    <form className="container d-flex flex-column formulario">
      <div className="d-flex justify-content-center mb-4">
        <label style={{ fontStyle: "italic" }}>
          <strong>Buscar por categoria:</strong>
        </label>
        <select
          className="form-select w-25 mx-4"
          aria-description="defautl example"
        >
          <option value="">Selecciona una categoria</option>
        </select>
      </div>
      <div className="d-flex justify-content-center">
        <label style={{ fontStyle: "italic" }}>
          <strong>Selecciona un Pais:</strong>
        </label>
        <select
          className="form-select w-25 mx-4"
          aria-description="defautl example"
        >
          <option value="">Paises</option>
        </select>
      </div>
    </form>
  );
};

export default Formulario;
