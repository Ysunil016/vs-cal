import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiMongodb,
} from "react-icons/di";
import { FaJava, FaNodeJs } from "react-icons/fa";
import {
  SiKotlin,
  SiSpringboot,
  SiQuarkus,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiExpress,
  SiGoland,
  SiAmazondynamodb,
} from "react-icons/si";

function PLStack({techStackModal}) {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> techStackModal("JAVA")}>
        <strong className="title">Java</strong>
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <strong className="title">Kotlin</strong>
        <SiKotlin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <strong className="title">NodeJs</strong>
        <FaNodeJs  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <strong className="title">Typescript</strong>
        <SiTypescript  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <strong className="title">Golang</strong>
        <SiGoland  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <strong className="title">Springboot</strong>
        <SiSpringboot  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <strong className="title">Quarkus</strong>
        <SiQuarkus  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <strong className="title">React & Redux</strong>
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <strong className="title">ExpressJs</strong>
        <SiExpress  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <strong className="title">Postgres</strong>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <strong className="title">Mongodb</strong>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <strong className="title">Dynamodb</strong>
        <SiAmazondynamodb />
      </Col>
    </Row>
  );
}

export default PLStack;
