import React from "react";
import Carousel from "react-bootstrap/Carousel";


import coverimg from "../images/photo-1531297484001-80022131f5a1.jpeg";
import kindness from "../images/kindness.jpeg";
import readhere from "../images/readingsmalls.jpeg";
import duet from "../images/duet.jpeg";
import notepad from "../images/notepaddark.jpeg";
import weather from "../images/weatherdash.jpeg";
import fashion from "../images/fashionapp.jpeg";

import employee from "../images/employeegenerator.jpeg";

const WorkImg = () => {
  return (
    // <Wrapper className="works" style={{  color: "rgb(48, 3, 31)", textAlign: "center" }}>
    <div >
      <h1
        style={{
          color: "white",
          textAlign: "center",
          textShadow: "3px 3px 3px violet",
        }}
      >
        My.Work
      </h1>

      <h3
        style={{
          color: "white",
          fontStyle: "italic",
          fontWeight: "bolder",
          textShadow: "3px 3px 3px violet",
        }}
      >
        "First, solve the problem. Then, write the code."
      </h3>

      <Carousel fade>
        {/* cover page */}
        <Carousel.Item>
          <img className="d-block" alt="First slide" src={coverimg} />
          <Carousel.Caption>
            <h3>Full Stack Development Projects</h3>

            <a href="https://github.com/lmlevaccare">GitHub Link</a>
          </Carousel.Caption>
        </Carousel.Item>
        {/*  page  1 */}
        <Carousel.Item>
          <img className="d-block " alt="Second slide" src={kindness} />
          <Carousel.Caption>
            <h3>Kindness.Club</h3>
            <a href="https://github.com/Project-2-Group-4/The-Kindness-Club">
              GitHub Link
            </a>
            <a href="http://kindnessclub.herokuapp.com/home">. Deployed Link</a>
          </Carousel.Caption>
        </Carousel.Item>
        {/*  page  2 */}
        <Carousel.Item>
          <img className="d-block " alt="Third slide" src={readhere} />
          <Carousel.Caption>
            <h3>Read.Here</h3>
            <a href="https://github.com/lmlevaccare/ReadHere">GitHub Link</a>
            <a href="https://thedreamteam-nubootcamp.github.io/ReadHere/">
              . Deployed Link
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        {/* page 3 */}
        <Carousel.Item>
          <img className="d-block " alt="Forth slide" src={duet} />
          <Carousel.Caption>
            <h3>Duet | React.App</h3>
            <a href="https://github.com/NW-Scrappy/duet">GitHub Link </a>
            <a href="">. Deployed Link</a>
          </Carousel.Caption>
        </Carousel.Item>

        {/* page 4 */}
        <Carousel.Item>
          <img className="d-block " alt="Fifth slide" src={notepad} />
          <Carousel.Caption>
            <h3>Virtual.Notepad | CRUD.App</h3>
            <a href="https://github.com/lmlevaccare/MyVirtualNotePad">
              GitHub Link{" "}
            </a>
            <a href="https://express-notepad-2020.herokuapp.com/">
              . Deployed Link
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        {/* page 5 */}
        <Carousel.Item>
          <img className="d-block " alt="Sixth slide" src={weather} />
          <Carousel.Caption>
            <h3>Weather.Dashboard</h3>
            <a href="https://github.com/lmlevaccare/weatherappHW">
              GitHub Link{" "}
            </a>
            <a href="https://lmlevaccare.github.io/weatherappHW">
              . Deployed Link
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        {/* page 6 */}
        <Carousel.Item>
          <img className="d-block " alt="Seventh slide" src={fashion} />
          <Carousel.Caption>
            <h3>Fashion.Wish | React.App</h3>
            <a href="https://github.com/lmlevaccare/designer-wish-app">
              GitHub Link{" "}
            </a>
            <a href="">. Deployed Link</a>
          </Carousel.Caption>
        </Carousel.Item>
        {/* page 7 */}
        <Carousel.Item>
          <img className="d-block " alt="Eigth slide" src={employee} />
          <Carousel.Caption>
            <h3>Employee.Roster | Backend Dev.App</h3>
            <a href="https://github.com/lmlevaccare/employeeGenerator">
              GitHub Link{" "}
            </a>
            <a href="https://drive.google.com/file/d/12sZi3E_6z62gm3Xi4wqKSFvSDvrSpzOg/view">
              . Deployed Link
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default WorkImg;
