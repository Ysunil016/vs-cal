import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      <strong className="homeGreen">Code</strong> | Days
      </h1>
      <GitHubCalendar
        username="ysunil016"
        blockSize={15}
        blockMargin={5}
        color="#47e59b"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
