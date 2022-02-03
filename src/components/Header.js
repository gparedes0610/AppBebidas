import React from "react";
import { Navbar, Container, Offcanvas, Nav, Table } from "react-bootstrap";
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
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((bebida, i) => (
                    <tr key={i}>
                      <td>
                        <img
                          src={bebida.strDrinkThumb}
                          alt="img de bebida"
                          className="img-fluid w-25"
                        />
                      </td>
                      <td>{bebida.strGlass}</td>
                      <td>{bebida.precio}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
