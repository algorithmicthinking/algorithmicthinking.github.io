(this.webpackJsonpleetcode101=this.webpackJsonpleetcode101||[]).push([[0],{35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(1),r=i.n(n),s=i(14),o=i.n(s),c=(i(35),i(36),i(37),i(8)),l=i(15),h=i(13),d=i.p+"static/media/logo.0735e929.png",m=(i(38),i(10)),u={},b={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)",link:"#007bff"},j=i(16);function p(){var e=Object(j.a)(["\n\n  html, body {\n    background: ",";\n    color: ",";\n    transition: all 0.25s linear;\n  }\n\n  .navbar {\n    background: ",";\n    transition: all 0.25s linear;\n    .navbar-brand {\n      color: ",";\n    }\n    .nav-link {\n      p {\n        color: ",";\n      }\n    }\n  }\n\n  .table {\n    td {\n      color: ",";\n    }\n  }\n\n  a {\n    color: ",";\n  }\n  "]);return p=function(){return e},e}var g=Object(m.b)(p(),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.link}));i.p;i.p;function f(){var e=Object(j.a)(["\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  justify-content: space-between;\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 0.5rem;\n  position: relative;\n  width: 5rem;\n  height: 3rem;\n\n  img {\n    height: auto;\n    width: 2.5rem;\n    transition: all 0.3s linear;\n    \n    &:first-child {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n    }\n  }\n"]);return f=function(){return e},e}var y=m.c.button(f(),(function(e){return e.theme.gradient}),(function(e){return e.theme.toggleBorder}),(function(e){return e.lightTheme?"translateY(0)":"translateY(100px)"}),(function(e){return e.lightTheme?"translateY(-100px)":"translateY(0)"})),x=function(e){var t=e.theme,i=e.toggleTheme,n="light"===t;return Object(a.jsxs)(y,{lightTheme:n,onClick:i,children:[Object(a.jsx)("img",{src:"https://assets.leetcode.com/static_assets/public/icons/favicon-192x192.png",style:{width:30,height:30},alt:"Sun"}),Object(a.jsx)("img",{src:"https://assets.leetcode.com/static_assets/public/icons/apple-touch-icon-180x180.png",style:{width:30,height:30},alt:"Moon"})]})},O=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),i=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(c.a)(r,2),o=s[0],l=s[1],h=function(e){window.localStorage.setItem("theme",e),a(e)};return Object(n.useEffect)((function(){var e=window.localStorage.getItem("theme");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!e?h("dark"):e?a(e):h("light"),l(!0)}),[]),[i,function(){h("light"===i?"dark":"light")},o]},w=function(){var e=O(),t=Object(c.a)(e,3),i=t[0],n=t[1],r=t[2],s="light"===i?u:b;return r?Object(a.jsxs)(l.a,{expand:"lg",sticky:"top",className:"navbar",children:[Object(a.jsxs)(l.a.Brand,{href:"#home",children:[Object(a.jsx)("img",{src:d,alt:""}),Object(a.jsx)("strong",{style:{color:"#ED9705"},children:"Leetcode 101 DeCal"})]}),Object(a.jsx)(l.a.Toggle,{"aria-controls":"navbar-nav"}),Object(a.jsx)(l.a.Collapse,{id:"navbar-nav",children:Object(a.jsxs)(h.a,{className:"ml-auto",children:[Object(a.jsx)(h.a.Link,{href:"#schedule",children:Object(a.jsx)("p",{children:"Schedule"})}),Object(a.jsx)(h.a.Link,{href:"#staff",children:Object(a.jsx)("p",{children:"Staff"})}),Object(a.jsx)(h.a.Link,{href:"#syllabus",children:Object(a.jsx)("p",{children:"Syllabus"})}),Object(a.jsx)(h.a.Link,{target:"_blank",rel:"noreferrer",href:"https://piazza.com/berkeley/spring2021/cs198112",children:Object(a.jsx)("p",{children:"Piazza"})}),Object(a.jsx)(h.a.Link,{target:"_blank",rel:"noreferrer",href:"https://discord.gg/Ewyh3YJd8m",children:Object(a.jsx)("p",{children:"Discord"})}),Object(a.jsx)(h.a.Link,{target:"_blank",rel:"noreferrer",href:"https://wiki.python.org/moin/TimeComplexity",children:Object(a.jsx)("p",{children:"Reference"})}),Object(a.jsx)("div",{className:"toggle",children:Object(a.jsx)(m.a,{theme:s,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{}),Object(a.jsx)(x,{theme:i,toggleTheme:n,className:"theme-button"})]})})})]})})]}):Object(a.jsx)("div",{})},k=[{date:"02/02 Tu",topic:"Introduction, Recruiting Timeline, and Recruiting Resources",problems:[],homework:"Get a LeetCode Account",due:"02/08 Mon"},{date:"02/09 Tu",topic:"Behavioral Questions and Communicating Thought Process",problems:[]},{date:"02/16 Tu",topic:"Arrays, Strings, and Dictionaries",problems:[]},{date:"02/23 Tu",topic:"Linked Lists",problems:[]},{date:"03/02 Tu",topic:"Two Pointers and Binary Search",problems:[]},{date:"03/09 Tu",topic:"Stacks, Heaps, and Queues",problems:[]},{date:"03/16 Tu",topic:"Sliding WindOwO",problems:[]},{date:"03/23 Tu",topic:"Spring Break",problems:[]},{date:"03/30 Tu",topic:"Trees",problems:[]},{date:"04/06 Tu",topic:"Graphs",problems:[]},{date:"04/13 Tu",topic:"Dynamic Programming",problems:[]},{date:"04/20 Tu",topic:"Object Oriented Programming",problems:[]},{date:"04/27 Tu",topic:"Guest Speaker: TBD",problems:[]}],v=function(){var e=O(),t=Object(c.a)(e,3),i=(t[0],t[1],t[2]);if(!i)return Object(a.jsx)("div",{});function n(e){return Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:e.iframe?e.iframe:""}})}return Object(a.jsx)(n,{iframe:'<iframe\n            src="https://calendar.google.com/calendar/embed?src=c_9acra227ucphcf4eq6m7theu3o%40group.calendar.google.com&ctz=America%2FLos_Angeles "\n            style="border: 0" width="1080" height="800" frameBorder="0" scrolling="no">\n        </iframe>'})},I=i(6),T=i(7),S=i(28),C=(i(47),function(){return Object(a.jsxs)("div",{className:"parallax-window landing","data-parallax":"scroll","data-image-src":"img/127background3.jpg","data-speed":"0.1",children:[Object(a.jsx)(I.a,{children:Object(a.jsxs)(T.a,{children:[Object(a.jsxs)("h1",{children:[Object(a.jsx)("b",{style:{color:"#ED9705"},children:"Leetcode 101"})," |"," ",Object(a.jsx)("span",{style:{color:"#008ECB"},children:"Introduction to Algorithmic Thinking"})]}),Object(a.jsx)("h2",{children:"Spring 2021"}),Object(a.jsx)("h2",{children:"Announcements"}),Object(a.jsx)("p",{children:"Enrollment is now closed! Check back later as our site is still being updated."})]})}),Object(a.jsx)(I.a,{children:Object(a.jsxs)(T.a,{children:[Object(a.jsx)("a",{class:"anchor",id:"schedule"}),Object(a.jsx)("h2",{children:"Schedule"}),Object(a.jsx)("div",{class:"table-responsive",children:Object(a.jsxs)(S.a,{bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Week"}),Object(a.jsx)("th",{children:"Date"}),Object(a.jsx)("th",{children:"Lecture Topic"}),Object(a.jsx)("th",{children:"Problems Covered"}),Object(a.jsx)("th",{children:"Homework"})]})}),k.map((function(e,t){return Object(a.jsx)("tbody",{id:"wk".concat(t),children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{class:"center",children:t}),Object(a.jsx)("td",{class:"center",children:e.date}),Object(a.jsx)("td",{children:e.topic}),Object(a.jsx)("td",{children:e.problems.length?e.problems.map((function(t,i){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.link,children:t.name}),e.problems[i+1]&&Object(a.jsx)("br",{})]})})):""}),Object(a.jsxs)("td",{class:"center",children:[e.homework,e.due&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsxs)("i",{children:["Due ",e.due]})]})]})]})})}))]})})]})}),Object(a.jsx)(I.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(a.jsx)(v,{})})]})}),_=i.p+"static/media/mike.3eb54249.jpeg",A=i.p+"static/media/kathy_wu.1b1a12dc.jpg",L=i.p+"static/media/ahan_sabharwal.5dd8bf3c.jpg",M=i.p+"static/media/karthik_balakrishnan.39f7ff68.jpg",P=i.p+"static/media/megan_zhu.161878fb.jpg",H=i.p+"static/media/david_zhu.1bc9181f.jpg",B=i.p+"static/media/kexin_shu.7fa64d66.jpg",D=i.p+"static/media/leo_kao.3ccbb07b.jpg",E=i.p+"static/media/ian_chang.1008dd13.jpg",z=i.p+"static/media/kevin_zhu.f9874913.png",F=i.p+"static/media/richard_zhu.d6b7c82b.jpg",N=i.p+"static/media/rahul_shah.6542ea3e.png",q=i.p+"static/media/samarth_goel.c27f5b66.jpg",W=i.p+"static/media/priyam_mohanty.34281ba0.png",R=i.p+"static/media/luke_liu.5cfd8592.jpg",G=i.p+"static/media/artem_tkachuk.1c1aab7e.jpeg",K=i.p+"static/media/harris_shadmany.001a6754.jpg",J=i.p+"static/media/julian_meyn.25f615d6.jpg",Y=i.p+"static/media/jessica_yu.5f027f35.jpg",Z=i.p+"static/media/samuel_lee.33087c8d.jpg",U="Web Development",V="HW + Mock interviews",Q="Piazza",X="Video walkthrough",$="Facilitator",ee=[{name:"Michael Jayasuriya",email:"mjayasur",bio:"Hi all! I\u2019m Michael, a third year CS/Premed student, and I\u2019m excited to be co-facilitating the first semester of this decal with Kathy! DM me on Discord or come to OH if you want to vent about toxicity in CS, chat about the Great British Baking Show, play TF2 with my little brother and I (my favorite class is the spy), discuss algorithms, or anything in between!",image:_,focus_area:$},{name:"Kathy Wu",email:"kathywu",bio:"Hey everyone! My name is Kathy, and I'm a 3rd year CS major from Saratoga, CA. I'm super excited to be co-facilitating the leetcode decal with Michael this semester. Outside of classes, my hobbies include baking, pet goldfish ownership, and going on unnecessarily long walks timed to the length of my spotify playlists. HMU to talk about anything!",image:A,focus_area:$}],te=[{name:"Jessica Yu",email:"jessica.yu",bio:"Hey everyone! I\u2019m a third year from Fremont, CA and I\u2019m looking forward to TA for this very meta DeCal. While not grinding Leetcode or talking about grinding Leetcode, I enjoy cooking, apartment-friendly workouts, and rewatching The Good Place. Feel free to email me if you want to make a new friend!",image:Y,focus_area:"Logistics"},{name:"Kevin Zhu",email:"zhu502846",bio:"Hey everyone - I am a 3rd year from Chicago-ish and I'm super excited to help pilot this class! Outside of CS, some of my current hobbies include League, music, and indulging on nostalgic TV shows from the early 2000s/2010s. Feel free to talk to me about anything!",image:z,focus_area:"Lecturer"},{name:"Ahan Sabharwal",email:"ahan.sabharwal",bio:"Hi everyone! I\u2019m a junior studying Data Science and CS. I\u2019m interested in systems, ML infra, and algorithms. Super excited to TA the course and help everyone with interview prep!",image:L,focus_area:"Discussion Leader"},{name:"Karthik Balakrishnan",email:"bkarthik",bio:"I could tell you about myself, but where's the fun in that? Stalk me online and see what you can find out about me!",image:M,focus_area:V},{name:"Megan Zhu",email:"meganzhu",bio:"Hey! My name is Megan and I'm a third year Computer Science and Econ double major from Toronto, Canada. In my free time, I like to eat, sleep, eat some more and binge watch tv shows for hours on end. Feel free to hit me up with any questions and I'll try my best!",image:P,focus_area:V},{name:"David Zhu",email:"zidongzhu",bio:"David is a junior studying Business and CS at Berkeley. Loves playing piano and telling bad jokes. Hmu for League or Anime anytime",image:H,focus_area:""},{name:"Kexin (Cassie) Shu",email:"kexinshu",bio:"My name is Kexin and I am a CS junior. I am TA-ing this class because I like solving LeetCode problems (even though some of them are tricky!). Let me know if you need any tips in hunting an internship, and I will try my best to help!",image:B,focus_area:V},{name:"Leo Kao",email:"leok",bio:"Hi! My name is Leo Kao and I\u2019m a third-year international student from Taiwan, majoring in Computer Science. In my free time, I enjoy traveling and visiting restaurants to seek good food. Feel free to reach out to me if you have any questions, or when you feel overwhelmed.  ",image:D,focus_area:U},{name:"Ian Chang",email:"iac",bio:"Hi everyone, I\u2019m Ian! I\u2019m a junior EECS major hailing from Santa Monica, CA. Love the beach, thrilling sports, and music (Rock, EDM, and Rap). Excited to help teach the usefulness of algorithms and data structures this semester!",image:E,focus_area:Q},{name:"Richard Zhu",email:"rszhu",bio:"I want to help YOU pass interviews because if you don't, some Stanford kid will (yikes)",image:F,focus_area:Q},{name:"Rahul Shah",email:"rsha256",bio:"Hi, I'm Rahul! I'm from Princeton NJ and am now a freshman declared as a Computer Science major in L&S. I love coding, developing software (peep my github, rsha256), and teaching. I also love pandas and am always free if you'd like advice about any of the CS intro series here at Cal :)",image:N,focus_area:U},{name:"Samarth Goel",email:"sgoel9",bio:"Hey everyone! My name's Samarth and I'm a sophomore from the Chicago suburbs studying CS and Business. In my free time I enjoy long walks in random directions, practicing guitar, and playing the drums in the Cal band. Feel free to talk to me about anything!",image:q,focus_area:U},{name:"Priyam Mohanty",email:"priyam.mohanty",bio:"Hey everyone, I'm a senior majoring in CS and Public Health. Happy to help with anything ranging from algorithms to recruiting help.",image:W,focus_area:X},{name:"Luke Liu",email:"lukeliu",bio:"Hey! I am a sophomore majoring in CS & DS, and I am a proud Canadian from Toronto, Ontario. I am super passionate about teaching; please don\u2019t hesitate to reach out about absolutely anything, course related or not. I look forward to meeting you all!",image:R,focus_area:V},{name:"Artem Tkachuk",email:"aat",bio:"Hi! I'm an international junior student at Berkeley studying CS and Math. I am also the current lead of Berkeley's Google Developer Student Club. I want to pursue an academic career and do research in machine learning, but am also interested in all things involving business. In my free time I play musical instruments (mainly guitars and piano), travel, listen to music, read, ski, and swim! If you are a transfer student, come talk to me!",image:G,focus_area:U},{name:"Harris Shadmany",email:"harrisshadmany",bio:"Hello! I'm Harris and I'm a sophomore majoring in Computer Science & Statistics. Talk to me about: algorithms, recruiting (for quant finance), Taylor Swift, food, or Doctor Who. If you're a freshman or sophomore who feels like an impostor/inadequate among Berkeley's superstar CS community, really come talk to me - it feels like just yesterday I was in this position exactly and I'd like to help. ",image:K,focus_area:Q},{name:"Julian Meyn",email:"meyn",bio:"Hey! I'm a 2nd year CS major from SoCal. In my free time I enjoy listening to music, watching old movies, and playing league with the boys. I'm looking forward to meeting you all!",image:J,focus_area:U},{name:"Samuel Lee",email:"samatbryan",bio:"Hello~ I am a 4th year CS major from Korea/NJ. In my free time, I like to compete in programming competitions. Since this is a leetcode class, I'll post my leetcode handle here :) leetcode.com/BlackpinkLisa. If you also like Blackpink or compete in any contests, shoot me a message!",image:Z,focus_area:X}],ie=function(){return Object(a.jsx)(I.a,{children:Object(a.jsxs)(T.a,{children:[Object(a.jsx)("a",{class:"anchor",id:"staff"}),Object(a.jsx)("h2",{children:"Course Staff"}),Object(a.jsx)("h3",{children:"DeCal Facilitators"}),Object(a.jsx)(I.a,{children:ee.map((function(e,t){return Object(a.jsxs)("div",{class:"col-md-6 my-4 staff-container",children:[Object(a.jsx)("img",{src:e.image,alt:e.name,class:"rounded-circle staff-image"}),Object(a.jsxs)("div",{class:"media-body staff-description",children:[Object(a.jsx)("h4",{class:"my-0 mt-2 font-weight-bold",style:{color:"#ED9705"},children:e.name}),Object(a.jsxs)("p",{class:"my-1",children:[e.email,"@"]}),Object(a.jsx)("p",{className:"my-1",style:{color:"#008ECB"},children:Object(a.jsx)("i",{children:e.focus_area})}),Object(a.jsx)("span",{class:"staff-bio",children:Object(a.jsx)("p",{class:"mt-2",children:e.bio})})]})]})}))}),Object(a.jsx)("h3",{children:"Teaching Assistants"}),Object(a.jsx)(I.a,{children:te.map((function(e,t){return Object(a.jsxs)("div",{class:"col-12 col-sm-6 col-md-4 my-4 staff-container",children:[Object(a.jsx)("img",{src:e.image,alt:e.name,class:"rounded-circle staff-image"}),Object(a.jsxs)("div",{class:"media-body staff-description",children:[Object(a.jsx)("h4",{class:"my-0 mt-2 font-weight-bold",style:{color:"#ED9705"},children:e.name}),Object(a.jsxs)("p",{class:"my-1",children:[e.email,"@"]}),Object(a.jsx)("p",{className:"my-1",style:{color:"#008ECB"},children:Object(a.jsx)("i",{children:e.focus_area})}),Object(a.jsx)("span",{class:"staff-bio",children:Object(a.jsx)("p",{class:"mt-2",children:e.bio})})]})]})}))})]})})},ae=function(){return Object(a.jsx)(I.a,{children:Object(a.jsxs)(T.a,{children:[Object(a.jsx)("a",{class:"anchor",id:"resources"}),Object(a.jsx)("h2",{children:"Resources"}),Object(a.jsxs)("p",{children:["Ask your questions on our class"," ",Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://piazza.com/berkeley/spring2021/cs198112",children:"Piazza"}),"."]}),Object(a.jsx)("h3",{children:"Additional resources"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("a",{href:"https://binarysearch.com/",target:"_blank",rel:"noreferrer",children:"BinarySearch.com"}),"- Learn Algorithms Together! Create a room, invite your friends, and race to finish the problems."]})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"https://docs.google.com/document/d/1Ewown3BLdG1XH7EsNXxZFgIOFV7qm8P6W50kc9yK4fs/edit?usp=sharing",target:"_blank",rel:"noreferrer",children:"How to 100% Get a Job 40% of the Time: Pingpong Edition"})})})]})]})})},ne=(i(48),function(){return Object(a.jsx)(I.a,{className:"syllabus",children:Object(a.jsxs)(T.a,{children:[Object(a.jsx)("a",{class:"anchor",id:"syllabus"}),Object(a.jsx)("h2",{children:"Syllabus"}),Object(a.jsx)("h3",{children:"Course Info"}),Object(a.jsx)("a",{class:"anchor",id:"courseInfo"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Course Title"}),": Introduction to Algorithmic Thinking"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Units"}),": 2"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Time"}),": Tuesdays, 5-6:30pm"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Instructors"}),": Michael Jayasuriya and Kathy Wu"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Faculty Sponsor"}),": Jelani Nelson"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Course Catalog"}),":"," ",Object(a.jsx)("a",{href:"https://classes.berkeley.edu/content/2021-spring-compsci-198-112-grp-112",children:"https://classes.berkeley.edu/content/2021-spring-compsci-198-112-grp-112"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Prerequisites"}),": CS 61A OR Data 8 OR Python programming experience"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"Textbooks and Course Materials: "}),"No course materials required, only a Leetcode account"]})]}),Object(a.jsx)("h3",{children:"Course Description"}),Object(a.jsx)("p",{children:"Coding interviews often require a skill set that is not fully covered by the undergraduate CS curriculum. Rather than leave students to learn these skills on their own, Introduction to Algorithmic Thinking attempts to bridge the gap between traditional computer science coursework and the industry recruiting process. With mock interviews and practice problems curated by frequency, Introduction to Algorithmic Thinking provides a hands on and practical approach to learning how to code algorithms commonly seen in software engineering interviews."}),Object(a.jsx)("h3",{children:"Course Format"}),Object(a.jsxs)("p",{children:["There are a few components to the course. The class time slot is 5:00-6:30pm, and the first 45 minutes are dedicated to a content lecture and the latter 45 minutes are dedicated to discussion, which is for collaborative problem solving with a partner.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("h5",{children:"Partners"}),"At the beginning of the class, you will fill out a form listing your preferences for matching with a partner. This partner will be your partner for discussion, and you will get to collaboratively work on problems with this partner every class during discussion. In addition, you will do your mock interviews with this partner. You are free to also collaborate on the homework with your partner."]}),Object(a.jsx)("br",{}),Object(a.jsxs)("li",{children:[Object(a.jsx)("h5",{children:"Content Lecture (Tues 5:00PM - 5:45PM)"}),"Every week we will be covering a specific pattern of algorithms that comes up in coding interviews. The content lecture will overview the topic and give the intuition to understanding the algorithms for that week. It will take place over zoom, and the zoom link will be sent out to every student along with being on the course website and piazza."]}),Object(a.jsx)("br",{}),Object(a.jsxs)("li",{children:[Object(a.jsx)("h5",{children:"Discussion (Tues 5:45PM - 6:30 PM)"}),"The latter 45 minutes of lecture are dedicated to collaborative problem solving with your partner. There are three discussion \u201csections\u201d, but they are both right after the lecture. Each discussion section will be headed by a member of course staff (TA). At the beginning of the semester, you and your partner will be assigned one of these discussion sections. You will attend the same section throughout the semester. The discussion is essential because it will build your interpersonal skills, as interviewing is an inherently collaborative activity. At the beginning of the semester, the discussion will be for working on problem solving collaboratively. The discussion section will begin with the TA presenting the problem, and then opening up breakout rooms for you to go into with your partner. In the last 15 minutes of discussion, you will go back into the main room and the TA will explain the solution to the problem."]}),Object(a.jsx)("br",{}),Object(a.jsxs)("li",{children:[Object(a.jsx)("h5",{children:"Office Hours"}),"Instructors will hold office hours after lecture from 6:30 - 7:30 PM. TA\u2019s will hold office hours on Mondays and Thursdays from 3:00-4:00 PM. TA office hours will have multiple TA\u2019s and an office hours queue similar to CS61A."]})]})]}),Object(a.jsx)("h3",{children:"Course Objectives"}),Object(a.jsxs)("ol",{children:[Object(a.jsx)("li",{children:"Become well-versed in common data structures and popular problem solving methods"}),Object(a.jsx)("li",{children:"Develop algorithmic intuition that will help you approach new problems"}),Object(a.jsx)("li",{children:"Learn how to communicate your thought process effectively"}),Object(a.jsx)("li",{children:"Prepare students for the upcoming internship and full time SWE recruiting season"})]}),Object(a.jsx)("p",{children:" "}),Object(a.jsx)("h3",{children:"Grading Breakdown"}),Object(a.jsx)("a",{class:"anchor",id:"gradeBreak"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Breakout Room Participation: 40%"}),Object(a.jsx)("li",{children:"Homework Assignments: 30%"}),Object(a.jsx)("li",{children:"Mock Interview 1: 15%"}),Object(a.jsx)("li",{children:"Mock Interview 2: 15%"})]}),Object(a.jsx)("h3",{children:"Grading Policy"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Attendance (max 2 unexcused absences)"}),": TWO unexcused absences from our lecture and discussion are allowed. For a class to be excused, you MUST get advance permission (just"," ",Object(a.jsx)("a",{href:"mailto:leetcodedecal@gmail.com",children:"email us"})," we\u2019re nice!). Having more than 2 unexcused classes will result in an automatic No Pass (NP). Please reach out to us if you have any questions or concerns."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Participation"}),": Participation enhances intuition, and we aim to build an algorithmic intuition so that if you were presented with any coding problem you could do it! As interviewing is an interpersonal skill, in-class participation is a major aspect of the course (especially in the mock interviews). Participation is demonstrated by engaging actively in your discussion and lecture attendance. We will make you fill out feedback forms periodically about your partner to judge participation. As long as you participate in the breakout rooms, you\u2019ll receive full points."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Homework (8 out of 10 required)"}),": All the homework is released"," ",Object(a.jsx)("a",{href:"https://leetcode101.com",children:"on our website"})," and is due every Monday at 11:59 PM. Each homework is graded on effort and full credit will be given if the problem submission has been attempted. Your lowest two homework scores will be dropped. There are ten graded homework assignments over the course of the semester. The assignments consist of several leetcode problems that should be completed and submitted"," ",Object(a.jsx)("a",{href:"https://www.leetcode.com",children:"on the leetcode website"}),". To get credit for completing the problems, students will fill out a Gradescope assignment with their effort as well as a screenshot of each leetcode problem submission."]}),Object(a.jsx)("p",{children:"The weekly homework assignments will be one of the important parts of this class. If you successfully work through and understand the solution to every problem, you will be ready for any coding interview. Only attempts are required to complete the homework and pass, because we encourage you to struggle with the problems for a bit before looking at the answer. We will host office hours so you get a chance to talk to us about the problems."}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Mock Interviews"}),": There are two mock interviews that are graded on completion. There will be a form on gradescope to fill out after your mock interview to receive credit."]})]})})}),re=function(){var e=O(),t=Object(c.a)(e,3),i=(t[0],t[1],t[2]);return i?Object(a.jsx)("div",{class:"container",children:Object(a.jsx)("p",{class:"text-center",children:Object(a.jsxs)("span",{class:"text-muted",children:["Website template taken with permission from the ",Object(a.jsx)("a",{href:"https://www.eecs16b.org/",children:"EECS16b"})," website."]})})}):Object(a.jsx)("div",{})};var se=function(){return Object(a.jsxs)("div",{className:"App",id:"home",children:[Object(a.jsx)(w,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(C,{}),Object(a.jsx)(ie,{}),Object(a.jsx)(ae,{}),Object(a.jsx)(ne,{}),Object(a.jsx)(re,{})]})]})},oe=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,51)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;i(e),a(e),n(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(se,{})}),document.getElementById("root")),oe()}},[[49,1,2]]]);
//# sourceMappingURL=main.d3efd34d.chunk.js.map