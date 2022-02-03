import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Table,
  Card,
} from "react-bootstrap";
function Header({ carrito }) {
  return (
    <Navbar bg="light" expand={false}>
      <Container Container>
        <Navbar.Brand href="#">E-Commerce</Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Carrito de compras
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {carrito.length > 0 ? (
                <table className="table">
                  <thead>
                    <td>Nombre</td>
                    <td>P.Unitario</td>
                    <td>Cantidad</td>
                    <td>Sub.Total</td>
                  </thead>
                  <tbody>
                    {carrito.map((bebida, i) => (
                      <tr key={i}>
                        <td>{bebida.strGlass}</td>
                        <td>S/.{bebida.precio}</td>
                        <td>{bebida.cantidad}</td>
                        <td>S/.{bebida.precio * bebida.cantidad}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="3">Total</td>
                      <td>
                        S/.
                        {carrito.reduce((total, bebida) => {
                          return total + bebida.precio * bebida.cantidad;
                        }, 0)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <div>Debe de agregar algun producto</div>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
