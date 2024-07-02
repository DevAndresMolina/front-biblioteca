import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../config";
import { setLoading } from "../../redux/slices/loadingSlice";
import { Container, Col, Row } from "react-bootstrap";
import { setLibroStorage } from "../../redux/slices/libroData";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import MenuBar from "../../components/MenuBar";
import e from "cors";

const BuscarLibroScreen = () => {
  //HOOKS
  const [libros, setLibros] = React.useState(null);
  const [eliminar, setEliminar] = React.useState(null);
  const [busqueda, setBusqueda] = React.useState({});

  //extrar datos del store data
  const libroState = useSelector((state) => state.libroData);

  const loading = useSelector((state) => state.loading.isLoading);

  //Lanzador de acciones
  const dispatch = useDispatch(); //Disparador de acciones que van al reducer y alteran el store

  //modificar los componentes
  React.useEffect(() => {
    
  }, []);

  const handleChangeBusqueda = (e) => {
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };

  const handleBusquedaSubmit = async (evt) => {
    // Previene el comportamiento default del formulario

    console.log(busqueda);
    try {
      const { data } = await axios({
        method: "GET",
        url: BASE_URL + "/libros/isbn/" + busqueda.libroISBN,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLibros(data);
      dispatch(setLibroStorage(data));
      console.log(libros);
    } catch (error) {}
  };

  const deleteId = async (id) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar el libro ISBN " + id
    );
    if (opcion == true) {
      try {
        axios.delete(`${BASE_URL}/libros/delete/${id}`).then((response) => {
          setEliminar(response.data);          
        });
      } catch (error) {
        console.log("Se ha presentado un error ", error);
      }
    }
  };

  return (
    <>
      {loading && "Cargando..."}
      {!loading && (
        <>
          <Row>
            <Col sm={2}>
              <div>
                <MenuBar></MenuBar>
              </div>
            </Col>
            <Col sm={10}>
              <div className="centrado">
                <label htmlFor="jlbISBNLibroBusqueda">BUSCAR</label>
                <input
                  id="libroISBN"
                  name="libroISBN"
                  className="form-control"
                  type="text"
                  onChange={(e)=>handleChangeBusqueda(e)}
                  required
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleBusquedaSubmit}
                >
                  Buscar
                </button>
                <br />
                <br />
              </div>
              <div className="table table-responsive"></div>
              <table className="table table striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>ISBN</th>
                    <th>TITULO</th>
                    <th>AUTORES</th>
                    <th># EJEMPLARES</th>
                    <th>F. PUBLICACIÓN</th>
                    <th>EDITORIAL</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {libros &&
                    libros.length > 0 &&
                    libros.map((data, index) => {
                      return (
                        //pasamos el key que es el index
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{data.libroId}</td>
                          <td>{data.libroISBN}</td>
                          <td>{data.libroTitulo}</td>
                          <td>{data.libroAutores}</td>
                          <td>{data.libroEjemplares}</td>
                          <td>{data.libroPublicacion}</td>
                          <td>{data.libroEditorial}</td>
                          <td align="center">
                            <a
                              className="btn btn-danger"
                              onClick={() => deleteId(data.libroISBN)}
                            >
                              <RiDeleteBin5Line />
                            </a>
                            <a className="btn btn-success">
                              <MdOutlineEdit />
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default BuscarLibroScreen;
