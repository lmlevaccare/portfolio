import React from 'react'

import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";

import headshot from "../images/headshot2.jpg"
import Wrapper from "./Wrapper"
import "../App.css"
import Container from 'react-bootstrap/esm/Container';
import ContactLinks from "./ContactLinks"
export default function MediaCard() {

      let email = "mailto:laurenlevaccare@icloud.com";
    let urlLinkedin = "https://www.linkedin.com/in/laurenlevaccareresume"
    let urlGithub = "https://github.com/lmlevaccare" 
    

    return (
      <Media>
        {/* <img
          style={{
            marginTop: "85px",
            paddingTop: "20px",
            paddingLeft: "40px",
            paddingRight: "auto",
            boxShadow: "black",

            filter: "brightness-130px",
          }}
          width={230}
          height={330}
          alt="271x380"
          src={headshot}
          alt="Generic placeholder"
        /> */}
        <Media.Body>
          <h1
            style={{
              color: "white",
              float: "left",
              textShadow: "3px 3px 3px violet",
              marginLeft: "25px",
              marginTop: "20px"
            }}
          >
            About.Me
          </h1>

          <p
            style={{
              marginLeft: "35px",
              marginTop: "20px",
              paddingRight: "20px",
              paddingLeft: "20px",
              marginRight: "35px",
              paddingTop: "20px",
              color: "rgb(48, 3, 31)",
              backgroundColor: "rgb(218, 209, 219)",
              fontSize: "30px",
              float: "left",
              borderStyle: "solid",
            }}
          > <b>BACKGROUND</b><br></br>
            Full Stack Web developer with a background in business operations and sales
            management. Graduate of the Northwestern Coding Boot Camp as well as
            holding a BA degree in business management with a minor in media
            marketing.As a full stack web developer I look forward to leveraging
            my management skill-set with new web development and programming
            techniques. I have a strong curiosity for new tools, programs and
            technologies along with a passion for creating new applications and
            collaborating with others.<br></br> <b>TECHNICAL SKILLS</b>
            <br></br> <b>Languages :</b> JavaScript(ES6, Vanilla) | SQL | HTML |
            CSS | Bash <br></br>
            <b>Frameworks & Libraries:</b> React | jQuery | Ajax | Axios|
            Express | Node | Yarn | Bootstrap | Flexbox| Material-Ui | Foundation<br></br>
            <b>Applications & Databases :</b> VS code | Heroku| Github | Gitlab
            | Gitbash | MongoDB | Sequelize
          </p>
          <p></p>

          {/* <Button
            style={{
              marginLeft: "45px",
              marginRight: "45px",
              paddingTop: "30px",
              alignContent: "center",
              backgroundColor: "white",
              fontSize: "30px",
            }}
          >
            <span>
              <a style={{ color: "orange" }} href={email}>
                Email.Me
              </a>
            </span>
          </Button> */}
        </Media.Body>
      </Media>
    );
}
