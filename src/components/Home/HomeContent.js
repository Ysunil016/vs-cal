import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomeContent() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who am <span className="homeGreen"> i </span> ?
            </h1>
            <p className="home-about-body">
              Senior Developer with 5 years of experience in modern architecture and  <b className="homeGreen">Agile methodology</b>, 
              I have had the privilege of working in multiple domains including retail, defence and aviation. 
              <br />
              My extensive exposure to these industries has provided me with a deep understanding of their unique challenges and requirements, enabling me to deliver high-quality solutions that meet the needs of diverse stakeholders. 
              <br /> 
              With a passion for technology and a commitment to excellence, I have developed in-depth experience in multiple programming languages and frameworks, and have practical experience in deploying cloud infrastructure using <b className="homeGreen">CI/CD</b> practices. 
              <br /> 
              Strong understanding of modern architecture and <b className="homeGreen">Agile practices</b> has enabled me to develop efficient and scalable solutions that drive business value.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1> */}
            <p>
              Would love to <span className="homeGreen">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ysunil016"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sunil016/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeContent;
