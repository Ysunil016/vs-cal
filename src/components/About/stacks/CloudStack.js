import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiAws,
} from "react-icons/di";
import {
  SiAwslambda,
  SiAwsfargate,
  SiAmazoncloudwatch,
  SiRedhatopenshift,
  SiArgo,
  SiHelm,
  SiKubernetes,
  SiContainerd,
  SiApachekafka,
  SiRedis,
  SiDocker,
  SiRedhat,
} from "react-icons/si";
import { StackType } from "./StackDetailModal";

function CloudStack({techStackModal}) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.AWS)}>
        <strong className="title">AWS</strong>
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.OPENSHIFT)}>
        <strong className="title">Openshift</strong>
        <SiRedhatopenshift />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.REDHAT)}>
        <strong className="title">Redhat</strong>
        <SiRedhat />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.SERVERLESS)}>
        <strong className="title">Serverless</strong>
        <SiAwslambda />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.FARGATE)}>
        <strong className="title">Fargate</strong>
        <SiAwsfargate />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.CLOUDWATCH)}>
        <strong className="title">Cloudwatch</strong>
        <SiAmazoncloudwatch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.DOCKER)}>
        <strong className="title">Docker</strong>
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.CONTAINERD)}>
        <strong className="title">Container Runtime</strong>
        <SiContainerd />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.K8S)}>
        <strong className="title">Kubernetes</strong>
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.HELM)}>
        <strong className="title">Helm</strong>
        <SiHelm />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.ARGOCD)}>
        <strong className="title">ArgoCD</strong>
        <SiArgo />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.KAFKA)}>
        <strong className="title">Apache Kafka</strong>
        <SiApachekafka />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>techStackModal(StackType.REDIS)}>
        <strong className="title">Redis</strong>
        <SiRedis />
      </Col>
    </Row>
  );
}

export default CloudStack;
