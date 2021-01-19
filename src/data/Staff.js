import Temp from "../img/logo.png";

import MichaelJ from "../headshots/mike.jpeg";
import Kathy from "../headshots/kathy_wu.jpg";

import Ahan from "../headshots/ahan_sabharwal.jpg";
import Karthik from "../headshots/karthik_balakrishnan.jpg";
import Ankit from "../headshots/ankit_agarwal.jpg";
import Megan from "../headshots/megan_zhu.jpg";
import David from "../headshots/david_zhu.jpg";
import Kexin from "../headshots/kexin_shu.jpg";
import Leo from "../headshots/leo_kao.jpg";
import Ian from "../headshots/ian_chang.jpg";
import Kevin from "../headshots/kevin_zhu.png";
import Richard from "../headshots/richard_zhu.jpg";
import Rahul from "../headshots/rahul_shah.png";
import Samarth from "../headshots/samarth_goel.jpg";
import Priyam from "../headshots/priyam_mohanty.png";
import Luke from "../headshots/luke_liu.jpg";
import Artem from "../headshots/artem_tkachuk.jpeg";
import Harris from "../headshots/harris_shadmany.jpg";
import Julian from "../headshots/julian_meyn.jpg";
import Jessica from "../headshots/jessica_yu.jpg";

const focus_areas = {
  wd: "Web Development",
  hw_mi: "HW + Mock interviews",
  piazza: "Piazza",
  video: "Video walkthrough",
  head_logistics: "Head logistics TA",
  lecturer: "Lecturer"
}

export const facilitators = [
  {
    name: "Michael Jayasuriya",
    email: "mjayasur",
    bio: "Hi all! I’m Michael, a third year CS/Premed student, and I’m excited to be co-facilitating the first semester of this decal with Kathy! DM me on Discord or come to OH if you want to vent about toxicity in CS, chat about the Great British Baking Show, play TF2 with my little brother and I (my favorite class is the spy), discuss algorithms, or anything in between!",
    image: MichaelJ,
 
  },
  { name: "Kathy Wu", 
    email: "kathywu", 
    bio: "Hey everyone! My name is Kathy, and I'm a 3rd year CS major from Saratoga, CA. I'm super excited to be co-facilitating the leetcode decal with Michael this semester. Outside of classes, my hobbies include baking, pet goldfish ownership, and going on unnecessarily long walks timed to the length of my spotify playlists. HMU to talk about anything!", 
    image: Kathy
  },
];


export const teachingAssistants = [
  {
    name: "Ahan Sabharwal",
    email: "ahan.sabharwal",
    bio:
      "Hi everyone! I’m a junior studying Data Science and CS. I’m interested in systems, ML infra, and algorithms. Super excited to TA the course and help everyone with interview prep!",
    image: Ahan,
    focus_area: focus_areas.video
  },
  { name: "Karthik Balakrishnan", 
    email: "bkarthik", 
    bio: "I could tell you about myself, but where's the fun in that? Stalk me online and see what you can find out about me!", 
    image: Karthik,
    focus_area: focus_areas.hw_mi
  },
  { name: "Megan Zhu", 
    email: "meganzhu", 
    bio: "Hey! My name is Megan and I'm a third year Computer Science and Econ double major from Toronto, Canada. In my free time, I like to eat, sleep, eat some more and binge watch tv shows for hours on end. Feel free to hit me up with any questions and I'll try my best!", 
    image: Megan,
    focus_area: focus_areas.hw_mi
  },
  { name: "David Zhu", 
    email: "zidongzhu", 
    bio: "David is a junior studying Business and CS at Berkeley. Loves playing piano and telling bad jokes. Hmu for League or Anime anytime", 
    image: David,
    focus_area: ""
  },
  { name: "Kexin (Cassie) Shu", 
    email: "kexinshu", 
    bio: "My name is Kexin and I am a CS junior. I am TA-ing this class because I like solving LeetCode problems (even though some of them are tricky!). Let me know if you need any tips in hunting an internship, and I will try my best to help!", 
    image: Kexin,
    focus_area: focus_areas.hw_mi
  },
  { name: "Leo Kao", 
    email: "leok", 
    bio: "Hi! My name is Leo Kao and I’m a third-year international student from Taiwan, majoring in Computer Science. In my free time, I enjoy traveling and visiting restaurants to seek good food. Feel free to reach out to me if you have any questions, or when you feel overwhelmed.  ", 
    image: Leo,
    focus_area: focus_areas.wd
  },
  { name: "Ian Chang", 
    email: "iac", 
    bio: "Hi everyone, I’m Ian! I’m a junior EECS major hailing from Santa Monica, CA. Love the beach, thrilling sports, and music (Rock, EDM, and Rap). Excited to help teach the usefulness of algorithms and data structures this semester!", 
    image: Ian,
    focus_area: focus_areas.piazza
  },
  { name: "Kevin Zhu", 
    email: "zhu502846", 
    bio: "Hey everyone - I am a 3rd year from Chicago-ish and I'm super excited to help pilot this class! Outside of CS, some of my current hobbies include League, music, and indulging on nostalgic TV shows from the early 2000s/2010s. Feel free to talk to me about anything!", 
    image: Kevin,
    focus_area: focus_areas.lecturer
  },
  { name: "Richard Zhu", 
    email: "rszhu", 
    bio: "I want to help YOU pass interviews because if you don't, some Stanford kid will (yikes)", 
    image: Richard,
    focus_area: focus_areas.piazza
  },
  { name: "Rahul Shah", 
    email: "rsha256", 
    bio: "Hi, I'm Rahul! I'm from Princeton NJ and am now a freshman declared as a Computer Science major in L&S. I love coding, developing software (peep my github, rsha256), and teaching. I also love pandas and am always free if you'd like advice about any of the CS intro series here at Cal :)", 
    image: Rahul,
    focus_area: focus_areas.wd
  },
  { name: "Samarth Goel",
    email: "sgoel9",
    bio: "Hey everyone! My name's Samarth and I'm a sophomore studying CS and Business. In my free time I enjoy long walks, practicing guitar, and playing the drums in the Cal band.",
    image: Samarth,
    focus_area: focus_areas.wd
  },
  { name: "Priyam Mohanty", 
    email: "priyam.mohanty", 
    bio: "Hey everyone, I'm a senior majoring in CS and Public Health. Happy to help with anything ranging from algorithms to recruiting help.", 
    image: Priyam,
    focus_area: focus_areas.video
  },
  { name: "Luke Liu", 
    email: "lukeliu", 
    bio: "Hey! I am a sophomore majoring in CS & DS, and I am a proud Canadian from Toronto, Ontario. I am super passionate about teaching; please don’t hesitate to reach out about absolutely anything, course related or not. I look forward to meeting you all!", 
    image: Luke,
    focus_area: focus_areas.hw_mi
  },
  { name: "Artem Tkachuk", 
    email: "aat",
    bio: "Hi! I'm an international junior student at Berkeley studying CS and Math. I am also the current lead of Berkeley's Google Developer Student Club. I want to pursue an academic career and do research in machine learning, but am also interested in all things involving business. In my free time I play musical instruments (mainly guitars and piano), travel, listen to music, read, ski, and swim! If you are a transfer student, come talk to me!",
    image: Artem,
    focus_area: focus_areas.wd
  },
  {
    name: "Harris Shadmany",
    email: "harrisshadmany",
    bio: "Hello! I'm Harris and I'm a sophomore majoring in Computer Science & Statistics. Talk to me about: algorithms, recruiting (for quant finance), Taylor Swift, food, or Doctor Who. If you're a freshman or sophomore who feels like an impostor/inadequate among Berkeley's superstar CS community, really come talk to me - it feels like just yesterday I was in this position exactly and I'd like to help. ",
    image: Harris,
    focus_area: focus_areas.piazza
  },
  { name: "Julian Meyn", 
    email: "meyn", 
    bio: "Hey! I'm a 2nd year CS major from SoCal. In my free time I enjoy listening to music, watching old movies, and playing league with the boys. I'm looking forward to meeting you all!", 
    image: Julian,
    focus_area: focus_areas.wd
  },
  { name: "Jessica Yu", 
    email: "jessica.yu", 
    bio: "I like to Leet", 
    image: Jessica,
    focus_area: focus_areas.head_logistics
  },
];
