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

        <h3>Additional resources</h3>
        <ul>
          <li>
            <p>
              <a
                  href={"https://binarysearch.com/"}
                  target={"_blank"}
                  rel={"noreferrer"}
              >
                BinarySearch.com
              </a>
              - Learn Algorithms Together! Create a room, invite your friends, and race to finish the problems.
            </p>

          </li>
          <li>
            <p>
              <a
                  href={"https://docs.google.com/document/d/1Ewown3BLdG1XH7EsNXxZFgIOFV7qm8P6W50kc9yK4fs/edit?usp=sharing"}
                  target={"_blank"}
                  rel={"noreferrer"}
              >
                How to 100% Get a Job 40% of the Time: Pingpong Edition
              </a>
            </p>
          </li>
        </ul>

        {/*<h3>Lecture Slides</h3>*/}
        {/*<ul>*/}
        {/*  <li>*/}
        {/*    <a target="_blank" rel="noreferrer" href=".">*/}
        {/*      Introduction*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </Col>
    </Row>
  );
};

export default Resources;
