import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="home-about-body">
              With a passion for technology and a commitment to excellence, I have developed in-depth experience in multiple programming languages and frameworks, and have practical experience in deploying cloud infrastructure using <b className="homeGreen">CI/CD</b> practices. 
              <br /> 
              Strong understanding of modern architecture and <b className="homeGreen">Agile practices</b> has enabled me to develop efficient and scalable solutions that drive business value.
              <br />
              <br />
            </p>
           <p> Apart from coding, some other activities that I love to do! </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Spending time with family
            </li>
            <li className="about-activity">
              <ImPointRight /> Talking about Techs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be the change that you wish to see in the world!"{" "}
          </p>
          <footer className="blockquote-footer">Mahatma Gandhiji</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
