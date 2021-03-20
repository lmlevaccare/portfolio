import React from 'react'
 import resume from "../images/Lauren Levaccare TR copy.pdf";
export const Contact = () => {
    let email = "mailto:laurenlevaccare@icloud.com";
    let urlLinkedin = "https://www.linkedin.com/in/laurenlevaccareresume";
    let urlGithub = "https://github.com/lmlevaccare";
   
    return (
      <div>
        <h1
          style={{
            color: "white",
            float: "left",
            paddingLeft: "20px",
            textShadow: "3px 3px 3px violet",
          }}
        >
          Contact.Me
        </h1>

        <p
          style={{
            marginLeft: "35px",
            marginTop: "50px",
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
        >
          I would love to hear from you!
          <br></br>
          If you would like to chat, please contact me directly at{" "}
          <a href={email}>laurenlevaccare@icould.com</a>
          <br></br>For a further look into my web development work and
          background, please check out the links below.<br></br>
          <a href={urlGithub}>GitHub.Account</a> <br></br>
          <a href={urlLinkedin}>Linkedin.Account</a> <br></br>
          <a href={resume}>Resume</a>
        </p>
      </div>
    );
}
export default Contact