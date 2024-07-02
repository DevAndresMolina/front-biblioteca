import { useState } from "react";
const useCantidadLibros = () => {
  const [cantidad, setCantidad] = useState(0);
  
  const incrementar = () => {
    setCantidad(cantidad + 1);
  };
  const decrementar = () => {
    setCantidad(cantidad - 1);
  };
 
  return { cantidad, incrementar, decrementar };
};
export default useCantidadLibros;