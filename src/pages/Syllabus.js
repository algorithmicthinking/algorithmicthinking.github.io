import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Syllabus = () => {
  return (
    <Row>
      <Col>
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
        Coding interviews often require a skill set that is not fully covered by the undergraduate CS curriculum. Rather than leave students to learn these skills on their own, Introduction to Algorithmic Thinking attempts to bridge the gap between traditional computer science coursework and the industry recruiting process. With mock interviews and practice problems curated by frequency, Introduction to Algorithmic Thinking provides a hands on and practical approach to learning how to code algorithms commonly seen in software engineering interviews.
        </p>
        <h3>Course Format</h3>
        <p>
          There are a few components to the course. The class time slot is 5:00-6:30pm, and the first 45 minutes are dedicated to a content lecture and the latter 45 minutes are dedicated to discussion, which is for collaborative problem solving with a partner.
          <ul>
            <li>
              <h5>Partners</h5>
              At the beginning of the class, you will fill out a form listing your preferences for matching with a partner. This partner will be your partner for discussion, and you will get to collaboratively work on problems with this partner every class during discussion. In addition, you will do your mock interviews with this partner. You are free to also collaborate on the homework with your partner. 
            </li>
            <li>
              Content Lecture (Tues 5:00PM - 5:45PM)
              Every week we will be covering a specific pattern of algorithms that comes up in coding interviews. The content lecture will overview the topic and give the intuition to understanding the algorithms for that week. It will take place over zoom, and the zoom link will be sent out to every student along with being on the course website and piazza.
            </li>
            <li>
              <h5>Discussion (Tues 5:45PM - 6:30 PM)</h5>
              The latter 45 minutes of lecture are dedicated to collaborative problem solving with your partner. There are three discussion “sections”, but they are both right after the lecture. 
              Each discussion section will be headed by a member of course staff (TA). At the beginning of the semester, you and your partner will be assigned one of these discussion sections. You will attend the same section throughout the semester. The discussion is essential because it will build your interpersonal skills, as interviewing is an inherently collaborative activity. 
              At the beginning of the semester, the discussion will be for working on problem solving collaboratively. The discussion section will begin with the TA presenting the problem, and then opening up breakout rooms for you to go into with your partner. In the last 15 minutes of discussion, you will go back into the main room and the TA will explain the solution to the problem.
            </li>
            <li>
              <h5>Office Hours</h5>
              Instructors will hold office hours after lecture from 6:30 - 7:30 PM. TA’s will hold office hours on Mondays and Thursdays from 3:00-4:00 PM. TA office hours will have multiple TA’s and an office hours queue similar to CS61A.
            </li>
          </ul>
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
        <a class="anchor" id="homework" />
        <p>
          Weekly homework will be assigned and submitted on bCourses. For
          leetcode problems, this includes submitting screenshot verification
          that you have <i>attempted</i> the problem. Some homework assignments
          may have you answer a question with a short paragraph. 7 out of 10
          homeworks are required.
        </p>

        <p>
          The weekly homework assignments will be one of the important parts of
          this class. If you successfully work through and understand the
          solution to every problem, you will be ready for any coding interview.
          Only attempts are required to complete the homework and pass, because
          we encourage you to struggle with the problems for a bit before
          looking at the answer. We will host office hours (Time: TBD) so you
          get a chance to talk to us about the problems.
        </p>

        <h3>Grading Breakdown</h3>
        <a class="anchor" id="gradeBreak" />
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
          <b>Participation</b>: Participation enhances intuition, and we aim to
          build an algorithmic intuition so that if you were presented with any
          coding problem you could do it! As interviewing is an interpersonal
          skill, in-class participation is a major aspect of the course
          (especially in the mock interviews). Participation is demonstrated by
          engaging actively in your mock interview and lecture attendance. We
          will make you fill out feedback forms periodically about your mock
          interview partner to judge participation. As long as you participate
          in the breakout rooms, you’ll receive full points.
        </p>
        <p>
          <b>Homework</b>: Weekly homework will be assigned and submitted on
          bCourses. For leetcode problems, this includes submitting screenshot
          verification that you have ATTEMPTED the problem. Some homework
          assignments may have you answer a question with a short paragraph. 7
          out of 10 homeworks are required.
        </p>
        <p>
          The weekly homework assignments will be one of the important parts of
          this class. If you successfully work through and understand the
          solution to every problem, you will be ready for any coding interview.
          Only attempts are required to complete the homework and pass, because
          we encourage you to struggle with the problems for a bit before
          looking at the answer. We will host office hours (Time: TBD) so you
          get a chance to talk to us about the problems.
        </p>
      </Col>
    </Row>
  );
};

export default Syllabus;
