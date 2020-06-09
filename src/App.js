import React from 'react';
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import * as content from "./content.json"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Richard from "./Richard.jpg"
import linkedin from "./linkedin.png"
import envelope from "./envelope.png"
import github from "./github.png"
import './App.css';

function App() {
  console.log(content)
  const contentJSX = content.default.map((section) => {
    const sectionName = Object.keys(section)[0]
    const sectionCards = section[sectionName].map((item) => 
      <Card key={item.title} className="mb-4" style={{ width: "18rem"}}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle className="text-muted">
            {item.subtitle}
          </Card.Subtitle>
          <Card.Text>
            {item.text}
          </Card.Text>
          {item.link && <Card.Link href={item.link}>View</Card.Link>}
          <Card.Text>
            <small className="text-muted">{item.dates}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    )
    return (
      <>
        <h6 className="mt-2"> {sectionName} </h6>
        {sectionCards}
      </>
    )
  })
  return (
    <>
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
        <Card  style={{ width: "18rem", borderWidth: 0 }}>
          <Card.Body style={{ paddingLeft: 0}}>
            <Card.Text>
              Hi, I'm <strong>Richard</strong>! I'm a fungi. My favorite player is Kawhi Leonard who is also a fungi.
            </Card.Text>
          </Card.Body>
        </Card>
        {contentJSX}
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
