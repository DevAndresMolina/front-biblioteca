import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../config";
import { Col, Container, Row } from "react-bootstrap";
import useCantidadLibros from "../../hook/cantidadLibros";

const RegistrarLibroScreen = () => {
  //States
  const { cantidad, incrementar, decrementar } = useCantidadLibros(0);
  const [form, setForm] = React.useState({});


  //Compoenent
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //Component
  const handleSubmit = async (evt) => {
    // Previene el comportamiento default del formulario
    
      try {
        const result = await axios({
          method: "post",
          url: BASE_URL + "/libros/save",
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
      <Container>
        <div className="container text-center">
          <h4>REGISTRAR LIBRO</h4>
        </div>        
          <label htmlFor="libroId">ID</label>
          <input
            id="libroId"
            name="libroId"
            className="form-control"
            type="text"
            required
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
              value={cantidad}              
              onBlur={handleChange}                        
            />
            <button className="btn btn-success" onClick={incrementar}>
              +
            </button>
            <button className="btn btn-warning" onClick={decrementar}>
              -
            </button>
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
              onClick={() => handleSubmit()}
            >
              Registrar
            </button>
            <button type="button" className="btn btn-danger">
              Cancelar
            </button>
          </div>        
      </Container>
    </>
  );
};

export default RegistrarLibroScreen;
