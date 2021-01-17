import React from "react";

const Syllabus = () => {
  return (
    <div class="row">
      <div class="col">
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
          Coding interviews often require a skill set that is not fully covered
          by the undergraduate CS curriculum. Rather than leave students to
          learn these skills on their own, Introduction to Algorithmic Thinking
          attempts to bridge the gap between traditional computer science
          coursework and the industry recruiting process. With mock interviews
          and practice problems curated by frequency, Introduction to
          Algorithmic Thinking provides a hands on and practical approach to
          learning how to code algorithms commonly seen in software engineering
          interviews.
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
      </div>
    </div>
  );
};

export default Syllabus;
