import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Resources = () => {
  return (
    <Row>
      <Col>
        <a class="anchor" id="resources" />

        <h2>Resources</h2>

        <p>
          Ask your questions on our class{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://piazza.com/berkeley/spring2021/cs198112"
          >
            Piazza
          </a>
          .
        </p>

        <h3>Lecture Slides</h3>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href=".">
              Introduction
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Resources;
