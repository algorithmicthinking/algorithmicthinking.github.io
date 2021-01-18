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
            <b>Leetcode 101</b> | Introduction to Algorithmic Thinking
          </h1>
          <h2>Spring 2021</h2>
          <h1>Announcements</h1>
          <p>
            Enrollment is now closed!
            Check back later as our site is still being updated.
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
                  <th>Problems Covered</th>
                  <th>Homework</th>
                </tr>
              </thead>

              {schedule.map((week, index) => (
                <tbody id={`wk${index}`}>
                  <tr>
                    <td class="center">{index}</td>
                    <td class="center">{week.date}</td>
                    <td>{week.topic}</td>
                    <td>
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
                    <td class="center">
                      {week.homework}
                      {week.due && (
                        <>
                          <br />
                          <i>Due {week.due}</i>
                        </>
                      )}
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
