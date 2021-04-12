import React from "react";

import { schedule } from "../data/Schedule";
import Calendar from "../components/Calendar";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import "../css/landing.scss";

const Landing = () => {
  return (
    <div
      className="parallax-window landing"
      data-parallax="scroll"
      data-image-src="img/127background3.jpg"
      data-speed="0.1"
    >
      <Row>
        <Col>
          <h1>
            <b style={{ color: "#ED9705" }}>Leetcode 101</b> |{" "}
            <span style={{ color: "#008ECB" }}>
              Introduction to Algorithmic Thinking
            </span>
          </h1>
          <h2>Spring 2021</h2>
          <h2>Announcements</h2>
          <p>
            Homework 9 is out and is due Monday, April 12th.
            <br/>
            <br/>
            See
            (<a target="_blank"
                  href="https://piazza.com/class/kj2f1d7eqg75ed?cid=62">
                @62
            </a>) for recruiting and algorithm resources!
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <a class="anchor" id="schedule" />

          <h2>Schedule</h2>
          <div class="table-responsive">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Week</th>
                  <th>Date</th>
                  <th>Lecture Topic</th>
                  <th>Section</th>
                  <th>Homework</th>
                </tr>
              </thead>

              {schedule.map((week, index) => (
                <tbody id={`wk${index}`}>
                  <tr>
                    <td class="center">{index}</td>
                    <td class="center">{week.date}</td>
                    <td>
                      {week.topic}
                      <br />
                      {week.extra ? (
                        <>
                          {week.extra} <br />{" "}
                        </>
                      ) : (
                        ""
                      )}
                      {week.slides ? (
                        <>
                          <a target="_blank" href={week.slides}>
                            [Slides]
                          </a>
                        </>
                      ) : (
                        ""
                      )}
                      {(week.video && week.slides) ? " " : ""}
                      {week.video ? (
                        <>
                          <a target="_blank" href={week.video}>
                            [Recording]
                          </a>
                        </>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      {week.sectionName ? (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={week.sectionProblem}
                        >
                          {week.sectionName}
                        </a>
                      ) : (
                        ""
                      )}

                      <br />
                      <br />

                      {week.sectionInfo ? (
                        <>
                          Resources:
                          <br />
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={week.sectionInfo}
                          >
                            [Ahan’s Discussion Notes]
                          </a>
                        </>
                      ) : (
                        ""
                      )}

                      {week.extraPracticeProblem ? (
                        <>
                          <br />
                          <br />
                          Extra Practice:
                          <br />
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={week.extraPracticeProblem}
                          >
                            {week.extraPracticeName}
                          </a>
                        </>
                      ) : (
                        ""
                      )}

                     {(week.interviewHelp && week.interviewHelp.length) ? (
                        <>
                          Mock Interview Guides:
                          <br />
                        </>
                      ) : ""}

                      {(week.interviewHelp && week.interviewHelp.length) ?
                        week.interviewHelp.map((help, index) => (
                            <>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href={help.link}
                              >
                                {help.name}
                              </a>
                              {week.interviewHelp[index + 1] && <br />}
                            </>
                          ))
                        : ""}

                    </td>
                    <td class="center">
                      {week.homework}
                      {week.due && (
                        <>
                          <br />
                          <i>Due {week.due}</i>
                        </>
                      )}
                      <br />
                      {week.problems.length
                        ? week.problems.map((problem, index) => (
                            <>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href={problem.link}
                              >
                                {problem.name}
                              </a>
                              {week.problems[index + 1] && <br />}
                            </>
                          ))
                        : ""}
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Calendar />
      </Row>
    </div>
  );
};

export default Landing;
