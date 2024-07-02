import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../config";
import { Col, Container, Row } from "react-bootstrap";
import useCantidadLibros from "../../hook/cantidadLibros";

const RegistrarUsuarioScreen = () => {
  //States
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
        url: BASE_URL + "/usuarios/save",
        data: form,
        headers: {
          "Content-Type": "application/json",
        },
      });
      ///setForm(...form,{});
      alert("Se ha registrado el usuario con éxito");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <div className="container text-center">
          <h4>REGISTRAR USUARIO</h4>
        </div>
        <label htmlFor="usuarioCedula">Cedula</label>
        <input
          id="usuarioCedula"
          name="usuarioCedula"
          className="form-control"
          type="text"
          required
          onBlur={handleChange}
        />

        <label htmlFor="usuarioNombre">Nombres</label>
        <input
          id="usuarioNombre"
          name="usuarioNombre"
          className="form-control"
          type="text"
          required
          onBlur={handleChange}
        />

        <label htmlFor="usuarioApellido">Apellidos</label>
        <input
          id="usuarioApellido"
          name="usuarioApellido"
          className="form-control"
          type="text"
          required
          onBlur={handleChange}
        />
        <label htmlFor="usuarioCelular">Celular</label>
        <input
          id="usuarioCelular"
          name="usuarioCelular"
          className="form-control"
          type="text"
          required
          onBlur={handleChange}
        />
        <div>
          <label htmlFor="usuarioDireccion">Dirección</label>
          <input
            id="usuarioDireccion"
            name="usuarioDireccion"
            className="form-control"
            type="text"
            required
            onBlur={handleChange}
          />
        </div>
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

export default RegistrarUsuarioScreen;
