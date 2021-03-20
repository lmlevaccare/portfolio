import React from 'react'
import ContactLinks from './ContactLinks';
import resume from "../images/Lauren Levaccare TR copy.pdf"
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
  import Row from "react-bootstrap/Row";
    import Col from "react-bootstrap/Col";
const NewFooter = () => {
    
     
    let email = "mailto:laurenlevaccare@icloud.com";
    let urlLinkedin = "https://www.linkedin.com/in/laurenlevaccareresume";
    let urlGithub = "https://github.com/lmlevaccare";

    
    return (
   
    
      <div
        className="fixed-bottom"
      >
        <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
          <Container>
            <Row>
              <Col>
                <NavbarBrand>
                  <a
                    style={{ color: "white", textAlign: "center" }}
                    href={resume}
                  >
                    Resume
                  </a>
                </NavbarBrand>
              </Col>
              <Col>
                <NavbarBrand>
                  <a href={urlLinkedin}>Linkedin</a>
                </NavbarBrand>
              </Col>
              <Col>
                <NavbarBrand>
                  <a href={urlGithub}>Github</a>
                </NavbarBrand>
              </Col>
              <Col>
                <NavbarBrand>
                  <a href={email}>Email.Me</a>
                </NavbarBrand>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
}

             

export default NewFooter
