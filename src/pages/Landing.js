import React from "react";

import "../css/style.css";

const Landing = () => {
  return (
    <div
      class="parallax-window"
      data-parallax="scroll"
      data-image-src="img/127background3.jpg"
      data-speed="0.1"
    >
      <div class="row">
        <div class="col">
          <h1>
            <b>Leetcode 101</b> | Introduction to Algorithmic Thinking
          </h1>
          <h2>Spring 2021</h2>
          <h1>Announcements</h1>
          <p>
            To enroll in the course, fill in the form{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://forms.gle/Nco84WHHZ5Bkpsq27"
            >
              here
            </a>{" "}
            to receive an enrollment code.
          </p>
        </div>
      </div>

      <div class="row">
        <a class="anchor" id="schedule" />
        <div class="col">
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
                    Introduction, Recruiting Timeline, and Recruiting Resources
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
                      rel="noreferrer"
                      href="https://leetcode.com/problems/contains-duplicate/"
                    >
                      Contains Duplicate{" "}
                    </a>
                    <br />
                    <a
                      target="_blank"
                      rel="noreferrer"
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
                      rel="noreferrer"
                      href="https://leetcode.com/problems/reverse-linked-list/ "
                    >
                      Reverse a linked list{" "}
                    </a>
                    <br />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://leetcode.com/problems/merge-two-sorted-lists/ "
                    >
                      Merge 2 sorted lists{" "}
                    </a>
                    <br />
                    <a
                      target="_blank"
                      rel="noreferrer"
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
                      rel="noreferrer"
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
                      rel="noreferrer"
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
  );
};

export default Landing;
