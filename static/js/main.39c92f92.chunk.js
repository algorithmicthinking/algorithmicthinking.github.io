(this.webpackJsonpleetcode101=this.webpackJsonpleetcode101||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),s=n.n(i),r=n(14),o=n.n(r),c=(n(35),n(36),n(37),n(8)),l=n(15),h=n(13),d=n.p+"static/media/logo.0735e929.png",m=(n(38),n(10)),u={},b={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)"},j=n(16);function p(){var e=Object(j.a)(["\n\n  html, body {\n    background: ",";\n    color: ",";\n    transition: all 0.25s linear;\n  }\n\n  .navbar {\n    background: ",";\n    transition: all 0.25s linear;\n    .navbar-brand {\n      color: ",";\n    }\n    .nav-link {\n      p {\n        color: ",";\n      }\n    }\n  }\n\n  .table {\n    th {\n      color: ",";\n    }\n    td {\n      color: ",";\n    }\n  }\n  "]);return p=function(){return e},e}var g=Object(m.b)(p(),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text}));n.p;n.p;function y(){var e=Object(j.a)(["\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  justify-content: space-between;\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 0.5rem;\n  position: relative;\n  width: 5rem;\n  height: 3rem;\n\n  img {\n    height: auto;\n    width: 2.5rem;\n    transition: all 0.3s linear;\n    \n    &:first-child {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n    }\n  }\n"]);return y=function(){return e},e}var f=m.c.button(y(),(function(e){return e.theme.gradient}),(function(e){return e.theme.toggleBorder}),(function(e){return e.lightTheme?"translateY(0)":"translateY(100px)"}),(function(e){return e.lightTheme?"translateY(-100px)":"translateY(0)"})),x=function(e){var t=e.theme,n=e.toggleTheme,i="light"===t;return Object(a.jsxs)(f,{lightTheme:i,onClick:n,children:[Object(a.jsx)("img",{src:"https://assets.leetcode.com/static_assets/public/icons/favicon-192x192.png",style:{width:30,height:30},alt:"Sun"}),Object(a.jsx)("img",{src:"https://assets.leetcode.com/static_assets/public/icons/apple-touch-icon-180x180.png",style:{width:30,height:30},alt:"Moon"})]})},O=function(){var e=Object(i.useState)("light"),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(!1),r=Object(c.a)(s,2),o=r[0],l=r[1],h=function(e){window.localStorage.setItem("theme",e),a(e)};return Object(i.useEffect)((function(){var e=window.localStorage.getItem("theme");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!e?h("dark"):e?a(e):h("light"),l(!0)}),[]),[n,function(){h("light"===n?"dark":"light")},o]},k=function(){var e=O(),t=Object(c.a)(e,3),n=t[0],i=t[1],s=t[2],r="light"===n?u:b;return s?Object(a.jsxs)(l.a,{expand:"lg",sticky:"top",className:"navbar",children:[Object(a.jsxs)(l.a.Brand,{href:"#home",children:[Object(a.jsx)("img",{src:d,alt:""}),Object(a.jsx)("strong",{children:"Leetcode 101 DeCal"})]}),Object(a.jsx)(l.a.Toggle,{"aria-controls":"navbar-nav"}),Object(a.jsx)(l.a.Collapse,{id:"navbar-nav",children:Object(a.jsxs)(h.a,{className:"ml-auto",children:[Object(a.jsx)(h.a.Link,{href:"#schedule",children:Object(a.jsx)("p",{children:"Schedule"})}),Object(a.jsx)(h.a.Link,{href:"#staff",children:Object(a.jsx)("p",{children:"Staff"})}),Object(a.jsx)(h.a.Link,{href:"#syllabus",children:Object(a.jsx)("p",{children:"Syllabus"})}),Object(a.jsx)(h.a.Link,{target:"_blank",rel:"noreferrer",href:"https://piazza.com/berkeley/spring2021/cs198112",children:Object(a.jsx)("p",{children:"Piazza"})}),Object(a.jsx)(h.a.Link,{target:"_blank",rel:"noreferrer",href:"https://discord.gg/wXqGwjcD",children:Object(a.jsx)("p",{children:"Discord"})}),Object(a.jsx)(h.a.Link,{target:"_blank",rel:"noreferrer",href:"https://wiki.python.org/moin/TimeComplexity",children:Object(a.jsx)("p",{children:"Reference"})}),Object(a.jsx)("div",{className:"toggle",children:Object(a.jsx)(m.a,{theme:r,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{}),Object(a.jsx)(x,{theme:n,toggleTheme:i,className:"theme-button"})]})})})]})})]}):Object(a.jsx)("div",{})},w=[{date:"02/02 Tu",topic:"Introduction, Recruiting Timeline, and Recruiting Resources",problems:[],homework:"Get a LeetCode Account",due:"02/08 Mon"},{date:"02/09 Tu",topic:"Behavioral Questions and Communicating Thought Process",problems:[{name:"Big O, Space Complexity",link:""}]},{date:"02/16 Tu",topic:"Arrays, Strings, and Dictionaries",problems:[{name:"Contains Duplicate",link:"https://leetcode.com/problems/contains-duplicate/"},{name:"Rotate String",link:"https://leetcode.com/problems/rotate-string/"}]},{date:"02/23 Tu",topic:"Linked Lists",problems:[{name:"Reverse a linked list",link:"https://leetcode.com/problems/reverse-linked-list/"},{name:"Merge 2 sorted lists",link:"https://leetcode.com/problems/merge-two-sorted-lists/"},{name:"Remove nth node",link:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/"}]},{date:"03/02 Tu",topic:"Two Pointers and Binary Search",problems:[]},{date:"03/09 Tu",topic:"Stacks, Heaps, and Queues",problems:[{name:"Kth smallest element in BST",link:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/"}]},{date:"03/16 Tu",topic:"Sliding WindOwO",problems:[{name:"Number of Islands",link:"https://leetcode.com/problems/number-of-islands/"}]},{date:"03/23 Tu",topic:"Spring Break",problems:[]},{date:"03/30 Tu",topic:"Trees",problems:[]},{date:"04/06 Tu",topic:"Graphs",problems:[]},{date:"04/13 Tu",topic:"Dynamic Programming",problems:[]},{date:"04/20 Tu",topic:"Object Oriented Programming",problems:[]},{date:"04/27 Tu",topic:"Guest Speaker: TBD",problems:[]}],v=function(){var e=O(),t=Object(c.a)(e,3),n=(t[0],t[1],t[2]);if(!n)return Object(a.jsx)("div",{});function i(e){return Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:e.iframe?e.iframe:""}})}return Object(a.jsx)(i,{iframe:'<iframe\n            src="https://calendar.google.com/calendar/embed?src=c_9acra227ucphcf4eq6m7theu3o%40group.calendar.google.com&ctz=America%2FLos_Angeles "\n            style="border: 0" width="1080" height="800" frameBorder="0" scrolling="no">\n        </iframe>'})},I=n(6),S=n(7),C=n(28),T=(n(47),function(){return Object(a.jsxs)("div",{className:"parallax-window landing","data-parallax":"scroll","data-image-src":"img/127background3.jpg","data-speed":"0.1",children:[Object(a.jsx)(I.a,{children:Object(a.jsxs)(S.a,{children:[Object(a.jsxs)("h1",{children:[Object(a.jsx)("b",{children:"Leetcode 101"})," | Introduction to Algorithmic Thinking"]}),Object(a.jsx)("h2",{children:"Spring 2021"}),Object(a.jsx)("h1",{children:"Announcements"}),Object(a.jsx)("p",{children:"Enrollment is now closed! Check back later as our site is still being updated."})]})}),Object(a.jsx)(I.a,{children:Object(a.jsxs)(S.a,{children:[Object(a.jsx)("a",{class:"anchor",id:"schedule"}),Object(a.jsx)("h2",{children:"Schedule"}),Object(a.jsx)("div",{class:"table-responsive",children:Object(a.jsxs)(C.a,{bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Week"}),Object(a.jsx)("th",{children:"Date"}),Object(a.jsx)("th",{children:"Lecture Topic"}),Object(a.jsx)("th",{children:"Problems Covered"}),Object(a.jsx)("th",{children:"Homework"})]})}),w.map((function(e,t){return Object(a.jsx)("tbody",{id:"wk".concat(t),children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{class:"center",children:t}),Object(a.jsx)("td",{class:"center",children:e.date}),Object(a.jsx)("td",{children:e.topic}),Object(a.jsx)("td",{children:e.problems.length?e.problems.map((function(t,n){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.link,children:t.name}),e.problems[n+1]&&Object(a.jsx)("br",{})]})})):""}),Object(a.jsxs)("td",{class:"center",children:[e.homework,e.due&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsxs)("i",{children:["Due ",e.due]})]})]})]})})}))]})})]})}),Object(a.jsx)(I.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(a.jsx)(v,{})})]})}),L=n.p+"static/media/mike.3eb54249.jpeg",_=n.p+"static/media/kathy_wu.1b1a12dc.jpg",A=n.p+"static/media/ahan_sabharwal.5dd8bf3c.jpg",M=n.p+"static/media/karthik_balakrishnan.39f7ff68.jpg",D=n.p+"static/media/ankit_agarwal.ce7470e7.jpg",H=n.p+"static/media/megan_zhu.161878fb.jpg",B=n.p+"static/media/david_zhu.1bc9181f.jpg",P=n.p+"static/media/kexin_shu.7fa64d66.jpg",F=n.p+"static/media/leo_kao.3ccbb07b.jpg",z=n.p+"static/media/ian_chang.1008dd13.jpg",q=n.p+"static/media/kevin_zhu.f9874913.png",R=n.p+"static/media/richard_zhu.d6b7c82b.jpg",E=n.p+"static/media/rahul_shah.6542ea3e.png",W=n.p+"static/media/samarth_goel.c27f5b66.jpg",N=n.p+"static/media/priyam_mohanty.34281ba0.png",K=n.p+"static/media/luke_liu.5cfd8592.jpg",G=n.p+"static/media/artem_tkachuk.1c1aab7e.jpeg",J=n.p+"static/media/harris_shadmany.001a6754.jpg",Y=n.p+"static/media/julian_meyn.25f615d6.jpg",Z=n.p+"static/media/jessica_yu.5f027f35.jpg",U=[{name:"Michael Jayasuriya",email:"mjayasur",bio:"Hi all! I\u2019m Michael, a third year CS/Premed student, and I\u2019m excited to be co-facilitating the first semester of this decal with Kathy! DM me on Discord or come to OH if you want to vent about toxicity in CS, chat about the Great British Baking Show, play TF2 with my little brother and I (my favorite class is the spy), discuss algorithms, or anything in between!",image:L},{name:"Kathy Wu",email:"kathywu",bio:"Hey everyone! My name is Kathy, and I'm a 3rd year CS major from Saratoga, CA. I'm super excited to be co-facilitating the leetcode decal with Michael this semester. Outside of classes, my hobbies include baking, pet goldfish ownership, and going on unnecessarily long walks timed to the length of my spotify playlists. HMU to talk about anything!",image:_}],Q=[{name:"Ahan Sabharwal",email:"ahan.sabharwal",bio:"Hi everyone! I\u2019m a junior studying Data Science and CS. I\u2019m interested in systems, ML infra, and algorithms. Super excited to TA the course and help everyone with interview prep!",image:A},{name:"Karthik Balakrishnan",email:"bkarthik",bio:"I could tell you about myself, but where's the fun in that? Stalk me online and see what you can find out about me!",image:M},{name:"Ankit Agarwal",email:"aagarwal_601",bio:"Tech enthusiast interested in starting my own start-up. Hobby mathematician and pianist :D",image:D},{name:"Megan Zhu",email:"meganzhu",bio:"Hey! My name is Megan and I'm a third year Computer Science and Econ double major from Toronto, Canada. In my free time, I like to eat, sleep, eat some more and binge watch tv shows for hours on end. Feel free to hit me up with any questions and I'll try my best!",image:H},{name:"David Zhu",email:"zidongzhu",bio:"David is a junior studying Business and CS at Berkeley. Loves playing piano and telling bad jokes. Hmu for League or Anime anytime",image:B},{name:"Kexin (Cassie) Shu",email:"kexinshu",bio:"My name is Kexin and I am a CS junior. I am TA-ing this class because I like solving LeetCode problems (even though some of them are tricky!). Let me know if you need any tips in hunting an internship, and I will try my best to help!",image:P},{name:"Leo Kao",email:"leok",bio:"Hi! My name is Leo Kao and I\u2019m a third-year international student from Taiwan, majoring in Computer Science. In my free time, I enjoy traveling and visiting restaurants to seek good food. Feel free to reach out to me if you have any questions, or when you feel overwhelmed.  ",image:F},{name:"Ian Chang",email:"iac",bio:"Hi everyone, I\u2019m Ian! I\u2019m a junior EECS major hailing from Santa Monica, CA. Love the beach, thrilling sports, and music (Rock, EDM, and Rap). Excited to help teach the usefulness of algorithms and data structures this semester!",image:z},{name:"Kevin Zhu",email:"zhu502846",bio:"Hey everyone - I am a 3rd year from Chicago-ish and I'm super excited to help pilot this class! Outside of CS, some of my current hobbies include League, music, and indulging on nostalgic TV shows from the early 2000s/2010s. Feel free to talk to me about anything!",image:q},{name:"Richard Zhu",email:"rszhu",bio:"I want to help YOU pass interviews because if you don't, some Stanford kid will (yikes)",image:R},{name:"Rahul Shah",email:"rsha256",bio:"Hi, I'm Rahul! I'm from Princeton NJ and am now a freshman declared as a Computer Science major in L&S. I love coding, developing software (peep my github, rsha256), and teaching. I also love pandas and am always free if you'd like advice about any of the CS intro series here at Cal :)",image:E},{name:"Samarth Goel",email:"sgoel9",bio:"Hey everyone! My name's Samarth and I'm a sophomore studying CS and Business. In my free time I enjoy long walks, practicing guitar, and playing the drums in the Cal band.",image:W},{name:"Priyam Mohanty",email:"priyam.mohanty",bio:"Hey everyone, I'm a senior majoring in CS and Public Health. Happy to help with anything ranging from algorithms to recruiting help.",image:N},{name:"Luke Liu",email:"lukeliu",bio:"Hey! I am a sophomore majoring in CS & DS, and I am a proud Canadian from Toronto, Ontario. I am super passionate about teaching; please don\u2019t hesitate to reach out about absolutely anything, course related or not. I look forward to meeting you all!",image:K},{name:"Artem Tkachuk",email:"aat",bio:"Hi! I'm an international junior student at Berkeley studying CS and Math. I am also the current lead of Berkeley's Google Developer Student Club. I want to pursue an academic career and do research in machine learning, but am also interested in all things involving business. In my free time I play musical instruments (mainly guitars and piano), travel, listen to music, read, ski, and swim! If you are a transfer student, come talk to me!",image:G},{name:"Harris Shadmany",email:"harrisshadmany",bio:"Hello! I'm Harris and I'm a sophomore majoring in Computer Science & Statistics. Talk to me about: algorithms, recruiting (for quant finance), Taylor Swift, food, or Doctor Who. If you're a freshman or sophomore who feels like an impostor/inadequate among Berkeley's superstar CS community, really come talk to me - it feels like just yesterday I was in this position exactly and I'd like to help. ",image:J},{name:"Julian Meyn",email:"meyn",bio:"Hey! I'm a 2nd year CS major from SoCal. In my free time I enjoy listening to music, watching old movies, and playing league with the boys. I'm looking forward to meeting you all!",image:Y},{name:"Jessica Yu",email:"jessica.yu",bio:"I like to Leet",image:Z}],V=function(){return Object(a.jsx)(I.a,{children:Object(a.jsxs)(S.a,{children:[Object(a.jsx)("a",{class:"anchor",id:"staff"}),Object(a.jsx)("h2",{children:"Course Staff"}),Object(a.jsx)("h3",{children:"DeCal Facilitators"}),Object(a.jsx)(I.a,{children:U.map((function(e,t){return Object(a.jsxs)("div",{class:" col-md-6 my-4",children:[Object(a.jsx)("img",{src:e.image,alt:e.name,class:"mr-3 rounded-circle staff-image"}),Object(a.jsxs)("div",{class:"media-body",children:[Object(a.jsx)("h4",{class:"my-0",children:e.name}),Object(a.jsxs)("p",{class:"my-1",children:[e.email,"@"]}),Object(a.jsx)("span",{class:"staff-bio",children:Object(a.jsx)("p",{children:e.bio})})]})]})}))}),Object(a.jsx)("h3",{children:"TAs"}),Object(a.jsx)(I.a,{children:Q.map((function(e,t){return Object(a.jsxs)("div",{class:"col-md-6 my-4",children:[Object(a.jsx)("img",{src:e.image,alt:e.name,class:"mr-3 rounded-circle staff-image"}),Object(a.jsxs)("div",{class:"media-body",children:[Object(a.jsx)("h4",{class:"my-0",children:e.name}),Object(a.jsxs)("p",{class:"my-1",children:[e.email,"@"]}),Object(a.jsx)("span",{class:"staff-bio",children:Object(a.jsx)("p",{children:e.bio})})]})]})}))})]})})},X=function(){return Object(a.jsx)(I.a,{children:Object(a.jsxs)(S.a,{children:[Object(a.jsx)("a",{class:"anchor",id:"resources"}),Object(a.jsx)("h2",{children:"Resources"}),Object(a.jsxs)("p",{children:["Ask your questions on our class"," ",Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://piazza.com/berkeley/spring2021/cs198112",children:"Piazza"}),"."]}),Object(a.jsx)("h3",{children:"Lecture Slides"}),Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:".",children:"Introduction"})})})]})})},$=function(){return Object(a.jsx)(I.a,{children:Object(a.jsxs)(S.a,{children:[Object(a.jsx)("a",{class:"anchor",id:"syllabus"}),Object(a.jsx)("h2",{children:"Syllabus"}),Object(a.jsx)("h3",{children:"Course Info"}),Object(a.jsx)("a",{class:"anchor",id:"courseInfo"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Course Title:"})," Introduction to Algorithmic Thinking"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Units"}),": 2"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Time"}),": Tuesdays, 5-6:30pm"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Instructors"}),": Michael Jayasuriya and Kathy Wu"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Faculty Sponsor"}),": Jelani Nelson"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Course Catalog"}),":"," ",Object(a.jsx)("a",{href:"https://classes.berkeley.edu/content/2021-spring-compsci-198-112-grp-112",children:"https://classes.berkeley.edu/content/2021-spring-compsci-198-112-grp-112"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Prerequisites:"})," CS 61A OR Data 8 OR Python programming experience"]})]}),Object(a.jsx)("h3",{children:"Course Description"}),Object(a.jsx)("p",{children:"Coding interviews often require a skill set that is not fully covered by the undergraduate CS curriculum. Rather than leave students to learn these skills on their own, Introduction to Algorithmic Thinking attempts to bridge the gap between traditional computer science coursework and the industry recruiting process. With mock interviews and practice problems curated by frequency, Introduction to Algorithmic Thinking provides a hands on and practical approach to learning how to code algorithms commonly seen in software engineering interviews."}),Object(a.jsx)("h3",{children:"Course Objectives"}),Object(a.jsxs)("ol",{children:[Object(a.jsx)("li",{children:"Become well-versed in common data structures and popular problem solving methods"}),Object(a.jsx)("li",{children:"Develop algorithmic intuition that will help you approach new problems"}),Object(a.jsx)("li",{children:"Learn how to communicate your thought process effectively"}),Object(a.jsx)("li",{children:"Prepare students for the upcoming internship and full time SWE recruiting season"})]}),Object(a.jsx)("p",{children:" "}),Object(a.jsx)("h3",{children:"Homework"}),Object(a.jsx)("a",{class:"anchor",id:"homework"}),Object(a.jsxs)("p",{children:["Weekly homework will be assigned and submitted on bCourses. For leetcode problems, this includes submitting screenshot verification that you have ",Object(a.jsx)("i",{children:"attempted"})," the problem. Some homework assignments may have you answer a question with a short paragraph. 7 out of 10 homeworks are required."]}),Object(a.jsx)("p",{children:"The weekly homework assignments will be one of the important parts of this class. If you successfully work through and understand the solution to every problem, you will be ready for any coding interview. Only attempts are required to complete the homework and pass, because we encourage you to struggle with the problems for a bit before looking at the answer. We will host office hours (Time: TBD) so you get a chance to talk to us about the problems."}),Object(a.jsx)("h3",{children:"Grading Breakdown"}),Object(a.jsx)("a",{class:"anchor",id:"gradeBreak"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Lecture Attendance: 20%"}),Object(a.jsx)("li",{children:"Mock Interview Participation: 40% "}),Object(a.jsx)("li",{children:"Homework Assignments: 40%"})]}),Object(a.jsx)("h3",{children:"Grading Policy"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Attendance"}),": Three unexcused absences from our lecture are allowed. For a class to be excused, you must get advanced permission (just email us we\u2019re nice!). Missing more than 3 unexcused classes will result in an automatic No Pass (NP). Please reach out to us if you have any questions or concerns."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Participation"}),": Participation enhances intuition, and we aim to build an algorithmic intuition so that if you were presented with any coding problem you could do it! As interviewing is an interpersonal skill, in-class participation is a major aspect of the course (especially in the mock interviews). Participation is demonstrated by engaging actively in your mock interview and lecture attendance. We will make you fill out feedback forms periodically about your mock interview partner to judge participation. As long as you participate in the breakout rooms, you\u2019ll receive full points."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Homework"}),": Weekly homework will be assigned and submitted on bCourses. For leetcode problems, this includes submitting screenshot verification that you have ATTEMPTED the problem. Some homework assignments may have you answer a question with a short paragraph. 7 out of 10 homeworks are required."]}),Object(a.jsx)("p",{children:"The weekly homework assignments will be one of the important parts of this class. If you successfully work through and understand the solution to every problem, you will be ready for any coding interview. Only attempts are required to complete the homework and pass, because we encourage you to struggle with the problems for a bit before looking at the answer. We will host office hours (Time: TBD) so you get a chance to talk to us about the problems."})]})})},ee=function(){var e=O(),t=Object(c.a)(e,3),n=(t[0],t[1],t[2]);return n?Object(a.jsx)("div",{class:"container",children:Object(a.jsx)("p",{class:"text-center",children:Object(a.jsxs)("span",{class:"text-muted",children:["Website template taken with permission from the ",Object(a.jsx)("a",{href:"https://www.eecs16b.org/",children:"EECS16b"})," website."]})})}):Object(a.jsx)("div",{})};var te=function(){return Object(a.jsxs)("div",{className:"App",id:"home",children:[Object(a.jsx)(k,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(T,{}),Object(a.jsx)(V,{}),Object(a.jsx)(X,{}),Object(a.jsx)($,{}),Object(a.jsx)(ee,{})]})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(te,{})}),document.getElementById("root")),ne()}},[[48,1,2]]]);
//# sourceMappingURL=main.39c92f92.chunk.js.map