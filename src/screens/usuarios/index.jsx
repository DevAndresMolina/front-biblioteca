import React from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../config";
import { setLoading } from "../../redux/slices/loadingSlice";
import { Container, Col, Row } from "react-bootstrap";
import { setUsuarioStorage } from "../../redux/slices/usuarioData";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import MenuBar from "../../components/MenuBar";

const UsuariosScreen = () => {
//HOOKS
const [usuarios, setUsuarios] = React.useState(null);
const [eliminar, setEliminar] = React.useState(null);

//extrar datos del store solo token
//const token = useSelector((state) => state.token);

//extrar datos del store data
const usuarioState = useSelector((state) => state.usuarioData);
const loading = useSelector((state) => state.loading.isLoading);

//Lanzador de acciones
const dispatch = useDispatch(); //Disparador de acciones que van al reducer y alteran el store

//modificar los componentes
React.useEffect(() => {
  getAllUsuarios();
}, []);

//Componente para consumir api
const getAllUsuarios = async () => {
  // dispatch(setLoading(true));
  try {
    //definimos los headers
    const { data } = await axios({
      method: "GET",
      url: BASE_URL + "/usuarios/all",
      headers: {
        "Content-Type": "application/json",
        //authorization: token,
      },
    });
    //dispatch(setLoading(false));
    setUsuarios(data);
    //almacenamos los datos en el Storage
    dispatch(setUsuarioStorage(data));
  } catch (error) {
    //dispatch(setLoading(false));
    console.log("Se ha presentado un error ", error);
  }
};


//Componente para eliminar un usuario
const deleteId = async (id) => {
  var opcion = window.confirm(
    "Estás seguro que deseas eliminar el usuario con cédula " + id
  );
  if (opcion == true) {
    try {
      axios.delete(`${BASE_URL}/usuarios/delete/${id}`

      ).then((response) => {
        setEliminar(response.data);
        getAllUsuarios();
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
            <div className="table table-responsive"></div>
            <table className="table table striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>CEDULA</th>
                  <th>NOMBRE</th>
                  <th>APELLIDO</th>
                  <th>CELULAR</th>
                  <th>DIRECCION</th>                  
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {usuarios &&
                  usuarios.length > 0 &&
                  usuarios.map((data, index) => {
                    return (
                      //pasamos el key que es el index
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{data.usuarioCedula}</td>
                        <td>{data.usuarioNombre}</td>
                        <td>{data.usuariApelleido}</td>
                        <td>{data.usuarioCelular}</td>
                        <td>{data.usuarioDireccion}</td>                        
                        <td align="center">
                          <a class="btn btn-danger" onClick={()=> deleteId(data.usuarioCedula)}>
                            <RiDeleteBin5Line />                            
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


export default UsuariosScreen