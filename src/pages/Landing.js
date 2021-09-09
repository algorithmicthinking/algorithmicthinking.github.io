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
            <b style={{ color: "#ED9705" }}>CS 198-112</b> @{" "}
            <span style={{ color: "#008ECB" }}>UC Berkeley</span>
            <br />
            <b style={{ color: "#ED9705" }}>Leetcode 101</b> |{" "}
            <span style={{ color: "#008ECB" }}>
              Introduction to Algorithmic Thinking
            </span>
          </h1>
          <h2>Fall 2021</h2>
          <h2>Announcements</h2>
          <p>
            Feeling intimidated by all the FAANG interns on LinkedIn? Stressed
            by the recruiting process and not sure where to get good
            information? The Introduction to Algorithmic Thinking is the Decal
            for you!
            <br />
            <br />
            Coding interviews often require a skill set that is not fully
            covered by the undergraduate CS curriculum. Rather than leave
            students to learn these skills on their own, Introduction to
            Algorithmic Thinking attempts to bridge the gap between traditional
            computer science coursework and the industry recruiting process.
            With mock interviews and practice problems curated by frequency,
            Introduction to Algorithmic Thinking provides a hands-on and
            practical approach to learning how to code algorithms commonly seen
            in software engineering interviews.
            <br />
            <br />
            The decal will involve lectures, practice problems, mock interviews
            with peers, and some special speakers (JomaTech, Clément Mihailescu,
            and Jelani Nelson)!
            <br />
            <br />
            Our course staff has received offers from Google, Facebook,
            Salesforce, Amazon, DE Shaw, Intuit etc. and will hold office hours
            and be there to help you!
            <br />
            <br />
            If you're interested, enrollment is open on a first-come,
            first-serve basis (for 2 units). You can enroll on CalCentral with
            Class Number: 33506.
            <br />
            <br />
            <a
              href="https://classes.berkeley.edu/content/2021-fall-compsci-198-112-grp-112"
              target="_blank"
              rel="noreferrer"
            >
              https://classes.berkeley.edu/content/2021-fall-compsci-198-112-grp-112
            </a>
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
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={week.slides}
                          >
                            [Slides]
                          </a>
                        </>
                      ) : (
                        ""
                      )}
                      {week.video && week.slides ? " " : ""}
                      {week.video ? (
                        <>
                          <a target="_blank" rel="noreferrer" href={week.video}>
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

                      {week.interviewHelp && week.interviewHelp.length
                        ? week.interviewHelp.map((help, index) => (
                            <>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href={help.link}
                              >
                                {help.name}
                              </a>
                              {help.solution ? (
                                <>
                                  , <a href={help.solution}>Solution</a>
                                </>
                              ) : (
                                ""
                              )}
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
