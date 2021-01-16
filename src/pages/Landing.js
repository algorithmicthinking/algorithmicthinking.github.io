import React from "react";

import Navbar from "../components/Navbar";
import Team from "./Team";

import "../css/style.css";

const Landing = () => {
  return (
    <div data-spy="scroll" data-target="#navscroll">
      <Navbar />
      <div
        class="parallax-window"
        data-parallax="scroll"
        data-image-src="img/127background3.jpg"
        data-speed="0.1"
      >
        <div class="container">
          <div class="main-container">
            <div class="row">
              <h1>
                <b>Leetcode 101</b> | Introduction to Algorithmic Thinking
              </h1>
              <h2>Spring 2021</h2>
              <h1>Announcements</h1>
              <p>
                To enroll in the course, fill in the form{" "}
                <a target="_blank" href="https://forms.gle/Nco84WHHZ5Bkpsq27">
                  here
                </a>{" "}
                to receive an enrollment code.
              </p>
            </div>

            <div class="row">
              <a class="anchor" id="schedule"></a>
              <h2>Schedule</h2>
              <div class="table-responsive">
                <table class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th class="col-md-1 center">
                        <b>Week</b>
                      </th>
                      <th class="col-md-1">
                        <b>Date</b>
                      </th>
                      <th class="col-md-3">
                        <b>Lecture Topic</b>
                      </th>
                      <th class="col-md-2">
                        <b>Problems Covered</b>
                      </th>
                      <th class="col-md-3">
                        <b>Homework</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="wk0">
                    <tr>
                      <td rowspan="1" class="center">
                        0<br />
                      </td>
                      <td class="center">02/02 Tu</td>
                      <td>
                        Introduction, Recruiting Timeline, and Recruiting
                        Resources
                      </td>
                      <td></td>
                      <td rowspan="1" class="center">
                        Get a LeetCode Account
                        <br />
                        <i>Due 02/08 Mon</i>
                      </td>
                    </tr>
                  </tbody>
                  <tbody id="wk1">
                    <tr>
                      <td rowspan="2" class="center">
                        1<br />
                      </td>
                      <td class="center">02/09 Tu</td>
                      <td>
                        Behavioral Questions and Communicating Thought Process
                      </td>
                      <td>Big O, Space Complexity</td>
                      <td rowspan="2" class="center">
                        {/* <!-- Homework 1
            <br/><i>Due 02/15 Mon</i> --> */}
                      </td>
                    </tr>
                  </tbody>
                  <tbody id="wk2">
                    <tr>
                      <td rowspan="2" class="center">
                        2<br />
                      </td>
                      <td class="center">02/16 Tu</td>
                      <td>Arrays, Strings, and Dictionaries</td>
                      <td>
                        <a
                          target="_blank"
                          href="https://leetcode.com/problems/contains-duplicate/"
                        >
                          Contains Duplicate{" "}
                        </a>
                        <br />
                        <a
                          target="_blank"
                          href="https://leetcode.com/problems/rotate-string/ "
                        >
                          Rotate String{" "}
                        </a>
                      </td>
                      <td rowspan="2" class="center">
                        {/* <!-- Homework 2
            <br/><i>Due 02/22 Mon</i> --> */}
                      </td>
                    </tr>
                  </tbody>
                  <tbody id="wk3">
                    <tr>
                      <td rowspan="2" class="center">
                        3<br />
                      </td>
                      <td class="center">02/23 Tu</td>
                      <td>Linked Lists</td>
                      <td>
                        <a
                          target="_blank"
                          href="https://leetcode.com/problems/reverse-linked-list/ "
                        >
                          Reverse a linked list{" "}
                        </a>
                        <br />
                        <a
                          target="_blank"
                          href="https://leetcode.com/problems/merge-two-sorted-lists/ "
                        >
                          Merge 2 sorted lists{" "}
                        </a>
                        <br />
                        <a
                          target="_blank"
                          href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/  "
                        >
                          Remove nth node{" "}
                        </a>
                      </td>
                      <td rowspan="2" class="center">
                        {/* <!-- Homework 3
            <br/><i>Due 03/01 Mon</i> --> */}
                      </td>
                    </tr>
                  </tbody>
                  <tbody id="wk4">
                    <tr>
                      <td rowspan="2" class="center">
                        4<br />
                      </td>
                      <td class="center">03/02 Tu</td>
                      <td>Two Pointers and Binary Search</td>
                      <td></td>
                      <td rowspan="2" class="center">
                        {/* <!-- Homework 4
            <br/><i>Due 03/08 Mon</i> --> */}
                      </td>
                    </tr>
                  </tbody>
                  <tbody id="wk5">
                    <tr>
                      <td rowspan="2" class="center">
                        5<br />
                      </td>
                      <td class="center">03/09 Tu</td>
                      <td>Stacks, Heaps, and Queues</td>
                      <td>
                        <a
                          target="_blank"
                          href="https://leetcode.com/problems/kth-smallest-element-in-a-bst/ "
                        >
                          Kth smallest element in BST
                        </a>
                      </td>
                      <td rowspan="2" class="center">
                        {/* <!-- Homework 5
            <br/><i>Due 03/15 Mon</i> --> */}
                      </td>
                    </tr>
                  </tbody>
                  <tbody id="wk6">
                    <tr>
                      <td rowspan="2" class="center">
                        6<br />
                      </td>
                      <td class="center">03/16 Tu</td>
                      <td>Sliding WindOwO</td>
                      <td>
                        <a
                          target="_blank"
                          href="https://leetcode.com/problems/number-of-islands/"
                        >
                          Number of Islands
                        </a>
                      </td>
                      <td rowspan="2" class="center">
                        {/* <!-- Homework 6
            <br/><i>Due 03/29 Mon</i> --> */}
                      </td>
                    </tr>
                  </tbody>
                  <tbody id="wk7">
                    <tr>
                      <td rowspan="2" class="center">
                        7<br />
                      </td>
                      <td class="center">03/23 Tu</td>
                      <td>Spring Break</td>
                      <td></td>
                      <td rowspan="2" class="center">
                        No Homework! Enjoy your break.
                      </td>
                    </tr>
                  </tbody>
                  <tbody id="wk8">
                    <tr>
                      <td rowspan="2" class="center">
                        8<br />
                      </td>
                      <td class="center">03/30 Tu</td>
                      <td>Trees</td>
                      <td></td>
                      <td rowspan="2" class="center">
                        {/* <!-- Homework 7
    <br/><i>Due 04/05 Mon</i> --> */}
                      </td>
                    </tr>
                  </tbody>
                  <tbody id="wk9">
                    <tr>
                      <td rowspan="2" class="center">
                        9<br />
                      </td>
                      <td class="center">04/06 Tu</td>
                      <td>Graphs</td>
                      <td></td>
                      <td rowspan="2" class="center">
                        {/* <!-- Homework 7
            <br/><i>Due 04/12 Mon</i> --> */}
                      </td>
                    </tr>
                  </tbody>
                  <tbody id="wk10">
                    <tr>
                      <td rowspan="2" class="center">
                        10
                        <br />
                      </td>
                      <td class="center">04/13 Tu</td>
                      <td>Dynamic Programming</td>
                      <td></td>
                      <td rowspan="2" class="center">
                        {/* <!-- Homework 8
            <br/><i>Due 04/19 Mon</i> --> */}
                      </td>
                    </tr>
                  </tbody>
                  <tbody id="wk11">
                    <tr>
                      <td rowspan="2" class="center">
                        11
                        <br />
                      </td>
                      <td class="center">04/20 Tu</td>
                      <td>Object Oriented Programming</td>
                      <td></td>
                      <td rowspan="2" class="center">
                        {/* <!-- Homework 9
            <br/><i>Due 04/26 Mon</i> --> */}
                      </td>
                    </tr>
                  </tbody>
                  <tbody id="wk12">
                    <tr>
                      <td rowspan="2" class="center">
                        12
                        <br />
                      </td>
                      <td class="center">04/27 Tu</td>
                      <td>Guest Speaker: TBD</td>
                      <td></td>
                      <td rowspan="2" class="center">
                        {/* <!-- Homework 10
            <br/><i>Due 05/03 Mon</i> --> */}
                      </td>
                    </tr>
                  </tbody>
                  {/* <!-- <tbody id='wk13'>
      <tr>
        <td rowspan="2" class="center">
          13<br/>
        </td>
        <td class="center">
          05/04 Tu
        </td>
        <td>
          Guest Speaker Series: TBD
        </td> --> */}
                  <td></td>
                  <td rowspan="2" class="center"></td>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Team />
        <div class="row">
          <a class="anchor" id="resources"></a>
          <h2>Resources</h2>

          <p>
            Ask your questions on our class{" "}
            <a
              target="_blank"
              href="https://piazza.com/berkeley/spring2021/cs198112"
            >
              Piazza
            </a>
          </p>

          <h3>Lecture Slides</h3>
          <ul>
            <li>
              <a target="_blank" href="">
                Introduction
              </a>{" "}
            </li>
          </ul>
        </div>
        <div class="row">
          <a class="anchor" id="syllabus"></a>
          <h2>Syllabus</h2>
          <h3>Course Info</h3>
          <a class="anchor" id="courseInfo"></a>
          <ul>
            <li>
              <b>Course Title:</b> Introduction to Algorithmic Thinking
            </li>
            <li>
              <b>Units</b>: 2
            </li>
            <li>
              <b>Time</b>: Tuesdays, 5-6:30pm
            </li>
            <li>
              <b>Instructors</b>: Michael Jayasuriya and Kathy Wu
            </li>
            <li>
              <b>Faculty Sponsor</b>: Jelani Nelson
            </li>
            <li>
              <b>Course Catalog</b>:{" "}
              <a href="https://classes.berkeley.edu/content/2021-spring-compsci-198-112-grp-112">
                https://classes.berkeley.edu/content/2021-spring-compsci-198-112-grp-112
              </a>
            </li>
            <li>
              <b>Prerequisites:</b> CS 61A OR Data 8 OR Python programming
              experience
            </li>
          </ul>
          <h3>Course Description</h3>
          <p>
            Coding interviews often require a skill set that is not fully
            covered by the undergraduate CS curriculum. Rather than leave
            students to learn these skills on their own, Introduction to
            Algorithmic Thinking attempts to bridge the gap between traditional
            computer science coursework and the industry recruiting process.
            With mock interviews and practice problems curated by frequency,
            Introduction to Algorithmic Thinking provides a hands on and
            practical approach to learning how to code algorithms commonly seen
            in software engineering interviews.
          </p>
          <h3>Course Objectives</h3>
          <ol>
            <li>
              Become well-versed in common data structures and popular problem
              solving methods
            </li>
            <li>
              Develop algorithmic intuition that will help you approach new
              problems
            </li>
            <li>Learn how to communicate your thought process effectively</li>
            <li>
              Prepare students for the upcoming internship and full time SWE
              recruiting season
            </li>
          </ol>
          <p> </p>

          <h3>Homework</h3>
          <a class="anchor" id="homework"></a>
          <p>
            Weekly homework will be assigned and submitted on bCourses. For
            leetcode problems, this includes submitting screenshot verification
            that you have <i>attempted</i> the problem. Some homework
            assignments may have you answer a question with a short paragraph. 7
            out of 10 homeworks are required.
          </p>

          <p>
            The weekly homework assignments will be one of the important parts
            of this class. If you successfully work through and understand the
            solution to every problem, you will be ready for any coding
            interview. Only attempts are required to complete the homework and
            pass, because we encourage you to struggle with the problems for a
            bit before looking at the answer. We will host office hours (Time:
            TBD) so you get a chance to talk to us about the problems.
          </p>

          <h3>Grading Breakdown</h3>
          <a class="anchor" id="gradeBreak"></a>
          <ul>
            <li>Lecture Attendance: 20%</li>
            <li>Mock Interview Participation: 40% </li>
            <li>Homework Assignments: 40%</li>
          </ul>

          <h3>Grading Policy</h3>
          <p>
            <b>Attendance</b>: Three unexcused absences from our lecture are
            allowed. For a class to be excused, you must get advanced permission
            (just email us we’re nice!). Missing more than 3 unexcused classes
            will result in an automatic No Pass (NP). Please reach out to us if
            you have any questions or concerns.
          </p>
          <p>
            <b>Participation</b>: Participation enhances intuition, and we aim
            to build an algorithmic intuition so that if you were presented with
            any coding problem you could do it! As interviewing is an
            interpersonal skill, in-class participation is a major aspect of the
            course (especially in the mock interviews). Participation is
            demonstrated by engaging actively in your mock interview and lecture
            attendance. We will make you fill out feedback forms periodically
            about your mock interview partner to judge participation. As long as
            you participate in the breakout rooms, you’ll receive full points.
          </p>
          <p>
            <b>Homework</b>: Weekly homework will be assigned and submitted on
            bCourses. For leetcode problems, this includes submitting screenshot
            verification that you have ATTEMPTED the problem. Some homework
            assignments may have you answer a question with a short paragraph. 7
            out of 10 homeworks are required.
          </p>
          <p>
            The weekly homework assignments will be one of the important parts
            of this class. If you successfully work through and understand the
            solution to every problem, you will be ready for any coding
            interview. Only attempts are required to complete the homework and
            pass, because we encourage you to struggle with the problems for a
            bit before looking at the answer. We will host office hours (Time:
            TBD) so you get a chance to talk to us about the problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
