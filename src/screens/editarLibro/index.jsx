import React from "react";
import "./style.css";
import axios from "axios";
import { setLibroStorage } from "../../redux/slices/libroData";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../config";
import { Col, Container, Row } from "react-bootstrap";
import useCantidadLibros from "../../hook/cantidadLibros";
const EditarLibroScreen = () => {
  //HOOKS
  const [form, setForm] = React.useState({});
  const [libros, setLibros] = React.useState({});
  const [busqueda, setBusqueda] = React.useState({});

  const dispatch = useDispatch();
  
  React.useEffect(()=>{ 
        handleChange();
  },[libros]);

  //Compoenent
  const handleChange = (e) => {
    if(!e===undefined)
      setForm(libros);
  };

  const handleChangeBusqueda = (e) => {
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };

  //metodo busqueda ID
  const handleBusquedaSubmit = async (evt) => {
    // Previene el comportamiento default del formulario

    console.log(busqueda);
    try {
      const { data } = await axios({
        method: "GET",
        url: BASE_URL + "/libros/isbn/"+busqueda.libroISBN,
        headers: {
          "Content-Type": "application/json",
        },
      });      
      setLibros(data); 
      dispatch(setLibroStorage(data));
      console.log(libros);
    } catch (error) {
      
    }
  };

  //metodo de actualización
  const handlePutSubmit = async (evt) => {
    // Previene el comportamiento default del formulario

    try {
      const result = await axios({
        method: "put",
        url: BASE_URL + "/libros/update/",
        data: form,
        headers: {
          "Content-Type": "application/json",
        },
      });
      ///setForm(...form,{});
      alert("Se ha registrado el libro con éxito");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container text-center">
        <h4>ACTUALIZAR LIBRO</h4>
      </div>
      <br />
      <br />
      <div className="centrado">
        <label htmlFor="jlbISBNLibroBusqueda">BUSCAR</label>
        <input
          id="libroISBN"
          name="libroISBN"
          className="form-control"
          type="text"
          required          
          onChange={(e)=>handleChangeBusqueda(e)}
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={()=>handleBusquedaSubmit}
        >
          Buscar
        </button>
      </div>
      <br />
      <br />

      <div className="container text-center">
        <h5>DATOS DEL LIBRO</h5>
      </div>
      <label htmlFor="libroId">ID</label>
      <input
        id="libroId"
        name="libroId"
        className="form-control"
        type="text"
        required
        value={libros.libroId}
        onBlur={handleChange}
      />

      <label htmlFor="jlbISBNLibro">ISBN</label>
      <input
        id="libroISBN"
        name="libroISBN"
        className="form-control"
        type="text"
        required
        onBlur={handleChange}
      />

      <label htmlFor="jlbTituloLibro">Titulo Libro</label>
      <input
        id="libroTitulo"
        name="libroTitulo"
        className="form-control"
        type="text"
        required
        onBlur={handleChange}
      />
      <label htmlFor="jlbAutoresLibro">Autores</label>
      <input
        id="libroAutores"
        name="libroAutores"
        className="form-control"
        type="text"
        required
        onBlur={handleChange}
      />
      <div>
        <label htmlFor="jlbEjmplaresLibro">Ejemplares</label>
        <input
          id="libroEjemplares"
          name="libroEjemplares"
          className="form-control"
          type="text"
          required
          onBlur={handleChange}
        />       
      </div>
      <label htmlFor="jlbPublicacionLibro">Publicación</label>
      <input
        id="libroPublicacion"
        name="libroPublicacion"
        className="form-control"
        type="date"
        required
        onBlur={handleChange}
      />
      <label htmlFor="jlbEditorialLibro">Editorial</label>
      <input
        id="libroEditorial"
        name="libroEditorial"
        className="form-control"
        type="text"
        required
        onBlur={handleChange}
      />

      <br />

      <div className="d-grid gap-2 d-md-block">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handlePutSubmit()}
        >
          Registrar
        </button>
        <button type="button" className="btn btn-danger">
          Cancelar
        </button>
      </div>
    </>
  );
};

export default EditarLibroScreen;
