import React from "react";
import { Container, Row, Col, Nav, Link} from "react-bootstrap";


const MenuBar = () => {
  return (
    <Container>
        <Row>
         <Nav.Link eventKey="link-event-key" className="">
          Link text
         </Nav.Link>
        </Row>
    </Container>
  );
};

export default MenuBar;
