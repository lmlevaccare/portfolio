import React from 'react'
import resume from "../images/Lauren Levaccare Resume FEB 2021.pdf"
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';


import "../App.css"
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const ContactLinks = () => {

     
    let email = "mailto:laurenlevaccare@icloud.com"
    let urlLinkedin = "https://www.linkedin.com/in/laurenlevaccareresume"
    let urlGithub = "https://github.com/lmlevaccare"



    return (
      <Container>
        <Row>
          {/* <Col>
            <Button
              style={{
                marginLeft: "45px",
                marginRight: "45px",
                marginTop: "30px",
                paddingTop: "30px",
                alignContent: "center",
                backgroundColor: "white",
                fontSize: "30px",
              }}
            >
              <span>
                <a style={{ color: "orange" }} href={urlGithub}>
                 Github.Account
                </a>
              </span>
            </Button>
          </Col> */}
          <Col>
            <Button
              style={{
                // marginLeft: "45px",
                // marginRight: "45px",
                marginTop: "5px",
                marginBottom: "10px",
                paddingTop: "10px",
                paddingRight: "auto",
                paddingLeft: "auto",
                float: "left",
                backgroundColor: "white",
                fontSize: "30px",
                borderStyle: "solid",
              }}
            >
              <span>
                <a style={{ color: "rgb(48, 3, 31)" }} href={urlLinkedin}>
                  Linkedin
                </a>
              </span>
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                marginTop: "5px",
                marginBottom: "10px",
                paddingTop: "10px",
                paddingRight: "auto",
                paddingLeft: "auto",
                float: "left",
                backgroundColor: "white",
                fontSize: "30px",
                borderStyle: "solid",
              }}
            >
              <span>
                <a style={{ color: "rgb(48, 3, 31)" }} src={resume}>
                  Resume
                </a>
              </span>
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                marginTop: "5px",
                marginBottom: "10px",
                paddingTop: "10px",
                paddingRight: "auto",
                paddingLeft: "auto",
                float: "left",
                backgroundColor: "white",
                fontSize: "30px",
                borderStyle: "solid",
              }}
            >
              <span>
                <a style={{ color: "rgb(48, 3, 31)" }} href={email}>
                  Email.Me
                </a>
              </span>
            </Button>
          </Col>
        </Row>
      </Container>
    );
}
export default ContactLinks