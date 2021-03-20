import React from "react";
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import "../App.css"
import WorkImg from "./WorkImg";
// import Button from "./Button";
import image1 from "../images/designerWishlist.png";
import image2 from "../images/kindnessClubAPP.png";
import image3 from "../images/notepadApp.png";
import image4 from "../images/schedulepln.png";
import image5 from "../images/weatherApp.png";
import image6 from "../images/Screen Shot 2020-11-20 at 12.55.48 PM.png";




const Projects = () => {
    const urlArray = [
        {
            id: 1,
            urlio: "https://thedreamteam-nubootcamp.github.io/ReadHere/",
            urlgit: "https://github.com/lmlevaccare/ReadHere",
            image1: { image1 }
        },

        {
            id: 2,
            urlio: "http://kindnessclub.herokuapp.com/home",
            urlgit: "https://github.com/Project-2-Group-4/The-Kindness-Club",
        },
        {
            id: 3,
            urlgit: "https://github.com/lmlevaccare/employeeGenerator",
            urlio: "https://drive.google.com/file/d/12sZi3E_6z62gm3Xi4wqKSFvSDvrSpzOg/view",
        },
        {
            id: 4,
            urlio: "https://lmlevaccare.github.io/designer-wish-app/",
            urlgit: "https://github.com/lmlevaccare/designer-wish-app",
        },
        {
            id: 5,
            urlio: "https://express-notepad-2020.herokuapp.com/",
            urlgit: "https://github.com/lmlevaccare/MyVirtualNotePad",
        },
        {
            id: 6,
            urlio: "https://lmlevaccare.github.io/weatherappHW/",
            urlgit: "https://github.com/lmlevaccare/weatherappHW",
        },
    ];
    console.log(urlArray);


    const urlsArray = urlArray.map(urls => (urls.urlio));

    console.log("urls", urlsArray)
    const urlArray2 = urlArray.map(urls => (urls.urlgit));
    console.log("gits", urlsArray)

    return (
        <div className="cards">
            <Container>
                <Row>
                    {/* CARD 1 */}
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Title style={{ textAlign: 'center' }}>The.Kindness.Club</Card.Title>
                            <Card.Img variant="top" src={image2} width={100}
                                height={300} thumbnail  />
                            <Card.Body>
                                <Card.Text style={{ textAlign: 'center' }}></Card.Text>
                                <Card.Link style={{ textAlign: 'center' }} href={urlArray2[1]}>Github Repo</Card.Link>
                                <Card.Link style={{ textAlign: 'center' }} href={urlsArray[1]}>Deployed Link</Card.Link>

                            </Card.Body>

                        </Card>
                    </Col>

                    {/* CARD 2 */}
                    <Col>
                       
                        <Card style={{ width: '18rem' }}>
                            <Card.Title style={{ textAlign: 'center' }}>Read.Here</Card.Title>
                            <Card.Img variant="top" src={image6} width={100}
                                height={300} thumbnail />
                            <Card.Body>

                                <Card.Text style={{ textAlign: 'center' }}></Card.Text>
                  


                                <Card.Link style={{ textAlign: 'center' }} href="https://thedreamteam-nubootcamp.github.io/ReadHere/">Github Repo</Card.Link>
                                <Card.Link style={{ textAlign: 'center' }} href="https://github.com/lmlevaccare/ReadHere">Deployed Link</Card.Link>

                            </Card.Body>

                        </Card>
                    </Col>

                    {/* CARD 3 */}
                    <Col>
                       
                        <Card style={{ width: '18rem' }}>
                            <Card.Title style={{ textAlign: 'center' }}>Weather.API.Map</Card.Title>
                            <Card.Img variant="top" src={image5} width={100}
                                height={300} thumbnail />
                            <Card.Body>

                                <Card.Text style={{ textAlign: 'center' }}></Card.Text>
               

                                <Card.Link style={{ textAlign: 'center' }} href={urlsArray[5]}>Github Repo</Card.Link>
                                <Card.Link style={{ textAlign: 'center' }} href={urlArray2[5]}>Deployed Link</Card.Link>

                            </Card.Body>

                        </Card>
                    </Col>
                    {/* CARD 4 */}
                    <Col>
                        
                        <Card style={{ width: '18rem' }}>
                            <Card.Title style={{ textAlign: 'center' }}>Virtual.Notepad</Card.Title>
                            <Card.Img variant="top" src={image3} width={100}
                                height={300} thumbnail />
                            <Card.Body>

                                <Card.Text style={{ textAlign: 'center' }}></Card.Text>
                            
                                <Card.Link style={{ textAlign: 'center' }} href={urlArray2[4]}>Github Repo</Card.Link>
                                <Card.Link style={{ textAlign: 'center' }} href={urlsArray[4]}>Deployed Link</Card.Link>

                            </Card.Body>

                        </Card>
                    </Col>

                    {/* <ul><span><a href={urlsArray[0]}>ReadMe.App-@github.pages</a></span></ul>
                <ul><span><a href={urlArray2[0]}>ReadMe.App-githubRepo</a></span></ul>
            <ul><span><a href={urlsArray[1]}>Kindness.App-@heroku</a></span></ul>
            <ul><span><a href={urlArray2[1]}>Kindness.App-githubRepo</a></span></ul>
            <ul><span><a href={urlsArray[2]}>EmployeeGeneratorApp-GoogleLink</a></span></ul>
            <ul><span><a href={urlArray2[2]}>EmployeeGenerator.App-githubRepo</a></span></ul>
            <ul><span><a href={urlsArray[3]}>DesignerWish.App-@github.pages</a></span></ul>
            <ul><span><a href={urlArray2[3]}>DesignerWish.App-githubRepo</a></span></ul>
            <ul><span><a href={urlsArray[4]}>ExpressNotePad.App-@heroku</a></span></ul>
            <ul><span><a href={urlArray2[4]}>ExpressNotePad.App-githubRepo</a></span></ul>
            <ul><span><a href={urlsArray[5]}>WeatherApi.App-@github.pages</a></span></ul>
    <ul><span><a href={urlArray2[5]}>WeatherApi.App-githubRepo</a></span></ul>     */}
                </Row>
            </Container>
            <WorkImg/>
        </div>

    );
};



export default Projects


