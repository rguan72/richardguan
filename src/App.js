import React from 'react';
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Richard from "./Richard.jpg"
import linkedin from "./linkedin.png"
import envelope from "./envelope.png"
import github from "./github.png"
import './App.css';

function App() {
  return (
    <>
      {/* Curved Image */}
      <Container fluid style={{ justifyContent: "flex-start" }}>
        <div
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            flexDirection: "row",
            marginTop: 15
          }}
        >
          <Image src={Richard} style={{ height: "30vh" }} rounded />
        </div>
        <Card style={{ width: "18rem", marginBottom: "3vh", borderWidth: 0 }}>
          <Card.Body style={{ paddingLeft: 0}}>
            <Card.Text>
              Hi, I'm <strong>Richard</strong>! I'm a fungi. My favorite player is Kawhi Leonard who is also a fungi.
            </Card.Text>
          </Card.Body>
        </Card>
        <h6 style={{ marginTop: "5vh" }}> Work Experience </h6>
          <Card style={{ width: "18rem", marginBottom: "3vh" }}>
            <Card.Body>
              <Card.Title>Uber</Card.Title>
              <Card.Subtitle>
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
              <Card.Subtitle>
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
              <Card.Subtitle>EECS 482</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", textAlign: "left" }}>
            <Card.Body>
              <Card.Title>Operating Systems</Card.Title>
              <Card.Subtitle>EECS 482</Card.Subtitle>
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
              <Card.Subtitle>Web</Card.Subtitle>
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
