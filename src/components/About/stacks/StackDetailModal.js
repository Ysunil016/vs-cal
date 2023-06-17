import React from "react";
import { Button, Modal} from "react-bootstrap";
import stacksModalDetails from './stacksModalDetails.json'

const getModalDetailsByStack = (stackType)=> stacksModalDetails[stackType] || { modalTitle:"TBD", modalBody:"TBD" }

export const StackType = {
    JAVA : "JAVA",
    AWS : "AWS",
    OPENSHIFT : "OPENSHIFT",
    REDHAT : "REDHAT",
    SERVERLESS : "SERVERLESS",
    FARGATE : "FARGATE",
    CLOUDWATCH : "CLOUDWATCH",
    DOCKER : "DOCKER",
    CONTAINERD : "CONTAINERD",
    K8S : "K8S",
    HELM : "HELM",
    ARGOCD : "ARGOCD",
    KAFKA : "KAFKA",
    REDIS : "REDIS",
    GITHUB : "GITHUB",
    GITLAB : "GITLAB",
    INTELLIJ : "INTELLIJ",
    VSCODE : "VSCODE",
    POSTMAN: "POSTMAN",
    MSOFFICE : "MSOFFICE",
    JIRA : "JIRA",
    CONFLUENCE : "CONFLUENCE",
    TDD: "TDD",
    AGILE: "AGILE",
    RTL: "RTL",
    TESTCAFE: "TESTCAFE",
    SONAR : "SONAR",
    LITMUS : "LITMUS",
    SELENIUM : "SELENIUM",
    SAUCELABS : "SAUCELABS"
}

export const openStackDetails = (showModal, setShowModal, stackType) => {
    if(!stackType || !showModal) return null

    const {modalTitle, modalBody, modalQuote} = getModalDetailsByStack(stackType)
    return (
      <React.Fragment>
        <Modal className="stackDetailsModal" show={showModal}>
          <Modal.Header className="modalHeader">
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <div>{modalBody}</div>
            <b/>
            <hr />
            <strong className="modalQuote">{modalQuote}</strong>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "rgb(18 22 24)", color: "white" }}>
            <Button variant="secondary" onClick={()=>setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }