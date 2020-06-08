import React from 'react';
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "bootstrap/dist/css/bootstrap.min.css";
import selfie from "./selfie.jpg"
import linkedin from "./linkedin.png"
import envelope from "./envelope.png"
import github from "./github.png"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      {/* Curved Image */}
      <Container fluid style={{ justifyContent: "center" }}>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image src={selfie} style={{ height: "30vh" }} rounded />
          <h2> About Me </h2>
          <p>
            {" "}
            I'm a fungi! Filler text to take up some more space y/know paragraph
            and everything{" "}
          </p>
        </div>
        <h6 style={{ marginTop: "5vh" }}> Work Experience </h6>
        <Card style={{ width: "18rem", marginBottom: "3vh" }}>
          <Card.Body>
            <Card.Title>Uber</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Eater Home Feed
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", textAlign: "left" }}>
          <Card.Body>
            <Card.Title>University of Michigan</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Computer Science, '22
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <h6 style={{ marginTop: "5vh" }}> Courses </h6>
        <Card
          style={{ width: "18rem", textAlign: "left", marginBottom: "3vh" }}
        >
          <Card.Body>
            <Card.Title>Operating Systems</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">EECS 482</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", textAlign: "left" }}>
          <Card.Body>
            <Card.Title>Operating Systems</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">EECS 482</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <h6 style={{ marginTop: "5vh" }}> Projects </h6>
        <Card style={{ width: "18rem", textAlign: "left" }}>
          <Card.Body>
            <Card.Title>Codenames</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Web</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="http://codenames.co">View</Card.Link>
          </Card.Body>
        </Card>
        <h6 style={{ marginTop: "5vh" }}> Contact </h6>
        <div style={{ display: "inline-block", textAlign: "left"}}>
          <a
            href="https://linkedin.com/in/richard-g-403534124/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="" style={{ width: "2em", marginRight: "1em", marginBottom: ".5em" }} />
          </a>
          <a
            href="https://github.com/rguan72"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" style={{ width: "2em", marginBottom: ".4em", marginRight: "1em" }} />
          </a>
          <a
            href="mailto:guanr@umich.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={envelope} alt="" style={{ width: "2em", marginBottom: ".4em"}} />
          </a>
        </div>
      </Container>
    </>
  );
}

export default App;
