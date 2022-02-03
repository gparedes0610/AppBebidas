import React, { useState, useEffect } from "react";
import Axios from "axios";
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

  const [inputBebida, setInputBebida] = useState("");

  //url para buscar
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputBebida}`;

  const getBusqueda = async () => {
    let result = await Axios.get(URL);
    console.log("hola", result.data.drinks);
    let bebidasConPrecio = result.data.drinks.map((bebida) => {
      return {
        ...bebida,
        precio: Math.floor(Math.random() * 101),
        cantidad: 1,
      };
    });
    setBebidas(bebidasConPrecio);
  };

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

      const bebidasConPrecio = totalBebidas.map((bebida) => {
        return {
          ...bebida,
          precio: Math.floor(Math.random() * 101),
          cantidad: 1,
        };
      });
      setBebidas(bebidasConPrecio);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("diste click");
    getBusqueda();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <Header carrito={carrito} />

        <div className="row">
          <div className="col-12 justify-content-center">
            <form onSubmit={handleSubmit}>
              <fieldset className="text-center">
                <legend>Buscar bebida</legend>
              </fieldset>
              <div className="row mt-4">
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar bebida"
                    value={inputBebida}
                    onChange={(e) => setInputBebida(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="submit"
                    className="btn btn-block btn-primary"
                    value="Buscar Bebidas"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <ListaBebidas bebidas={bebidas} agregarCarrito={agregarCarrito} />
      </div>
    </>
  );
}

export default App;
