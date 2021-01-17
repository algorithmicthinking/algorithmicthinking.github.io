import React from "react";

import { facilitators, teachingAssistants } from "../data/Staff";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Team = () => {
  return (
    <Row>
      <Col>
        <a class="anchor" id="staff" />
        <h2>Course Staff</h2>
        <h3>DeCal Facilitators</h3>
        <Row>
          {facilitators.map((member, index) => (
            <div class=" col-md-6 my-4">
              <img
                src={member.image}
                alt={member.name}
                class="mr-3 rounded-circle staff-image"
              ></img>
              <div class="media-body">
                <h4 class="my-0">{member.name}</h4>
                <p class="my-1">{member.email}@</p>

                <span class="staff-bio">
                  <p>{member.bio}</p>
                </span>
              </div>
            </div>
          ))}
        </Row>

        <h3>TAs</h3>
        <Row>
          {teachingAssistants.map((member, index) => (
            <div class="col-md-6 my-4">
              <img
                src={member.image}
                alt={member.name}
                class="mr-3 rounded-circle staff-image"
              ></img>
              <div class="media-body">
                <h4 class="my-0">{member.name}</h4>
                <p class="my-1">{member.email}@</p>

                <span class="staff-bio">
                  <p>{member.bio}</p>
                </span>
              </div>
            </div>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Team;
