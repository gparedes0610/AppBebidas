import React, { useState, useEffect } from "react";

import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Header from "./components/Header";
import ListaBebidas from "./components/ListaBebidas";
import Form from "./components/Form";
import { obtenerBebidas } from "./api/bebidasApi";
function App() {
  const [carrito, setCarrito] = useState([]);

  const [bebidas, setBebidas] = useState([]);

  const agregarCarrito = (objCarrito) => {
    const existe = carrito.findIndex(
      (bebida) => bebida.idDrink === objCarrito.idDrink
    );
    console.log(existe);
    if (existe === -1) {
      setCarrito([...carrito, { ...objCarrito, cantidad: 1 }]);
    } else {
      let carritoTemp = [...carrito];
      carritoTemp[existe].cantidad += 1;
      setCarrito(carritoTemp);
    }
  };

  const getData = async () => {
    try {
      const totalBebidas = await obtenerBebidas();
      setBebidas(totalBebidas);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header carrito={carrito} />
      <Form />
      <ListaBebidas bebidas={bebidas} agregarCarrito={agregarCarrito} />
    </>
  );
}

export default App;
