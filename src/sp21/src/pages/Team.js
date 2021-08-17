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
            <div class="col-md-6 my-4 staff-container">
              <img
                src={member.image}
                alt={member.name}
                class="rounded-circle staff-image"
              />
              <div class="media-body staff-description">
                <h4
                  class="my-0 mt-2 font-weight-bold"
                  style={{ color: "#ED9705" }}
                >
                  {member.name}
                </h4>
                <p class="my-1">{member.email}@</p>
                <p className="my-1" style={{ color: "#008ECB" }}>
                  <i>{member.focus_area}</i>
                </p>
                <span class="staff-bio">
                  <p class="mt-2">{member.bio}</p>
                </span>
              </div>
            </div>
          ))}
        </Row>

        <h3>Teaching Assistants</h3>
        <Row>
          {teachingAssistants.map((member, index) => (
            <div class="col-12 col-sm-6 col-md-4 my-4 staff-container">
              <img
                src={member.image}
                alt={member.name}
                class="rounded-circle staff-image"
              />
              <div class="media-body staff-description">
                <h4
                  class="my-0 mt-2 font-weight-bold"
                  style={{ color: "#ED9705" }}
                >
                  {member.name}
                </h4>
                <p class="my-1">{member.email}@</p>
                <p className="my-1" style={{ color: "#008ECB" }}>
                  <i>{member.focus_area}</i>
                </p>
                <span class="staff-bio">
                  <p class="mt-2">{member.bio}</p>
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
