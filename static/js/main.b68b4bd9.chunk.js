(this.webpackJsonpleetcode101=this.webpackJsonpleetcode101||[]).push([[0],{34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){"use strict";i.r(t);var o=i(0),n=i(1),s=i.n(n),a=i(14),r=i.n(a),c=(i(34),i(35),i(36),i(7)),l=i(15),d=i(9),m=i.p+"static/media/logo.0735e929.png",h=(i(37),i(13)),u={},b={body:"#000000",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)",link:"#007bff"},p=i(16);function j(){var e=Object(p.a)(["\n\n  html, body {\n    background: ",";\n    color: ",";\n    transition: all 0.25s linear;\n  }\n\n  .navbar {\n    background: ",";\n    transition: all 0.25s linear;\n    .navbar-brand {\n      color: ",";\n    }\n    .nav-link {\n      p {\n        color: ",";\n      }\n    }\n  }\n\n  .table {\n    td {\n      color: ",";\n    }\n  }\n\n  a {\n    color: ",";\n  }\n  "]);return j=function(){return e},e}var g=Object(h.b)(j(),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.link})),f=i.p+"static/media/moon.22fb56db.svg",y=i.p+"static/media/sun.33f43aba.svg";function w(){var e=Object(p.a)(["\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  justify-content: space-between;\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 0.5rem;\n  position: relative;\n  width: 5rem;\n  height: 3rem;\n\n  img {\n    height: auto;\n    width: 2.5rem;\n    transition: all 0.3s linear;\n\n    &:first-child {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n    }\n  }\n"]);return w=function(){return e},e}var k=h.c.button(w(),(function(e){return e.theme.gradient}),(function(e){return e.theme.toggleBorder}),(function(e){return e.lightTheme?"translateY(0)":"translateY(100px)"}),(function(e){return e.lightTheme?"translateY(-100px)":"translateY(0)"})),x=function(e){var t=e.theme,i=e.toggleTheme,n="light"===t;return Object(o.jsxs)(k,{lightTheme:n,onClick:i,children:[Object(o.jsx)("img",{src:y,style:{width:30,height:30},alt:"Sun"}),Object(o.jsx)("img",{src:f,style:{width:30,height:30},alt:"Moon"})]})},O=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),i=t[0],o=t[1],s=Object(n.useState)(!1),a=Object(c.a)(s,2),r=a[0],l=a[1],d=function(e){window.localStorage.setItem("theme",e),o(e)};return Object(n.useEffect)((function(){var e=window.localStorage.getItem("theme");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!e?d("dark"):e?o(e):d("light"),l(!0)}),[]),[i,function(){d("light"===i?"dark":"light")},r]},v=function(){var e=O(),t=Object(c.a)(e,3),i=t[0],n=t[1],s=t[2],a="light"===i?u:b;return s?Object(o.jsxs)(l.a,{expand:"lg",sticky:"top",className:"navbar",children:[Object(o.jsxs)(l.a.Brand,{href:"#home",children:[Object(o.jsx)("img",{src:m,alt:""}),Object(o.jsx)("strong",{style:{color:"#ED9705"},children:"Leetcode 101 DeCal"})]}),Object(o.jsx)(l.a.Toggle,{"aria-controls":"navbar-nav",style:{backgroundColor:"darkgrey"}}),Object(o.jsx)(l.a.Collapse,{id:"navbar-nav",children:Object(o.jsxs)(d.a,{className:"ml-auto",children:[Object(o.jsx)(d.a.Link,{href:"#schedule",children:Object(o.jsx)("p",{children:"Schedule"})}),Object(o.jsx)(d.a.Link,{href:"#staff",children:Object(o.jsx)("p",{children:"Staff"})}),Object(o.jsx)(d.a.Link,{href:"#syllabus",children:Object(o.jsx)("p",{children:"Syllabus"})}),Object(o.jsx)(d.a.Link,{target:"_blank",rel:"noreferrer",href:"https://oh.leetcode101.com",children:Object(o.jsx)("p",{children:"OH Queue"})}),Object(o.jsx)(d.a.Link,{target:"_blank",rel:"noreferrer",href:"https://piazza.com/berkeley/spring2021/cs198112",children:Object(o.jsx)("p",{children:"Piazza"})}),Object(o.jsx)(d.a.Link,{target:"_blank",rel:"noreferrer",href:"https://discord.gg/Ewyh3YJd8m",children:Object(o.jsx)("p",{children:"Discord"})}),Object(o.jsx)(d.a.Link,{href:"https://piazza.com/class/kj2f1d7eqg75ed?cid=62",children:Object(o.jsx)("p",{children:"Resources"})}),Object(o.jsx)("div",{className:"toggle",children:Object(o.jsx)(h.a,{theme:a,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(x,{theme:i,toggleTheme:n,className:"theme-button"})]})})})]})})]}):Object(o.jsx)("div",{})},S=[{date:"02/02 Tu",topic:"Introduction and a Brief Overview of the Interview Process",slides:"https://docs.google.com/presentation/d/1_y4kxhhoTWpjNr9CDmBoS1fuj5DwcWH_SKWitKxNHlc/edit?usp=sharing",video:"https://drive.google.com/file/d/1MbAQTcs3UPtHU1SkI2eaR_2BQS_1X0zI/view?usp=sharing",problems:[],sectionName:"",sectionProblem:"",homework:"Get a LeetCode Account",due:"02/08 Mon"},{date:"02/09 Tu",topic:"Basic Data Structures and Problem Solving",slides:"https://docs.google.com/presentation/d/1hP6Q7hT0zgqmuDwDAtDVEQslfIrOci6XqsLjsZRrnMs/edit?usp=sharing",video:"https://drive.google.com/file/d/1gGYYHDCI7mAPXDF1dPAffMicPaPvy6TH/view?usp=sharing",sectionName:"Valid anagram",sectionProblem:"https://leetcode.com/problems/valid-anagram/",sectionInfo:"https://drive.google.com/file/d/1tj6Lx6M3X-zhUT7ENWdL37qfKPd-U0hE/view?usp=sharing",problems:[{name:"Two Sum",link:"https://leetcode.com/problems/two-sum/"},{name:"Contains duplicate",link:"https://leetcode.com/problems/contains-duplicate/"},{name:"[Solution] Contains duplicate",link:"https://www.youtube.com/watch?v=u0EODaL6wQE&list=PLqscWxznaF7fjTcZ5nFj5oe7_bs6fMLzj"},{name:"Best time to buy and sell stock",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"},{name:"Merge Intervals",link:"https://leetcode.com/problems/merge-intervals/"},{name:"Product of array except self",link:"https://leetcode.com/problems/product-of-array-except-self/"},{name:"[Solution] Product of array except self",link:"https://www.youtube.com/watch?v=wNi-xFJ9pOk&list=PLqscWxznaF7fjTcZ5nFj5oe7_bs6fMLzj&index=4"},{name:"[Solution] Valid Anagram",link:"https://www.youtube.com/watch?v=9dEAZFF4CRc&list=PLqscWxznaF7fjTcZ5nFj5oe7_bs6fMLzj&index=2"}],homework:"Homework 2",due:"02/15 Mon"},{date:"02/16 Tu",topic:"Linked Lists",slides:"https://drive.google.com/file/d/14R6qUDgQVJ8j-DQoZRc2WvQqvb6kIyhb/view?usp=sharing",video:"https://drive.google.com/file/d/1l_Yt-S4r7xo0P_pxly2iQgu-aN8E4zZQ/view?usp=sharing",sectionName:"Add Two Numbers",sectionProblem:"https://leetcode.com/problems/add-two-numbers/",sectionInfo:"https://drive.google.com/file/d/15CcsKRmcWTTdJIlfMYRySVI-JBQn5b87/view?usp=sharing",extraPracticeName:"Merge K Sorted Lists",extraPracticeProblem:"https://leetcode.com/problems/merge-k-sorted-lists/",problems:[{name:"Reverse a Linked List",link:"https://leetcode.com/problems/reverse-linked-list/"},{name:"Reverse Linked List ii",link:"https://leetcode.com/problems/reverse-linked-list-ii/"},{name:"[Solution] Reverse Linked List ii",link:"https://www.youtube.com/watch?v=ZiZqqvqEnrs"},{name:"Flatten a multilevel linkedlist",link:"https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/"},{name:"[Solution] Flatten a multilevel linkedlist",link:"https://youtu.be/Ly1EEJWMLfk"},{name:"Remove nth node from end",link:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/"},{name:"[Solution] Remove nth node from end",link:"https://youtu.be/LC0y6w4amhg"},{name:"Merge 2 sorted lists",link:"https://leetcode.com/problems/merge-two-sorted-lists/"}],homework:"Homework 3",due:"02/22 Mon"},{date:"02/23 Tu",topic:"Binary Search Problems",slides:"https://docs.google.com/presentation/d/1sERfk11BGveocEtbrDBMHdiiYWmzcCLu4talOa4yMgw/edit?usp=sharing",video:"https://drive.google.com/file/d/1OUpHH2q1DL96tEE1bwyz7R54148C4uvJ/view?usp=sharing",sectionName:"Search 2D Matrix",sectionProblem:"https://leetcode.com/problems/search-a-2d-matrix/",sectionInfo:"https://drive.google.com/file/d/1bJyD0rroXIbxU1c05xswFMiJ3zj8-iqi/view?usp=sharing",extraPracticeName:"Kth Smallest Element in a Sorted Matrix",extraPracticeProblem:"https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",problems:[{name:"First & last pos in sorted arr",link:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"},{name:"[Solution] First & last pos in sorted arr",link:"https://youtu.be/0yktIGutogE"},{name:"Search Insert Position",link:"https://leetcode.com/problems/search-insert-position/"},{name:"[Solution] Search Insert Position",link:"https://youtu.be/SQfFsQbZUfs"},{name:"Search in rotated sorted arr",link:"https://leetcode.com/problems/search-in-rotated-sorted-array/"},{name:"[Solution] Search in rotated sorted arr",link:"https://youtu.be/19thO-YJcN4"},{name:"Random pick with weight",link:"https://leetcode.com/problems/random-pick-with-weight/"},{name:"[Solution] Random pick with weight",link:"https://youtu.be/7UY2XbFcW5A"},{name:"Find smallest divisor w/ threshold",link:"https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/"},{name:"[Solution] Find smallest divisor w/ threshold",link:"https://youtu.be/F50a7MiIkrE"}],homework:"Homework 4",due:"03/01 Mon"},{date:"03/02 Tu",topic:"Intermediate Data Structures: Stacks, Queues, and Heaps",slides:"https://drive.google.com/file/d/14ftsvFSxhOVJtO__Teu7089h_60AI5a-/view?usp=sharing",video:"https://drive.google.com/file/d/1t09nztm0nwN5rhWPWCDNdK-bo8_2FYA8/view?usp=sharing",sectionName:"Decode string",sectionProblem:"https://leetcode.com/problems/decode-string/",problems:[{name:"Valid Parentheses",link:"https://leetcode.com/problems/valid-parentheses/"},{name:"[Solution] Valid Parentheses",link:"https://youtu.be/8pI2EWjAXmM"},{name:"Minimum to Remove to Make Valid",link:"https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/"},{name:"K Closest Points to Origin",link:"https://leetcode.com/problems/k-closest-points-to-origin/"},{name:"LRU Cache",link:"https://leetcode.com/problems/lru-cache/"},{name:"Task Scheduler",link:"https://leetcode.com/problems/task-scheduler/"}],homework:"Homework 5",due:"03/08 Mon"},{date:"03/09 Tu",topic:"Object Oriented Programming",sectionName:"Design Browser History",slides:"https://docs.google.com/presentation/d/14jXtINZvp6KJp1d7fy6dM8WXBWDgMUDom9OiKThFvp0/edit?usp=sharing",video:"https://drive.google.com/file/d/1HXKAUA5W0MmrBJ6KsNGLHGK8vKR242KX/view?usp=sharing",sectionProblem:"https://leetcode.com/problems/design-browser-history/",problems:[{name:"Min Stack",link:"https://leetcode.com/problems/min-stack/"},{name:"[Solution] Min Stack",link:"https://www.youtube.com/watch?v=3dN1dwbufDg"},{name:"Design Underground Subway System",link:"https://leetcode.com/problems/design-underground-system/"},{name:"Design Underground Subway System",link:"https://www.youtube.com/watch?v=Vom-eJy6hWs"},{name:"Design Twitter",link:"https://leetcode.com/problems/design-twitter/"},{name:"Design Hashset",link:"https://leetcode.com/problems/design-hashset/"},{name:"Encode and Decode TinyURL",link:"https://leetcode.com/problems/encode-and-decode-tinyurl/"}],homework:"Homework 6",due:"03/15 Mon"},{date:"03/16 Tu",topic:"Two Pointers/Sliding Window",extra:"Mock Interview I",slides:"https://docs.google.com/presentation/d/1BcAKpGMKZWAqwx4uo1N7FUbtsSOPNZ2RAnKzCrL3Vp0",video:"https://drive.google.com/file/d/19LA3GX8YjfhSvWOR43dU7BcH-UTTbnoY/view?usp=sharing",sectionName:"Swapping Nodes in a Linked List",sectionProblem:"https://leetcode.com/problems/swapping-nodes-in-a-linked-list/",interviewHelp:[{name:"Problem 1",link:"https://docs.google.com/document/d/15tl8bdDm9IdipFOdXIsy7puLlo3VcoyCxN3wc-6tsIE/edit#",solution:"https://www.youtube.com/watch?v=KVMffdODBJI"},{name:"Problem 2",link:"https://docs.google.com/document/d/1oHgvt76_sAM6z5khjQyN7ek-iDupWHRytumF3jIcWbQ/edit?usp=sharing",solution:"https://www.youtube.com/watch?v=pObhgBa-lT4"},{name:"Example Mock Interview",link:"https://youtu.be/SxP6BeaG3cw"}],problems:[{name:"Longest Substring without Repeating Characters",link:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"},{name:"Maximum Points Obtain from Cards",link:"https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/"},{name:"Maximum Continuous Ones",link:"https://leetcode.com/problems/max-consecutive-ones-iii/"},{name:"Permutation in String",link:"https://leetcode.com/problems/permutation-in-string/"},{name:"Minimum Window Substring",link:"https://leetcode.com/problems/minimum-window-substring/"}],homework:"Homework 7",due:"03/29 Mon"},{date:"03/23 Tu",topic:"Spring Break",problems:[{name:"",link:""}],homework:"No Homework! Enjoy your break."},{date:"03/30 Tu",topic:"Trees",video:"https://drive.google.com/file/d/1t9usi7xu-Rj0nCgreyWkKr_aKNKJnPM6/view?usp=sharing",sectionName:"Symmetric Tree",sectionProblem:"https://leetcode.com/problems/symmetric-tree",slides:"https://docs.google.com/presentation/d/1_P8kT0YJf09k453nbZsxFQtyNSq4yPac8Wbxz4Pp_XA/edit?usp=sharing",problems:[{name:"Same Tree",link:"https://leetcode.com/problems/same-tree/"},{name:"Kth Smallest Element in a BST",link:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/"},{name:"Maximum Depth of a Binary Tree",link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"},{name:"Diameter of a Binary Tree",link:"https://leetcode.com/problems/diameter-of-binary-tree/"},{name:"Right Side Binary Tree",link:"https://leetcode.com/problems/binary-tree-right-side-view/"}],homework:"Homework 8",due:"04/06 Tuesday"},{date:"04/06 Tu",topic:"Graphs",sectionName:"Shortest Path in Binary Matrix",sectionProblem:"https://leetcode.com/problems/shortest-path-in-binary-matrix/",slides:"https://docs.google.com/presentation/d/1udRh1yzC4X5C_ukpvIhRUbLlNb3DfpZa5518nbAPUus/edit?usp=sharing",video:"https://drive.google.com/file/d/1lww0AKEkXcx8rcyIaEeinrcq80cCqSb6/view?usp=sharing",problems:[{name:"Course Schedule",link:"https://leetcode.com/problems/course-schedule/"},{name:"Word Search",link:"https://leetcode.com/problems/word-search/"},{name:"Number of Islands",link:"https://leetcode.com/problems/number-of-islands/"},{name:"Rotting Oranges",link:"https://leetcode.com/problems/rotting-oranges/"}],homework:"Homework 9",due:"04/12 Mon"},{date:"04/13 Tu",topic:"Dynamic Programming",sectionName:"House Robber",slides:"https://docs.google.com/presentation/d/10Uj8iKfvrzJU_XIunrJj987aH1GJz2fk1EE0eM7twI4/edit?usp=sharing",sectionProblem:"https://leetcode.com/problems/house-robber/",extraPracticeName:"Maximal Square",extraPracticeProblem:"https://leetcode.com/problems/maximal-square/",video:"https://drive.google.com/file/d/1Ssjq4evYSJRFm8iFnc7E9IU2cJIn6qI5/view?usp=sharing",problems:[{name:"Decode ways",link:"https://leetcode.com/problems/decode-ways/"},{name:"Maximum subarray sum",link:"https://leetcode.com/problems/maximum-subarray/"},{name:"Longest Palindromic Substring",link:"https://leetcode.com/problems/longest-palindromic-substring/"},{name:"Partition Equal Subset Sum",link:"https://leetcode.com/problems/partition-equal-subset-sum/"},{name:"Longest common subsequence",link:"https://leetcode.com/problems/longest-common-subsequence/"}],homework:"Homework 10",due:"04/19 Mon"},{date:"04/20 Tu",topic:"Greedy",slides:"https://docs.google.com/presentation/d/1nWLHCvRX7WVPfGzqb1LyrCRbTn7zHUocFYcITgc4nMc/edit?usp=sharing",sectionName:"Partition Labels",sectionProblem:"https://leetcode.com/problems/partition-labels/",video:"https://drive.google.com/file/d/1uqAnsUxiis_qTFAlAz7snbdcJUCpxuqD/view?usp=sharing",problems:[{name:"Gas Station",link:"https://leetcode.com/problems/gas-station/"},{name:"Task Scheduler",link:"https://leetcode.com/problems/task-scheduler/"},{name:"Boats to Save People",link:"https://leetcode.com/problems/boats-to-save-people/"}],homework:"Homework 11",due:"04/26 Mon"},{date:"04/27 Tu",topic:"Guest Speaker",extra:"Mock Interview II",video:"https://drive.google.com/file/d/14EBywAYYymYzCGbvboi2LMIGKlAW4y_V/view?usp=sharing",sectionName:"Check out AddisCoder",sectionProblem:"https://www.addiscoder.com/",problems:[]}],I=(i(46),function(){var e=O(),t=Object(c.a)(e,3),i=(t[0],t[1],t[2]);if(!i)return Object(o.jsx)("div",{});function n(e){return Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:e.iframe?e.iframe:""}})}return Object(o.jsx)(n,{iframe:'<div class="responsiveCal"><iframe\n            src="https://calendar.google.com/calendar/embed?src=c_9acra227ucphcf4eq6m7theu3o%40group.calendar.google.com&ctz=America%2FLos_Angeles "\n            style="border: 0" width="1080" height="800" frameBorder="0" scrolling="no">\n        </iframe></div>'})}),T=i(6),P=i(11),C=i(28),M=(i(47),function(){return Object(o.jsxs)("div",{className:"parallax-window landing","data-parallax":"scroll","data-image-src":"img/127background3.jpg","data-speed":"0.1",children:[Object(o.jsx)(T.a,{children:Object(o.jsxs)(P.a,{children:[Object(o.jsxs)("h1",{children:[Object(o.jsx)("b",{style:{color:"#ED9705"},children:"CS 198-112"})," @ ",Object(o.jsx)("span",{style:{color:"#008ECB"},children:"UC Berkeley"}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{style:{color:"#ED9705"},children:"Leetcode 101"})," |"," ",Object(o.jsx)("span",{style:{color:"#008ECB"},children:"Introduction to Algorithmic Thinking"})]}),Object(o.jsx)("h2",{children:"Spring 2021"}),Object(o.jsx)("h2",{children:"Announcements"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("a",{target:"_blank",href:"https://upe.berkeley.edu/",children:"UPE"})," made wonderful walkthrough videos for the mock interview problems! You can view them here:",Object(o.jsx)("br",{}),Object(o.jsx)("a",{target:"_blank",href:"https://www.youtube.com/watch?v=KVMffdODBJI",children:"[Maximum Consecutive Ones]"})," ",Object(o.jsx)("a",{target:"_blank",href:"https://www.youtube.com/watch?v=pObhgBa-lT4",children:"[Target Sum Walkthrough]"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"See (",Object(o.jsx)("a",{target:"_blank",href:"https://piazza.com/class/kj2f1d7eqg75ed?cid=62",children:"@62"}),") for recruiting and algorithm resources!"]})]})}),Object(o.jsx)(T.a,{children:Object(o.jsxs)(P.a,{children:[Object(o.jsx)("a",{class:"anchor",id:"schedule"}),Object(o.jsx)("h2",{children:"Schedule"}),Object(o.jsx)("div",{class:"table-responsive",children:Object(o.jsxs)(C.a,{bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Week"}),Object(o.jsx)("th",{children:"Date"}),Object(o.jsx)("th",{children:"Lecture Topic"}),Object(o.jsx)("th",{children:"Section"}),Object(o.jsx)("th",{children:"Homework"})]})}),S.map((function(e,t){return Object(o.jsx)("tbody",{id:"wk".concat(t),children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{class:"center",children:t}),Object(o.jsx)("td",{class:"center",children:e.date}),Object(o.jsxs)("td",{children:[e.topic,Object(o.jsx)("br",{}),e.extra?Object(o.jsxs)(o.Fragment,{children:[e.extra," ",Object(o.jsx)("br",{})," "]}):"",e.slides?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("a",{target:"_blank",href:e.slides,children:"[Slides]"})}):"",e.video&&e.slides?" ":"",e.video?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("a",{target:"_blank",href:e.video,children:"[Recording]"})}):""]}),Object(o.jsxs)("td",{children:[e.sectionName?Object(o.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.sectionProblem,children:e.sectionName}):"",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),e.sectionInfo?Object(o.jsxs)(o.Fragment,{children:["Resources:",Object(o.jsx)("br",{}),Object(o.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.sectionInfo,children:"[Ahan\u2019s Discussion Notes]"})]}):"",e.extraPracticeProblem?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Extra Practice:",Object(o.jsx)("br",{}),Object(o.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.extraPracticeProblem,children:e.extraPracticeName})]}):"",e.interviewHelp&&e.interviewHelp.length?Object(o.jsxs)(o.Fragment,{children:["Mock Interview Guides:",Object(o.jsx)("br",{})]}):"",e.interviewHelp&&e.interviewHelp.length?e.interviewHelp.map((function(t,i){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.link,children:t.name}),t.solution?Object(o.jsxs)(o.Fragment,{children:[", ",Object(o.jsx)("a",{href:t.solution,children:"Solution"})]}):"",e.interviewHelp[i+1]&&Object(o.jsx)("br",{})]})})):""]}),Object(o.jsxs)("td",{class:"center",children:[e.homework,e.due&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsxs)("i",{children:["Due ",e.due]})]}),Object(o.jsx)("br",{}),e.problems.length?e.problems.map((function(t,i){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.link,children:t.name}),e.problems[i+1]&&Object(o.jsx)("br",{})]})})):""]})]})})}))]})})]})}),Object(o.jsx)(T.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)(I,{})})]})}),_=i.p+"static/media/mike.3eb54249.jpeg",L=i.p+"static/media/kathy_wu.1b1a12dc.jpg",H=i.p+"static/media/ahan_sabharwal.5dd8bf3c.jpg",D=i.p+"static/media/karthik_balakrishnan.39f7ff68.jpg",A=i.p+"static/media/megan_zhu.161878fb.jpg",F=i.p+"static/media/david_zhu.1bc9181f.jpg",N=i.p+"static/media/kexin_shu.7fa64d66.jpg",E=i.p+"static/media/leo_kao.3ccbb07b.jpg",B=i.p+"static/media/ian_chang.1008dd13.jpg",z=i.p+"static/media/kevin_zhu.f9874913.png",R=i.p+"static/media/richard_zhu.d6b7c82b.jpg",W=i.p+"static/media/rahul_shah.6542ea3e.png",q=i.p+"static/media/samarth_goel.c27f5b66.jpg",K=i.p+"static/media/priyam_mohanty.34281ba0.png",J=i.p+"static/media/luke_liu.5cfd8592.jpg",U=i.p+"static/media/artem_tkachuk.1c1aab7e.jpeg",Y=i.p+"static/media/harris_shadmany.7629e98d.jpg",G=i.p+"static/media/julian_meyn.25f615d6.jpg",Z=i.p+"static/media/jessica_yu.5f027f35.jpg",Q=i.p+"static/media/samuel_lee.33087c8d.jpg",V="Web Development",X="HW + Mock interviews",$="Piazza",ee="Video walkthrough",te="Facilitator",ie=[{name:"Michael Jayasuriya",email:"mjayasur",bio:"Hi all! I\u2019m Michael, a third year CS/Premed student, and I\u2019m excited to be co-facilitating the first semester of this decal with Kathy! DM me on Discord or come to OH if you want to vent about toxicity in CS, chat about the Great British Baking Show, play TF2 with my little brother and I (my favorite class is the spy), discuss algorithms, or anything in between!",image:_,focus_area:te},{name:"Kathy Wu",email:"kathywu",bio:"Hey everyone! My name is Kathy, and I'm a 3rd year CS major from Saratoga, CA. I'm super excited to be co-facilitating the leetcode decal with Michael this semester. Outside of classes, my hobbies include baking, pet goldfish ownership, and going on unnecessarily long walks timed to the length of my spotify playlists. HMU to talk about anything!",image:L,focus_area:te}],oe=[{name:"Jessica Yu",email:"jessica.yu",bio:"Hey everyone! I\u2019m a third year from Fremont, CA and I\u2019m looking forward to TA for this very meta DeCal. While not grinding Leetcode or talking about grinding Leetcode, I enjoy cooking, apartment-friendly workouts, and rewatching The Good Place. Feel free to email me if you want to make a new friend!",image:Z,focus_area:"Logistics"},{name:"Kevin Zhu",email:"zhu502846",bio:"Hey everyone - I am a 3rd year from Chicago-ish and I'm super excited to help pilot this class! Outside of CS, some of my current hobbies include League, music, and indulging on nostalgic TV shows from the early 2000s/2010s. Feel free to talk to me about anything!",image:z,focus_area:"Lecturer"},{name:"Ahan Sabharwal",email:"ahan.sabharwal",bio:"Hi everyone! I\u2019m a junior studying Data Science and CS. In my free time, I really enjoy watching Formula 1 so feel free to come to office hours or message me on Discord to chat about it! Super excited to TA the course and help everyone with interview prep!",image:H,focus_area:"Discussion Leader"},{name:"Karthik Balakrishnan",email:"bkarthik",bio:"I could tell you about myself, but where's the fun in that? Stalk me online and see what you can find out about me!",image:D,focus_area:X},{name:"Megan Zhu",email:"meganzhu",bio:"Hey! My name is Megan and I'm a third year Computer Science and Econ double major from Toronto, Canada. In my free time, I like to eat, sleep, eat some more and binge watch tv shows for hours on end. Feel free to hit me up with any questions and I'll try my best!",image:A,focus_area:X},{name:"David Zhu",email:"zidongzhu",bio:"David is a junior studying Business and CS at Berkeley. Loves playing piano and telling bad jokes. Hmu for League or Anime anytime",image:F,focus_area:""},{name:"Kexin (Cassie) Shu",email:"kexinshu",bio:"My name is Kexin and I am a CS junior. I am TA-ing this class because I like solving LeetCode problems (even though some of them are tricky!). Let me know if you need any tips in hunting an internship, and I will try my best to help!",image:N,focus_area:X},{name:"Leo Kao",email:"leok",bio:"Hi! My name is Leo Kao and I\u2019m a third-year international student from Taiwan, majoring in Computer Science. In my free time, I enjoy traveling and visiting restaurants to seek good food. Feel free to reach out to me if you have any questions, or when you feel overwhelmed.  ",image:E,focus_area:V},{name:"Ian Chang",email:"iac",bio:"Hi everyone, I\u2019m Ian! I\u2019m a junior EECS major hailing from Santa Monica, CA. Love the beach, thrilling sports, and music (Rock, EDM, and Rap). Excited to help teach the usefulness of algorithms and data structures this semester!",image:B,focus_area:$},{name:"Richard Zhu",email:"rszhu",bio:"I want to help YOU pass interviews because if you don't, some Stanford kid will (yikes)",image:R,focus_area:$},{name:"Rahul Shah",email:"rsha256",bio:"Hi, I'm Rahul! I'm from Princeton NJ and am now a freshman declared as a Computer Science major in L&S. I love coding, developing software (peep my github, rsha256), and teaching. I also love pandas and am always free if you'd like advice about any of the CS intro series here at Cal :)",image:W,focus_area:V},{name:"Samarth Goel",email:"sgoel9",bio:"Hey everyone! My name's Samarth and I'm a sophomore from the Chicago suburbs studying CS and Business. In my free time I enjoy long walks in random directions, practicing guitar, and playing the drums in the Cal band. Feel free to talk to me about anything!",image:q,focus_area:V},{name:"Priyam Mohanty",email:"priyam.mohanty",bio:"Hey everyone, I'm a senior majoring in CS and Public Health. Happy to help with anything ranging from algorithms to recruiting help.",image:K,focus_area:ee},{name:"Luke Liu",email:"lukeliu",bio:"Hey! I am a sophomore majoring in CS & DS, and I am a proud Canadian from Toronto, Ontario. I am super passionate about teaching; please don\u2019t hesitate to reach out about absolutely anything, course related or not. I look forward to meeting you all!",image:J,focus_area:X},{name:"Artem Tkachuk",email:"aat",bio:"Hi! I'm an international junior student at Berkeley studying CS and Math. I am also the current lead of Berkeley's Google Developer Student Club. I want to pursue an academic career and do research in machine learning, but am also interested in all things involving business. In my free time I play musical instruments (mainly guitars and piano), travel, listen to music, read, ski, and swim! If you are a transfer student, come talk to me!",image:U,focus_area:V},{name:"Harris Shadmany",email:"harrisshadmany",bio:"Hello! I'm Harris and I'm a sophomore majoring in Computer Science & Statistics. Talk to me about: algorithms, recruiting (for quant finance), Taylor Swift, food, or Doctor Who. If you're a freshman or sophomore who feels like an impostor/inadequate among Berkeley's superstar CS community, really come talk to me - it feels like just yesterday I was in this position exactly and I'd like to help. ",image:Y,focus_area:$},{name:"Julian Meyn",email:"meyn",bio:"Hey! I'm a 2nd year CS major from SoCal. In my free time I enjoy listening to music, watching old movies, and playing league with the boys. I'm looking forward to meeting you all!",image:G,focus_area:V},{name:"Samuel Lee",email:"samatbryan",bio:"Hello~ I am a 4th year CS major from Korea/NJ. In my free time, I like to compete in programming competitions. Since this is a leetcode class, I'll post my leetcode handle here :) leetcode.com/BlackpinkLisa. If you also like Blackpink or compete in any contests, shoot me a message!",image:Q,focus_area:ee}],ne=function(){return Object(o.jsx)(T.a,{children:Object(o.jsxs)(P.a,{children:[Object(o.jsx)("a",{class:"anchor",id:"staff"}),Object(o.jsx)("h2",{children:"Course Staff"}),Object(o.jsx)("h3",{children:"DeCal Facilitators"}),Object(o.jsx)(T.a,{children:ie.map((function(e,t){return Object(o.jsxs)("div",{class:"col-md-6 my-4 staff-container",children:[Object(o.jsx)("img",{src:e.image,alt:e.name,class:"rounded-circle staff-image"}),Object(o.jsxs)("div",{class:"media-body staff-description",children:[Object(o.jsx)("h4",{class:"my-0 mt-2 font-weight-bold",style:{color:"#ED9705"},children:e.name}),Object(o.jsxs)("p",{class:"my-1",children:[e.email,"@"]}),Object(o.jsx)("p",{className:"my-1",style:{color:"#008ECB"},children:Object(o.jsx)("i",{children:e.focus_area})}),Object(o.jsx)("span",{class:"staff-bio",children:Object(o.jsx)("p",{class:"mt-2",children:e.bio})})]})]})}))}),Object(o.jsx)("h3",{children:"Teaching Assistants"}),Object(o.jsx)(T.a,{children:oe.map((function(e,t){return Object(o.jsxs)("div",{class:"col-12 col-sm-6 col-md-4 my-4 staff-container",children:[Object(o.jsx)("img",{src:e.image,alt:e.name,class:"rounded-circle staff-image"}),Object(o.jsxs)("div",{class:"media-body staff-description",children:[Object(o.jsx)("h4",{class:"my-0 mt-2 font-weight-bold",style:{color:"#ED9705"},children:e.name}),Object(o.jsxs)("p",{class:"my-1",children:[e.email,"@"]}),Object(o.jsx)("p",{className:"my-1",style:{color:"#008ECB"},children:Object(o.jsx)("i",{children:e.focus_area})}),Object(o.jsx)("span",{class:"staff-bio",children:Object(o.jsx)("p",{class:"mt-2",children:e.bio})})]})]})}))})]})})},se=(i(48),function(){return Object(o.jsx)(T.a,{className:"syllabus",children:Object(o.jsxs)(P.a,{children:[Object(o.jsx)("a",{class:"anchor",id:"syllabus"}),Object(o.jsx)("h2",{children:"Syllabus"}),Object(o.jsx)("h3",{children:"Course Info"}),Object(o.jsx)("a",{class:"anchor",id:"courseInfo"}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:"Course Title"}),": Introduction to Algorithmic Thinking"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:"Units"}),": 2"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:"Time"}),": Tuesdays, 5-6:30pm"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:"Instructors"}),": Michael Jayasuriya and Kathy Wu"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:"Faculty Sponsor"}),":"," ",Object(o.jsx)("a",{href:"https://people.eecs.berkeley.edu/~minilek/",children:"Jelani Nelson"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:"Course Catalog"}),":"," ",Object(o.jsx)("a",{href:"https://classes.berkeley.edu/content/2021-spring-compsci-198-112-grp-112",children:"https://classes.berkeley.edu/content/2021-spring-compsci-198-112-grp-112"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:"Prerequisites"}),": CS 61A OR Data 8 OR Python programming experience"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:"Textbooks and Course Materials: "}),"No course materials required, only a Leetcode account"]})]}),Object(o.jsx)("h3",{children:"Course Description"}),Object(o.jsx)("p",{children:"Coding interviews often require a skill set that is not fully covered by the undergraduate CS curriculum. Rather than leave students to learn these skills on their own, Introduction to Algorithmic Thinking attempts to bridge the gap between traditional computer science coursework and the industry recruiting process. With mock interviews and practice problems curated by frequency, Introduction to Algorithmic Thinking provides a hands on and practical approach to learning how to code algorithms commonly seen in software engineering interviews."}),Object(o.jsx)("h3",{children:"Course Format"}),Object(o.jsxs)("p",{children:["There are a few components to the course. The class time slot is 5:00-6:30pm, and the first 45 minutes are dedicated to a content lecture and the latter 45 minutes are dedicated to discussion, which is for collaborative problem solving with a partner.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("h5",{children:"Partners"}),"At the beginning of the class, you will fill out a form listing your preferences for matching with a partner. This partner will be your partner for discussion, and you will get to collaboratively work on problems with this partner every class during discussion. In addition, you will do your mock interviews with this partner. You are free to also collaborate on the homework with your partner."]}),Object(o.jsx)("br",{}),Object(o.jsxs)("li",{children:[Object(o.jsx)("h5",{children:"Content Lecture (Tues 5:00PM - 5:45PM)"}),"Every week we will be covering a specific pattern of algorithms that comes up in coding interviews. The content lecture will overview the topic and give the intuition to understanding the algorithms for that week. It will take place over zoom, and the zoom link will be sent out to every student along with being on the course website and piazza."]}),Object(o.jsx)("br",{}),Object(o.jsxs)("li",{children:[Object(o.jsx)("h5",{children:"Discussion (Tues 5:45PM - 6:30 PM)"}),"The latter 45 minutes of lecture are dedicated to collaborative problem solving with your partner. There are three discussion \u201csections\u201d, but they are both right after the lecture. Each discussion section will be headed by a member of course staff (TA). At the beginning of the semester, you and your partner will be assigned one of these discussion sections. You will attend the same section throughout the semester. The discussion is essential because it will build your interpersonal skills, as interviewing is an inherently collaborative activity. At the beginning of the semester, the discussion will be for working on problem solving collaboratively. The discussion section will begin with the TA presenting the problem, and then opening up breakout rooms for you to go into with your partner. In the last 15 minutes of discussion, you will go back into the main room and the TA will explain the solution to the problem."]}),Object(o.jsx)("br",{}),Object(o.jsxs)("li",{children:[Object(o.jsx)("h5",{children:"Office Hours"}),"Instructors will hold office hours after lecture from 6:30 - 7:30 PM. TA\u2019s will hold office hours on Mondays and Thursdays from 3:00-4:00 PM. TA office hours will have multiple TA\u2019s and an office hours queue similar to CS61A. Officer hours can be found ",Object(o.jsx)("a",{target:"_blank",href:"https://oh.leetcode101.com",children:"here"}),"."]})]})]}),Object(o.jsx)("h3",{children:"Course Objectives"}),Object(o.jsxs)("ol",{children:[Object(o.jsx)("li",{children:"Become well-versed in common data structures and popular problem solving methods"}),Object(o.jsx)("li",{children:"Develop algorithmic intuition that will help you approach new problems"}),Object(o.jsx)("li",{children:"Learn how to communicate your thought process effectively"}),Object(o.jsx)("li",{children:"Prepare students for the upcoming internship and full time SWE recruiting season"})]}),Object(o.jsx)("p",{children:" "}),Object(o.jsx)("h3",{children:"Grading Breakdown"}),Object(o.jsx)("a",{class:"anchor",id:"gradeBreak"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Breakout Room Participation: 40%"}),Object(o.jsx)("li",{children:"Homework Assignments: 30%"}),Object(o.jsx)("li",{children:"Mock Interview 1: 15%"}),Object(o.jsx)("li",{children:"Mock Interview 2: 15%"})]}),Object(o.jsx)("h3",{children:"Grading Policy"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Attendance (max 2 unexcused absences)"}),": TWO unexcused absences from our lecture and discussion are allowed. For a class to be excused, you MUST get advance permission (just"," ",Object(o.jsx)("a",{href:"mailto:leetcodedecal@gmail.com",children:"email us"})," we\u2019re nice!). Having more than 2 unexcused classes will result in an automatic No Pass (NP). Please reach out to us if you have any questions or concerns."]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Participation"}),": Participation enhances intuition, and we aim to build an algorithmic intuition so that if you were presented with any coding problem you could do it! As interviewing is an interpersonal skill, in-class participation is a major aspect of the course (especially in the mock interviews). Participation is demonstrated by engaging actively in your discussion and lecture attendance. We will make you fill out feedback forms periodically about your partner to judge participation. As long as you participate in the breakout rooms, you\u2019ll receive full points."]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Homework (8 out of 10 required)"}),": All the homework is released"," ",Object(o.jsx)("a",{href:"https://leetcode101.com",children:"on our website"})," and is due every Monday at 11:59 PM. Each homework is graded on effort and full credit will be given if the problem submission has been attempted. Your lowest two homework scores will be dropped. There are ten graded homework assignments over the course of the semester. The assignments consist of several leetcode problems that should be completed and submitted"," ",Object(o.jsx)("a",{href:"https://www.leetcode.com",children:"on the leetcode website"}),". To get credit for completing the problems, students will fill out a Gradescope assignment with their effort as well as a screenshot of each leetcode problem submission."]}),Object(o.jsx)("p",{children:"The weekly homework assignments will be one of the important parts of this class. If you successfully work through and understand the solution to every problem, you will be ready for any coding interview. Only attempts are required to complete the homework and pass, because we encourage you to struggle with the problems for a bit before looking at the answer. We will host office hours so you get a chance to talk to us about the problems."}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Mock Interviews"}),": There are two mock interviews that are graded on completion. There will be a form on gradescope to fill out after your mock interview to receive credit."]})]})})}),ae=function(){var e=O(),t=Object(c.a)(e,3),i=(t[0],t[1],t[2]);return i?Object(o.jsx)("div",{class:"container",children:Object(o.jsx)("p",{class:"text-center",children:Object(o.jsxs)("span",{class:"text-muted",children:["Website template taken with permission from the ",Object(o.jsx)("a",{href:"https://www.eecs16b.org/",children:"EECS16B"})," website."]})})}):Object(o.jsx)("div",{})};var re=function(){return Object(o.jsxs)("div",{className:"App",id:"home",children:[Object(o.jsx)(v,{}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(M,{}),Object(o.jsx)(ne,{}),Object(o.jsx)(se,{}),Object(o.jsx)(ae,{})]})]})},ce=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,52)).then((function(t){var i=t.getCLS,o=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;i(e),o(e),n(e),s(e),a(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(re,{})}),document.getElementById("root")),ce()}},[[49,1,2]]]);
//# sourceMappingURL=main.b68b4bd9.chunk.js.map