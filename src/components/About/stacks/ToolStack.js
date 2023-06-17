import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import {
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
  SiJira,
  SiGitlab,
  SiMicrosoftoffice,
  SiConfluence,
} from "react-icons/si";
import { StackType } from "./StackDetailModal";

function ToolStack({techStackModal}) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.GITHUB)}>
        <strong className="title">Github</strong>
        <BsGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.GITLAB)}>
        <strong className="title">GitLab</strong>
        <SiGitlab />  
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.INTELLIJ)}>
      <strong className="title">Intellij</strong>
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.VSCODE)}>
        <strong className="title">Visual Studio Code</strong>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.POSTMAN)}>
      <strong className="title">Postman</strong>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.MSOFFICE)}>
        <strong className="title">MS Office</strong>
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.JIRA)}>
        <strong className="title">Jira</strong>
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.CONFLUENCE)}>
        <strong className="title">Confluence</strong>
        <SiConfluence />
      </Col>
    </Row>
  );
}

export default ToolStack;
