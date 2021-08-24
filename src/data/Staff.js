import MichaelJ from "./headshots/mike.jpg";
import Kathy from "./headshots/kathy_wu.jpg";

import Ahan from "./headshots/ahan_sabharwal.jpg";
import Karthik from "./headshots/karthik_balakrishnan.jpg";
import Kexin from "./headshots/kexin_shu.jpg";
import Richard from "./headshots/richard_zhu.jpg";
import Rahul from "./headshots/rahul_shah.png";
import Samarth from "./headshots/samarth_goel.jpg";
import Harris from "./headshots/harris_shadmany.jpg";
import Julian from "./headshots/julian_meyn.jpg";
import Felix from "./headshots/felix_yan.jpg";
import Arav from "./headshots/arav_watwani.jpg";
import Nikhil from "./headshots/nikhil_kandkur.jpg";
import Joel from "./headshots/joel_jaison.jpg";
import Chris from "./headshots/chris_liu.jpg";
import Jonny from "./headshots/jonny_pei.jpg";
import KathyLee from "./headshots/kathy_lee.jpg";

const focus_areas = {
  wd: "Web Development",
  review: "Review Sessions",
  hw: "Homework",
  piazza: "Piazza",
  hw_pi: "Homework + Piazza",
  head: "Head TA",
  video: "Video walkthrough",
  head_logistics: "Logistics",
  lecturer: "Lecturer",
  disc: "Discussion TA",
  fac: "Facilitator",
};

export const facilitators = [
  {
    name: "Michael Jayasuriya",
    email: "mjayasur",
    bio: "Hi all! I’m Michael, a fourth year CS/Premed student, and I’m excited to be co-facilitating the first semester of this decal with Kathy! DM me on Discord or come to OH if you want to vent about toxicity in CS, chat about the Great British Baking Show, play TF2 with my little brother and I (my favorite class is the spy), discuss algorithms, or anything in between!",
    image: MichaelJ,
    focus_area: focus_areas.fac,
  },
  {
    name: "Kathy Wu",
    email: "kathywu",
    bio: "Hey everyone! My name is Kathy, and I'm a Master's student studying CS from Saratoga, CA. I'm super excited to be co-facilitating the leetcode decal with Michael this semester. Outside of classes, my hobbies include baking, pet goldfish ownership, and going on unnecessarily long walks timed to the length of my spotify playlists. HMU to talk about anything!",
    image: Kathy,
    focus_area: focus_areas.fac,
  },
];

export const teachingAssistants = [
  {
    name: "Ahan Sabharwal",
    email: "ahan.sabharwal",
    bio: "Hi everyone! I’m a senior studying Data Science and CS. In my free time, I enjoy watching Formula 1, reading, and listening to podcasts. Super excited to TA this semester and help everyone with interview prep!",
    image: Ahan,
    focus_area: focus_areas.head,
  },
  {
    name: "Rahul Shah",
    email: "rsha256",
    bio: "Hi, I'm Rahul! I'm from Princeton NJ and a a sophomore Computer Science major. I love coding, developing software (peep my github, rsha256), and teaching. I also love pandas and am always free if you'd like advice about any of the CS intro series here at Cal :)",
    image: Rahul,
    focus_area: focus_areas.lecturer,
  },
  {
    name: "Julian Meyn",
    email: "meyn",
    bio: "Hey! I'm a 3rd year CS major from SoCal. In my free time I enjoy listening to music, watching old movies, and playing league with the boys. I'm looking forward to meeting you all!",
    image: Julian,
    focus_area: focus_areas.review,
  },
  {
    name: "Karthik Balakrishnan",
    email: "bkarthik",
    bio: "ඞ     🗡️ඞ                             (amogus)",
    image: Karthik,
    focus_area: focus_areas.piazza,
  },
  {
    name: "Kexin (Cassie) Shu",
    email: "kexinshu",
    bio: "My name is Kexin and I am a CS junior. I am TA-ing this class because I like solving LeetCode problems (even though some of them are tricky!). Let me know if you need any tips in hunting an internship, and I will try my best to help!",
    image: Kexin,
    focus_area: focus_areas.wd,
  },
  {
    name: "Richard Zhu",
    email: "rszhu",
    bio: "I want to help YOU pass interviews because if you don't, some Stanford kid will (yikes)",
    image: Richard,
    focus_area: focus_areas.piazza,
  },
  {
    name: "Samarth Goel",
    email: "sgoel9",
    bio: "Hey everyone! My name's Samarth and I'm a third-year from the Chicago suburbs studying CS and Business. In my free time I enjoy long walks in random directions, practicing guitar, and playing the drums in the Cal band. Feel free to talk to me about music, fitness, or anything at all!",
    image: Samarth,
    focus_area: focus_areas.wd,
  },
  {
    name: "Harris Shadmany",
    email: "harrisshadmany",
    bio: "Hey, I’m Harris! I’m a junior studying Computer Science, originally from Arizona. I’m interested in algorithms, quantitative finance, and data science, so feel free to reach out if any of that sounds interesting. I’m also a huge foodie, so if you want a resume review/recruiting sesh/mock interview, I’m probably going to ask to do it over food.",
    image: Harris,
    focus_area: focus_areas.disc,
  },
  {
    name: "Felix Yan",
    email: "feefs",
    bio: "Hey there! I'm a 3rd year CS major, and I can't wait to have fun in this class with everyone!",
    image: Felix,
    focus_area: focus_areas.disc,
  },
  {
    name: "Arav Watwani",
    email: "arav",
    bio: "hey! i'm arav—a cs major from socal. when i'm not watching champions league or playing sports, i'm usually stressing out over passing coding interviews. reach out if there's any chance i can be helpful, with leetcode or in general :)",
    image: Arav,
    focus_area: focus_areas.hw_pi,
  },
  {
    name: "Chris Liu",
    email: "chris-liu",
    bio: "professional conclusion jumper and cloutmonger. if it ain't ice i don't want it. proficient with microsoft word and powerpoint.",
    image: Chris,
    focus_area: focus_areas.hw_pi,
  },
  {
    name: "Nikhil Kandkur",
    email: "nkandkur",
    bio: "Hey everybody! My name's Nikhil, I'm a second year studying CS and Education (CalTeach), and I'm excited to TA for the Leetcode 101 decal! In my free time, I like to code applications, to critique sitcoms, and biking.",
    image: Nikhil,
    focus_area: focus_areas.hw_pi,
  },
  {
    name: "Joel Jaison",
    email: "joeljaison13",
    bio: "Hi everyone! My name's Joel and I'm a sophomore studying computer science. In my free time I love running and playing the piano. I took this class last semester and had a great time, and I hope you all will as well!",
    image: Joel,
    focus_area: focus_areas.hw_pi,
  },
  {
    name: "Jonny Pei",
    email: "jonnypei",
    bio: "Hi! I'm Jonny, a freshman at Berkeley majoring in EECS. Beyond tinkering coding projects and making physics simulations, I enjoy playing league, watching anime/kdramas, water polo, and baking. I can't wait to meet y'all this fall!",
    image: Jonny,
    focus_area: focus_areas.hw,
  },
  {
    name: "Kathy Lee",
    email: "kathy960308",
    bio: "HI! I am senior and I am studying DS and CS.I am so glad to meet you guys. I can say that this class would be the MOST DIRECTLY HELPFUL class in UC Berkeley if you guys want to be a software engineer.",
    image: KathyLee,
    focus_area: focus_areas.hw,
  },
];
