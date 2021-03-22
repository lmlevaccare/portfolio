import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import resume from "../images/Lauren Levaccare TR copy.pdf";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import { init } from "emailjs-com";
init("user_TBGKrbhyTYR3q1Oa1Ydv2");
export const Contact = () => {
  let email = "mailto:laurenlevaccare@icloud.com";
  let urlLinkedin = "https://www.linkedin.com/in/laurenlevaccareresume";
  let urlGithub = "https://github.com/lmlevaccare";

  const [formData, setEmail] = useState("");

  const handleChange = (e) => {
    console.log("successful insert");
    // e.preventDefault();
    // axios
    //   .post("https://api.emailjs.com/api/v1.0/email/send", {

    //     formData: formData,

    //   })

    //   .then((error) => {
    //     console.log(error);
    //   });
    // handleClear();
  };

  var data = {
    service_id: "service_m2iyk2m",
    template_id: "template_mubeppm",
    user_id: "user_TBGKrbhyTYR3q1Oa1Ydv2",
    template_params: {
      username: "LAUREN LEVACCARE",
      "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
    },
  };
  console.log(data);

  // const handleClear = () => {
  //   document.getElementById("create-post").reset();
  // };

  return (
    <Container>
      <Row>
        <Col>
          <h1
            style={{
              color: "white",
              textAlign: "center",
              textShadow: "3px 3px 3px violet",
            }}
          >
            Contact.Me
          </h1>

          <p
            style={{
              marginLeft: "auto",
              marginTop: "auto",
              paddingRight: "20px",
              paddingLeft: "20px",
              marginRight: "autopx",
              paddingTop: "20px",
              color: "rgb(48, 3, 31)",
              backgroundColor: "rgb(218, 209, 219)",
              fontSize: "30px",
              borderStyle: "solid",
              height: "530px",
              width: "480px",
            }}
          >
            I would love to hear from you!
            <br></br>
            If you would like to chat, you can contact me directly at{" "}
            <a href={email}>laurenlevaccare@icould.com</a>
            <br></br>For a further look into my web development work and
            background, please check out the links below.<br></br>
            <a href={urlGithub}>GitHub.Account</a> <br></br>
            <a href={urlLinkedin}>Linkedin.Account</a> <br></br>
            <a href={resume}>Resume</a>
          </p>
        </Col>

        <Col>
          <h1
            style={{
              color: "white",

              textAlign: "center",
              textShadow: "3px 3px 3px violet",
            }}
          >
            Message.Me
          </h1>
          <Form id="create-post">
            <Form.Group
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(e.target.value);
              }}
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                style={{
                  color: "darkgrey",
                  border: "solid black",
                  textShadow: "3px 3px 3px violet",
                  marginLeft: "auto",
                  marginTop: "auto",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  marginRight: "autopx",
                  paddingTop: "20px",
                  height: "530px",
                  width: "480px",
                }}
                as="textarea"
                placeholder="leave a message.."
                rows={5}
              />
            </Form.Group>
            <Button
              href={email}
              variant="primary"
              type="submit"
              onClick={handleChange}
            >
              Email.Me
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Contact;
