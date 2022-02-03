import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
function Bebida({ bebida, agregarCarrito }) {
  const { idDrink, precio, strGlass } = bebida;

  const ejecutarCarrito = (e) => {
    console.log("diste click");

    let objetoCarrito = {
      idDrink,
      precio,
      strGlass,
    };
    agregarCarrito(objetoCarrito);
  };
  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Img variant="top" src={bebida.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{bebida.strGlass}</Card.Title>
        <Card.Text>Precio: {bebida.precio} $</Card.Text>
        <Button variant="primary" onClick={() => ejecutarCarrito()}>
          Añadir a Carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Bebida;
