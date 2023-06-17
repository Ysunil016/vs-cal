import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsGraphUpArrow } from "react-icons/bs";
import {
  SiSaucelabs,
  SiSelenium,
  SiSonarqube,
  SiSpeedtest, SiTampermonkey, SiTestcafe, SiTestinglibrary
} from "react-icons/si";
import { StackType } from "./StackDetailModal";

function MiscStack({techStackModal}) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.TDD)}>
        <strong className="title">Test Driven Development</strong>
        <SiSpeedtest />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.AGILE)}>
        <strong className="title">Agile Methodology</strong>
        <BsGraphUpArrow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.RTL)}>
        <strong className="title">Testing Library</strong>
        <SiTestinglibrary />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.TESTCAFE)}>
        <strong className="title">Test Cafe</strong>
        <SiTestcafe />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.SONAR)}>
        <strong className="title">Sonar Qube</strong>
        <SiSonarqube />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.LITMUS)}>
        <strong className="title">Litmus Chaos</strong>
        <SiTampermonkey />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.SELENIUM)}>
        <strong className="title">Selenium</strong>
        <SiSelenium />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.SAUCELABS)}>
        <strong className="title">Sauce Labs</strong>
        <SiSaucelabs />
      </Col>
    </Row>
  );
}

export default MiscStack;
