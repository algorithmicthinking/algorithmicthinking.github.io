import React from "react";

const Landing = () => {
  return (
    <div>
      <div id="navscroll">
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-container">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a
                  class="navbar-brand"
                  href="."
                  style={{ color: "rgb(0, 0, 0)" }}
                >
                  <strong>Leetcode 101 DeCal</strong>
                </a>
              </div>
              <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav pull-right">
                  <li>
                    <a id="na1" href="#schedule">
                      Schedule
                    </a>
                  </li>
                  <li>
                    <a id="na5" href="#staff">
                      Staff
                    </a>
                  </li>
                  <li>
                    <a id="na6" href="#resources">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="#syllabus">Syllabus</a>
                  </li>
                  <li>
                    <a
                      id="na3"
                      target="_blank"
                      href="https://piazza.com/berkeley/spring2021/cs198112"
                    >
                      Piazza <i class="fas fa-external-link-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
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

        <a class="anchor" id="staff"></a>
        <h2>Course Staff</h2>
        <h3>DeCal Facilitators</h3>
        <div class="row">
          <div class=" col-md-6 my-4">
            <img
              src="headshots/this_is_fine.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Michael Jayasuriya</h4>
              <p class="my-1">mjayasur@</p>

              <span class="staff-bio">
                <p>Hi,</p>
              </span>
            </div>
          </div>

          <div class=" col-md-6 my-4">
            <img
              src="headshots/this_is_fine.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Kathy Wu</h4>
              <p class="my-1">kathywu@</p>

              <span class="staff-bio">
                <p>Hi!</p>
              </span>
            </div>
          </div>
        </div>

        <h3>TAs</h3>
        <div class="row">
          <div class=" col-md-6 my-4">
            <img
              src="headshots/ahan_sabharwal.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Ahan Sabharwal</h4>
              <p class="my-1">ahan.sabharwal@</p>

              <span class="staff-bio">
                <p>
                  Hi everyone! I’m a junior studying Data Science and CS. I’m
                  interested in systems, ML infra, and algorithms. Super excited
                  to TA the course and help everyone with interview prep!{" "}
                </p>
              </span>
            </div>
          </div>

          <div class=" col-md-6 my-4">
            <img
              src="headshots/michael_wang.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Michael Wang</h4>
              <p class="my-1">michaelwang23@</p>

              <span class="staff-bio">
                <p>
                  Hi, I'm Michael and I'm a 2nd year CS major. Looking forward
                  to a great semester!
                </p>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class=" col-md-6 my-4">
            <img
              src="headshots/ankit_agarwal.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Ankit Agarwal</h4>
              <p class="my-1">aagarwal_601@</p>

              <span class="staff-bio">
                <p>
                  Tech enthusiast interested in starting my own start-up. Hobby
                  mathematician and pianist :D{" "}
                </p>
              </span>
            </div>
          </div>

          <div class=" col-md-6 my-4">
            <img
              src="headshots/this_is_fine.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Megan Zhu</h4>
              <p class="my-1">@</p>

              <span class="staff-bio">
                <p></p>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class=" col-md-6 my-4">
            <img
              src="headshots/david_zhu.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">David Zhu</h4>
              <p class="my-1">zidongzhu@</p>

              <span class="staff-bio">
                <p>
                  I am a junior studying Business and CS at Berkeley. I love
                  playing piano and telling bad jokes. Hmu for League or Anime
                  anytime.{" "}
                </p>
              </span>
            </div>
          </div>

          <div class=" col-md-6 my-4">
            <img
              src="headshots/kexin_shu.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Kexin (Cassie) Shu</h4>
              <p class="my-1">kexinshu@</p>

              <span class="staff-bio">
                <p>
                  My name is Kexin and I am a CS junior. I am TA-ing this class
                  because I like solving LeetCode problems (even though some of
                  them are tricky!). Let me know if you need any tips in hunting
                  an internship, and I will try my best to help!
                </p>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class=" col-md-6 my-4">
            <img
              src="headshots/leo_kao.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Leo Kao</h4>
              <p class="my-1">leok@</p>

              <span class="staff-bio">
                <p>
                  Hi! My name is Leo Kao and I’m a third-year international
                  student from Taiwan, majoring in Computer Science. In my free
                  time, I enjoy traveling and visiting restaurants to seek good
                  food. Feel free to reach out to me if you have any questions,
                  or when you feel overwhelmed.{" "}
                </p>
              </span>
            </div>
          </div>

          <div class=" col-md-6 my-4">
            <img
              src="headshots/ian_chang.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Ian Chang</h4>
              <p class="my-1">iac@</p>

              <span class="staff-bio">
                <p>
                  Hi everyone, I’m Ian! I’m a junior EECS major hailing from
                  Santa Monica, CA. Love the beach, thrilling sports, and music
                  (Rock, EDM, and Rap). Excited to help teach the usefulness of
                  algorithms and data structures this semester!
                </p>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class=" col-md-6 my-4">
            <img
              src="headshots/kevin_zhu.png"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Kevin Zhu</h4>
              <p class="my-1">zhu502846@</p>

              <span class="staff-bio">
                <p>
                  Hey! I'm a 3rd year from Chicago-ish and I think algorithms
                  are pretty rad.
                </p>
              </span>
            </div>
          </div>

          <div class=" col-md-6 my-4">
            <img
              src="headshots/richard_zhu.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Richard Zhu</h4>
              <p class="my-1">rszhu@</p>

              <span class="staff-bio">
                <p>
                  I want to help YOU pass interviews because if you don't, some
                  Stanford kid will (yikes)
                </p>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class=" col-md-6 my-4">
            <img
              src="headshots/rahul_shah.png"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Rahul Shah</h4>
              <p class="my-1">rsha256@</p>

              <span class="staff-bio">
                <p>
                  Hi, I'm Rahul! I'm from Princeton NJ and am now a freshman
                  declared as a Computer Science major in L&S. I love coding,
                  developing software (peep my github, rsha256), and teaching. I
                  also love pandas and am always free if you'd like advice/help
                  about any of the CS intro series here at Cal :)
                </p>
              </span>
            </div>
          </div>

          <div class=" col-md-6 my-4">
            <img
              src="headshots/samarth_goel.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Samarth Goel</h4>
              <p class="my-1">sgoel9@</p>

              <span class="staff-bio">
                <p>
                  Hey everyone! My name's Samarth and I'm a sophomore studying
                  CS and Business. In my free time I enjoy long walks,
                  practicing guitar, and playing the drums in the Cal band.
                </p>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class=" col-md-6 my-4">
            <img
              src="headshots/this_is_fine.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Priyam Mohanty</h4>
              <p class="my-1">@</p>

              <span class="staff-bio">
                <p></p>
              </span>
            </div>
          </div>

          <div class=" col-md-6 my-4">
            <img
              src="headshots/luke_liu.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Luke Liu</h4>
              <p class="my-1">lukeliu@</p>

              <span class="staff-bio">
                <p>
                  Hey! I am a sophomore majoring in CS & DS, and I am a proud
                  Canadian from Toronto, Ontario. I am super passionate about
                  teaching; please don’t hesitate to reach out about absolutely
                  anything, course related or not. I look forward to meeting you
                  all!
                </p>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class=" col-md-6 my-4">
            <img
              src="headshots/artem_tkachuk.jpeg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Artem Tkachuk</h4>
              <p class="my-1">@</p>

              <span class="staff-bio">
                <p></p>
              </span>
            </div>
          </div>

          <div class=" col-md-6 my-4">
            <img
              src="headshots/harris_shadmany.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Harris Shadmany</h4>
              <p class="my-1">harrisshadmany@</p>

              <span class="staff-bio">
                <p>
                  Hello! I'm Harris and I'm a sophomore majoring in Computer
                  Science & Statistics. Talk to me about: algorithms, recruiting
                  (for quant finance), Taylor Swift, food, or Doctor Who. If
                  you're a freshman or sophomore who feels like an
                  impostor/inadequate among Berkeley's superstar CS community,
                  really come talk to me - it feels like just yesterday I was in
                  this position exactly and I'd like to help.{" "}
                </p>
              </span>
            </div>
          </div>
          <div class=" col-md-6 my-4">
            <img
              src="headshots/julian_meyn.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Julian Meyn</h4>
              <p class="my-1">meyn@</p>

              <span class="staff-bio">
                <p>
                  Hey! I'm a 2nd year CS major from SoCal. In my free time I
                  enjoy listening to music, watching old movies, and playing
                  league with the boys. I'm looking forward to meeting you all!
                </p>
              </span>
            </div>
          </div>
          <div class=" col-md-6 my-4">
            <img
              src="headshots/jessica_yu.jpg"
              class="mr-3 rounded-circle staff-image"
            ></img>
            <div class="media-body">
              <h4 class="my-0">Jessica Yu</h4>
              <p class="my-1">jessica.yu@</p>

              <span class="staff-bio">
                <p>I like to Leet</p>
              </span>
            </div>
          </div>
        </div>
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
