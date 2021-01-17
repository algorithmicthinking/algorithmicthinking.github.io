(this.webpackJsonpleetcode101=this.webpackJsonpleetcode101||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(0),r=a.n(n),s=a(13),o=a.n(s),c=(a(34),a(35),a(36),a(14)),l=a(15),h=a(11),d=(a(37),a(12)),m={},u={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)"},j=a(16);function b(){var e=Object(j.a)(["\n  body {\n    background: ",";\n    color: ",";\n    transition: all 0.25s linear;\n  }\n\n  "]);return b=function(){return e},e}var p=Object(d.b)(b(),(function(e){return e.theme.body}),(function(e){return e.theme.text}));a.p;a.p;function g(){var e=Object(j.a)(["\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  justify-content: space-between;\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 0.5rem;\n  position: relative;\n  width: 5rem;\n  height: 3rem;\n\n  img {\n    height: auto;\n    width: 2.5rem;\n    transition: all 0.3s linear;\n    \n    &:first-child {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n    }\n  }\n"]);return g=function(){return e},e}var y=d.c.button(g(),(function(e){return e.theme.gradient}),(function(e){return e.theme.toggleBorder}),(function(e){return e.lightTheme?"translateY(0)":"translateY(100px)"}),(function(e){return e.lightTheme?"translateY(-100px)":"translateY(0)"})),f=function(e){var t=e.theme,a=e.toggleTheme,n="light"===t;return Object(i.jsxs)(y,{lightTheme:n,onClick:a,children:[Object(i.jsx)("img",{src:"https://image.flaticon.com/icons/svg/1164/1164954.svg",style:{width:30,height:30},alt:"Sun"}),Object(i.jsx)("img",{src:"https://image.flaticon.com/icons/svg/2033/2033921.svg",style:{width:30,height:30},alt:"Moon"})]})},x=function(){var e=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(!1),s=Object(c.a)(r,2),o=s[0],l=s[1],h=function(e){window.localStorage.setItem("theme",e),i(e)};return Object(n.useEffect)((function(){var e=window.localStorage.getItem("theme");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!e?h("dark"):e?i(e):h("light"),l(!0)}),[]),[a,function(){h("light"===a?"dark":"light")},o]}(),t=Object(c.a)(e,3),a=t[0],r=t[1],s=t[2],o="light"===a?m:u;return s?Object(i.jsxs)(l.a,{expand:"lg",sticky:"top",className:"navbar",children:[Object(i.jsx)(l.a.Brand,{href:"#home",children:Object(i.jsx)("strong",{children:"Leetcode 101 DeCal"})}),Object(i.jsx)(l.a.Toggle,{"aria-controls":"navbar-nav"}),Object(i.jsx)(l.a.Collapse,{id:"navbar-nav",children:Object(i.jsxs)(h.a,{className:"ml-auto",children:[Object(i.jsx)(h.a.Link,{href:"#schedule",children:"Schedule"}),Object(i.jsx)(h.a.Link,{href:"#staff",children:"Staff"}),Object(i.jsx)(h.a.Link,{href:"#syllabus",children:"Syllabus"}),Object(i.jsx)(h.a.Link,{target:"_blank",rel:"noreferrer",href:"https://piazza.com/berkeley/spring2021/cs198112",children:"Piazza"}),Object(i.jsx)(h.a.Link,{target:"_blank",rel:"noreferrer",href:"https://discord.gg/wXqGwjcD",children:"Discord"}),Object(i.jsx)(h.a.Link,{target:"_blank",rel:"noreferrer",href:"https://wiki.python.org/moin/TimeComplexity",children:"Reference"}),Object(i.jsxs)(d.a,{theme:o,children:[Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p,{}),Object(i.jsx)(f,{theme:a,toggleTheme:r})," "]})," "]})]})})]}):Object(i.jsx)("div",{})},O=[{date:"02/02 Tu",topic:"Introduction, Recruiting Timeline, and Recruiting Resources",problems:[],homework:"Get a LeetCode Account",due:"02/08 Mon"},{date:"02/09 Tu",topic:"Behavioral Questions and Communicating Thought Process",problems:[{name:"Big O, Space Complexity",link:""}]},{date:"02/16 Tu",topic:"Arrays, Strings, and Dictionaries",problems:[{name:"Contains Duplicate",link:"https://leetcode.com/problems/contains-duplicate/"},{name:"Rotate String",link:"https://leetcode.com/problems/rotate-string/"}]},{date:"02/23 Tu",topic:"Linked Lists",problems:[{name:"Reverse a linked list",link:"https://leetcode.com/problems/reverse-linked-list/"},{name:"Merge 2 sorted lists",link:"https://leetcode.com/problems/merge-two-sorted-lists/"},{name:"Remove nth node",link:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/"}]},{date:"03/02 Tu",topic:"Two Pointers and Binary Search",problems:[]},{date:"03/09 Tu",topic:"Stacks, Heaps, and Queues",problems:[{name:"Kth smallest element in BST",link:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/"}]},{date:"03/16 Tu",topic:"Sliding WindOwO",problems:[{name:"Number of Islands",link:"https://leetcode.com/problems/number-of-islands/"}]},{date:"03/23 Tu",topic:"Spring Break",problems:[]},{date:"03/30 Tu",topic:"Trees",problems:[]},{date:"04/06 Tu",topic:"Graphs",problems:[]},{date:"04/13 Tu",topic:"Dynamic Programming",problems:[]},{date:"04/20 Tu",topic:"Object Oriented Programming",problems:[]},{date:"04/27 Tu",topic:"Guest Speaker: TBD",problems:[]}],k=a(6),w=a(7),v=a(28),S=(a(46),function(){return Object(i.jsxs)("div",{className:"parallax-window landing","data-parallax":"scroll","data-image-src":"img/127background3.jpg","data-speed":"0.1",children:[Object(i.jsx)(k.a,{children:Object(i.jsxs)(w.a,{children:[Object(i.jsxs)("h1",{children:[Object(i.jsx)("b",{children:"Leetcode 101"})," | Introduction to Algorithmic Thinking"]}),Object(i.jsx)("h2",{children:"Spring 2021"}),Object(i.jsx)("h1",{children:"Announcements"}),Object(i.jsxs)("p",{children:["To enroll in the course, fill in the form"," ",Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://forms.gle/Nco84WHHZ5Bkpsq27",children:"here"})," ","to receive an enrollment code."]})]})}),Object(i.jsx)(k.a,{children:Object(i.jsxs)(w.a,{children:[Object(i.jsx)("a",{class:"anchor",id:"schedule"}),Object(i.jsx)("h2",{children:"Schedule"}),Object(i.jsx)("div",{class:"table-responsive",children:Object(i.jsxs)(v.a,{bordered:!0,hover:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Week"}),Object(i.jsx)("th",{children:"Date"}),Object(i.jsx)("th",{children:"Lecture Topic"}),Object(i.jsx)("th",{children:"Problems Covered"}),Object(i.jsx)("th",{children:"Homework"})]})}),O.map((function(e,t){return Object(i.jsx)("tbody",{id:"wk".concat(t),children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{class:"center",children:t}),Object(i.jsx)("td",{class:"center",children:e.date}),Object(i.jsx)("td",{children:e.topic}),Object(i.jsx)("td",{children:e.problems.length?e.problems.map((function(t,a){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.link,children:t.name}),e.problems[a+1]&&Object(i.jsx)("br",{})]})})):""}),Object(i.jsxs)("td",{class:"center",children:[e.homework,e.due&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("br",{}),Object(i.jsxs)("i",{children:["Due ",e.due]})]})]})]})})}))]})})]})})]})}),I=(a.p,a.p+"static/media/mike.3eb54249.jpeg"),T=a.p+"static/media/kathy_wu.587f9b7c.jpg",C=a.p+"static/media/ahan_sabharwal.0e62a40d.jpg",A=a.p+"static/media/michael_wang.ba6cf786.jpg",L=a.p+"static/media/ankit_agarwal.431aa02a.jpg",H=a.p+"static/media/megan_zhu.ff6b0dde.jpg",D=a.p+"static/media/david_zhu.1bc9181f.jpg",M=a.p+"static/media/kexin_shu.7fa64d66.jpg",_=a.p+"static/media/leo_kao.8afb810d.jpg",B=a.p+"static/media/ian_chang.0e13be32.jpg",P=a.p+"static/media/kevin_zhu.7f2b9115.png",z=a.p+"static/media/richard_zhu.1d4d661a.jpg",F=a.p+"static/media/rahul_shah.6542ea3e.png",q=a.p+"static/media/samarth_goel.1f529e75.jpg",R=a.p+"static/media/priyam_mohanty.c5a22411.png",W=a.p+"static/media/luke_liu.06f15f48.jpg",E=a.p+"static/media/artem_tkachuk.a981a585.jpeg",N=a.p+"static/media/harris_shadmany.001a6754.jpg",K=a.p+"static/media/julian_meyn.aa7d0489.jpg",G=a.p+"static/media/jessica_yu.5f027f35.jpg",J=[{name:"Michael Jayasuriya",email:"mjayasur",bio:"Hi all! I\u2019m Michael, a third year CS/Premed student, and I\u2019m excited to be co-facilitating the first semester of this decal with Kathy! DM me on Discord or come to OH if you want to vent about toxicity in CS, chat about the Great British Baking Show, play TF2 with my little brother and I (my favorite class is the spy), discuss algorithms, or anything in between!",image:I},{name:"Kathy Wu",email:"kathywu",bio:"Hi! My name is Kathy and I'm a 3rd year CS major from Saratoga, CA. I like algorithms and cats :)",image:T}],Y=[{name:"Ahan Sabharwal",email:"ahan.sabharwal",bio:"Hi everyone! I\u2019m a junior studying Data Science and CS. I\u2019m interested in systems, ML infra, and algorithms. Super excited to TA the course and help everyone with interview prep!",image:C},{name:"Michael Wang",email:"michaelwang23",bio:"Hi, I'm Michael and I'm a 2nd year CS major. Looking forward to a great semester!",image:A},{name:"Ankit Agarwal",email:"aagarwal_601",bio:"Tech enthusiast interested in starting my own start-up. Hobby mathematician and pianist :D",image:L},{name:"Megan Zhu",email:"meganzhu",bio:"Hey! My name is Megan and I'm a third year Computer Science and Econ double major from Toronto, Canada. In my free time, I like to eat, sleep, eat some more and binge watch tv shows for hours on end. Feel free to hit me up with any questions and I'll try my best!",image:H},{name:"David Zhu",email:"zidongzhu",bio:"David is a junior studying Business and CS at Berkeley. Loves playing piano and telling bad jokes. Hmu for League or Anime anytime",image:D},{name:"Kexin (Cassie) Shu",email:"kexinshu",bio:"My name is Kexin and I am a CS junior. I am TA-ing this class because I like solving LeetCode problems (even though some of them are tricky!). Let me know if you need any tips in hunting an internship, and I will try my best to help!",image:M},{name:"Leo Kao",email:"leok",bio:"Hi! My name is Leo Kao and I\u2019m a third-year international student from Taiwan, majoring in Computer Science. In my free time, I enjoy traveling and visiting restaurants to seek good food. Feel free to reach out to me if you have any questions, or when you feel overwhelmed.  ",image:_},{name:"Ian Chang",email:"iac",bio:"Hi everyone, I\u2019m Ian! I\u2019m a junior EECS major hailing from Santa Monica, CA. Love the beach, thrilling sports, and music (Rock, EDM, and Rap). Excited to help teach the usefulness of algorithms and data structures this semester!",image:B},{name:"Kevin Zhu",email:"zhu502846",bio:"Hey! I'm a 3rd year from Chicago-ish and I think algorithms are pretty rad.",image:P},{name:"Richard Zhu",email:"rszhu",bio:"I want to help YOU pass interviews because if you don't, some Stanford kid will (yikes)",image:z},{name:"Rahul Shah",email:"rsha256",bio:"Hi, I'm Rahul! I'm from Princeton NJ and am now a freshman declared as a Computer Science major in L&S. I love coding, developing software (peep my github, rsha256), and teaching. I also love pandas and am always free if you'd like advice about any of the CS intro series here at Cal :)",image:F},{name:"Samarth Goel",email:"sgoel9",bio:"Hey everyone! My name's Samarth and I'm a sophomore studying CS and Business. In my free time I enjoy long walks, practicing guitar, and playing the drums in the Cal band.",image:q},{name:"Priyam Mohanty",email:"priyam.mohanty",bio:"Hey everyone, I'm a senior majoring in CS and Public Health. Happy to help with anything ranging from algorithms to recruiting help.",image:R},{name:"Luke Liu",email:"lukeliu",bio:"Hey! I am a sophomore majoring in CS & DS, and I am a proud Canadian from Toronto, Ontario. I am super passionate about teaching; please don\u2019t hesitate to reach out about absolutely anything, course related or not. I look forward to meeting you all!",image:W},{name:"Artem Tkachuk",email:"atkachuk",bio:"Artem is an international junior student at UC Berkeley studying Computer Science and Mathematics. He is the current lead of Berkeley's Google Developer Student Club. Artem wants to pursue an academic career and do research in machine learning, but he is also interested in all things involving business.",image:E},{name:"Harris Shadmany",email:"harrisshadmany",bio:"Hello! I'm Harris and I'm a sophomore majoring in Computer Science & Statistics. Talk to me about: algorithms, recruiting (for quant finance), Taylor Swift, food, or Doctor Who. If you're a freshman or sophomore who feels like an impostor/inadequate among Berkeley's superstar CS community, really come talk to me - it feels like just yesterday I was in this position exactly and I'd like to help. ",image:N},{name:"Julian Meyn",email:"meyn",bio:"Hey! I'm a 2nd year CS major from SoCal. In my free time I enjoy listening to music, watching old movies, and playing league with the boys. I'm looking forward to meeting you all!",image:K},{name:"Jessica Yu",email:"jessica.yu",bio:"I like to Leet",image:G}],Z=function(){return Object(i.jsx)(k.a,{children:Object(i.jsxs)(w.a,{children:[Object(i.jsx)("a",{class:"anchor",id:"staff"}),Object(i.jsx)("h2",{children:"Course Staff"}),Object(i.jsx)("h3",{children:"DeCal Facilitators"}),Object(i.jsx)(k.a,{children:J.map((function(e,t){return Object(i.jsxs)("div",{class:" col-md-6 my-4",children:[Object(i.jsx)("img",{src:e.image,alt:e.name,class:"mr-3 rounded-circle staff-image"}),Object(i.jsxs)("div",{class:"media-body",children:[Object(i.jsx)("h4",{class:"my-0",children:e.name}),Object(i.jsxs)("p",{class:"my-1",children:[e.email,"@"]}),Object(i.jsx)("span",{class:"staff-bio",children:Object(i.jsx)("p",{children:e.bio})})]})]})}))}),Object(i.jsx)("h3",{children:"TAs"}),Object(i.jsx)(k.a,{children:Y.map((function(e,t){return Object(i.jsxs)("div",{class:"col-md-6 my-4",children:[Object(i.jsx)("img",{src:e.image,alt:e.name,class:"mr-3 rounded-circle staff-image"}),Object(i.jsxs)("div",{class:"media-body",children:[Object(i.jsx)("h4",{class:"my-0",children:e.name}),Object(i.jsxs)("p",{class:"my-1",children:[e.email,"@"]}),Object(i.jsx)("span",{class:"staff-bio",children:Object(i.jsx)("p",{children:e.bio})})]})]})}))})]})})},U=function(){return Object(i.jsx)(k.a,{children:Object(i.jsxs)(w.a,{children:[Object(i.jsx)("a",{class:"anchor",id:"resources"}),Object(i.jsx)("h2",{children:"Resources"}),Object(i.jsxs)("p",{children:["Ask your questions on our class"," ",Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://piazza.com/berkeley/spring2021/cs198112",children:"Piazza"}),"."]}),Object(i.jsx)("h3",{children:"Lecture Slides"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:".",children:"Introduction"})})})]})})},Q=function(){return Object(i.jsx)(k.a,{children:Object(i.jsxs)(w.a,{children:[Object(i.jsx)("a",{class:"anchor",id:"syllabus"}),Object(i.jsx)("h2",{children:"Syllabus"}),Object(i.jsx)("h3",{children:"Course Info"}),Object(i.jsx)("a",{class:"anchor",id:"courseInfo"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Course Title:"})," Introduction to Algorithmic Thinking"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Units"}),": 2"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Time"}),": Tuesdays, 5-6:30pm"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Instructors"}),": Michael Jayasuriya and Kathy Wu"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Faculty Sponsor"}),": Jelani Nelson"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Course Catalog"}),":"," ",Object(i.jsx)("a",{href:"https://classes.berkeley.edu/content/2021-spring-compsci-198-112-grp-112",children:"https://classes.berkeley.edu/content/2021-spring-compsci-198-112-grp-112"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Prerequisites:"})," CS 61A OR Data 8 OR Python programming experience"]})]}),Object(i.jsx)("h3",{children:"Course Description"}),Object(i.jsx)("p",{children:"Coding interviews often require a skill set that is not fully covered by the undergraduate CS curriculum. Rather than leave students to learn these skills on their own, Introduction to Algorithmic Thinking attempts to bridge the gap between traditional computer science coursework and the industry recruiting process. With mock interviews and practice problems curated by frequency, Introduction to Algorithmic Thinking provides a hands on and practical approach to learning how to code algorithms commonly seen in software engineering interviews."}),Object(i.jsx)("h3",{children:"Course Objectives"}),Object(i.jsxs)("ol",{children:[Object(i.jsx)("li",{children:"Become well-versed in common data structures and popular problem solving methods"}),Object(i.jsx)("li",{children:"Develop algorithmic intuition that will help you approach new problems"}),Object(i.jsx)("li",{children:"Learn how to communicate your thought process effectively"}),Object(i.jsx)("li",{children:"Prepare students for the upcoming internship and full time SWE recruiting season"})]}),Object(i.jsx)("p",{children:" "}),Object(i.jsx)("h3",{children:"Homework"}),Object(i.jsx)("a",{class:"anchor",id:"homework"}),Object(i.jsxs)("p",{children:["Weekly homework will be assigned and submitted on bCourses. For leetcode problems, this includes submitting screenshot verification that you have ",Object(i.jsx)("i",{children:"attempted"})," the problem. Some homework assignments may have you answer a question with a short paragraph. 7 out of 10 homeworks are required."]}),Object(i.jsx)("p",{children:"The weekly homework assignments will be one of the important parts of this class. If you successfully work through and understand the solution to every problem, you will be ready for any coding interview. Only attempts are required to complete the homework and pass, because we encourage you to struggle with the problems for a bit before looking at the answer. We will host office hours (Time: TBD) so you get a chance to talk to us about the problems."}),Object(i.jsx)("h3",{children:"Grading Breakdown"}),Object(i.jsx)("a",{class:"anchor",id:"gradeBreak"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Lecture Attendance: 20%"}),Object(i.jsx)("li",{children:"Mock Interview Participation: 40% "}),Object(i.jsx)("li",{children:"Homework Assignments: 40%"})]}),Object(i.jsx)("h3",{children:"Grading Policy"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Attendance"}),": Three unexcused absences from our lecture are allowed. For a class to be excused, you must get advanced permission (just email us we\u2019re nice!). Missing more than 3 unexcused classes will result in an automatic No Pass (NP). Please reach out to us if you have any questions or concerns."]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Participation"}),": Participation enhances intuition, and we aim to build an algorithmic intuition so that if you were presented with any coding problem you could do it! As interviewing is an interpersonal skill, in-class participation is a major aspect of the course (especially in the mock interviews). Participation is demonstrated by engaging actively in your mock interview and lecture attendance. We will make you fill out feedback forms periodically about your mock interview partner to judge participation. As long as you participate in the breakout rooms, you\u2019ll receive full points."]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Homework"}),": Weekly homework will be assigned and submitted on bCourses. For leetcode problems, this includes submitting screenshot verification that you have ATTEMPTED the problem. Some homework assignments may have you answer a question with a short paragraph. 7 out of 10 homeworks are required."]}),Object(i.jsx)("p",{children:"The weekly homework assignments will be one of the important parts of this class. If you successfully work through and understand the solution to every problem, you will be ready for any coding interview. Only attempts are required to complete the homework and pass, because we encourage you to struggle with the problems for a bit before looking at the answer. We will host office hours (Time: TBD) so you get a chance to talk to us about the problems."})]})})};var X=function(){return Object(i.jsxs)("div",{className:"App",id:"home",children:[Object(i.jsx)(x,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(S,{}),Object(i.jsx)(Z,{}),Object(i.jsx)(U,{}),Object(i.jsx)(Q,{})]})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),r(e),s(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(X,{})}),document.getElementById("root")),V()}},[[47,1,2]]]);
//# sourceMappingURL=main.58b0887c.chunk.js.map