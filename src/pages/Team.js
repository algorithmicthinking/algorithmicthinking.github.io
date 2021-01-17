import React from "react";

import { facilitators, teachingAssistants } from "../data/Staff";

const Team = () => {
  return (
    <div class="row">
      <a class="anchor" id="staff" />
      <div class="col">
        <h2>Course Staff</h2>
        <h3>DeCal Facilitators</h3>
        <div class="row">
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
        </div>

        <h3>TAs</h3>
        <div class="row">
          {teachingAssistants.map((member, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Team;
