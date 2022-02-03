import React, { useEffect, useState } from "react";
import { obtenerBebidas } from "../api/bebidasApi";
import Bebida from "./Bebida";

function ListaBebidas({ bebidas, agregarCarrito }) {
  
  const bebidasConPrecio = bebidas.map((bebida) => {
    return { ...bebida, precio: Math.floor(Math.random() * 101) };
  });

  return (
    <div className="container mt-5">
      <div className="row">
        {bebidasConPrecio.map((bebida, i) => (
          <div
            className="col-12 col-md-6 col-lg-3 d-flex justify-content-center"
            key={i}
          >
            <Bebida bebida={bebida} agregarCarrito={agregarCarrito} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaBebidas;
