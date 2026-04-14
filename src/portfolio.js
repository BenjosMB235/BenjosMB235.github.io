/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mbaïram Benjamin Beassoum",
  title: "Hi all, I'm Benjamin",
  subTitle: emoji(
    "Full-stack developer and enthusiast of Data Science & AI 🚀. With a bachelor’s degree in Computer Engineering (with honors), I build web and mobile applications using Java, Flutter, and React, as well as ML models using Python and Scikit-learn. My goal: to transform agriculture in Chad through artificial intelligence."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SvtnQj0DgkEKTpDbPPCOPGGmc1RnCzBJ/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BenjosMB235",
  linkedin: "https://www.linkedin.com/in/benjos235/",
  gmail: "mbaibenjsos@gmail.com",
  facebook: "https://www.facebook.com/Benjos235",
  //gitlab: "https://gitlab.com/",
  // medium: "https://medium.com/",
  // stackoverflow: "https://stackoverflow.com/users/10422806/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ASPIRING ML ENGINEER & FULL-STACK DEVELOPER PASSIONATE ABOUT AI FOR AGRICULTURE",
  skills: [
    emoji("⚡ Build and deploy machine learning models for agricultural prediction and classification"),
    emoji("⚡ Develop full-stack web and mobile applications using Java, Flutter, React and PHP"),
    emoji("⚡ Analyze and visualize data with Python (Pandas, Scikit-learn, Matplotlib) and Power BI"),
    emoji("⚡ Design and manage relational databases with PostgreSQL, MySQL and Supabase"),
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { 
      skillName: "Python",        
      fontAwesomeClassname: "fab fa-python"   
    },
    { 
      skillName: "Java",          
      fontAwesomeClassname: "fab fa-java"     
    },
    { 
      skillName: "R",             
      fontAwesomeClassname: "fab fa-r-project"
    },
    { 
      skillName: "SQL / PostgreSQL", 
      fontAwesomeClassname: "fas fa-database"
    },
    { 
      skillName: "React.js",      
      fontAwesomeClassname: "fab fa-react"    
    },
    { 
      skillName: "HTML5",         
      fontAwesomeClassname: "fab fa-html5"    
    },
    { 
      skillName: "CSS3",          
      fontAwesomeClassname: "fab fa-css3-alt" 
    },
    { 
      skillName: "Node.js",       
      fontAwesomeClassname: "fab fa-node"     
    },
    { 
      skillName: "Flutter",       
      fontAwesomeClassname: "fab fa-flutter"  
    },
    { 
      skillName: "Docker",        
      fontAwesomeClassname: "fab fa-docker"   
    },
    { 
      skillName: "Git / GitHub",  
      fontAwesomeClassname: "fab fa-git-alt"  
    },
    { 
      skillName: "Firebase",      
      fontAwesomeClassname: "fas fa-fire"     
    },
    { 
      skillName: "Supabase",      
      fontAwesomeClassname: "fas fa-database" 
    },
    { 
      skillName: "Linux",         
      fontAwesomeClassname: "fab fa-linux"    
    },
    { 
      skillName: "npm",           
      fontAwesomeClassname: "fab fa-npm"      
    },
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "CEFOD Business School",
      logo: require("./assets/images/logoCBS.png"),
      subHeader: "Professional Bachelor's Degree in Computer Engineering",
      duration: "September 2022 – April 2025",
      desc: "Valedictorian — Upper Honors (14.85/20). Thesis defense: 18/20.",
      descBullets: [
        "Specialization in software development, databases, and networking",
        "Final year thesis defended with distinction"
      ]
    },
    {
      schoolName: "Lycée Sacré-Cœur",
      logo: require("./assets/images/lscLogo.png"),
      subHeader: "Baccalaureate Series D",
      duration: "June 2022",
      desc: "Upper Honors (14.94/20) — Mathematics: 14/20.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Data Science / Machine Learning", progressPercentage: "65%" },
    { Stack: "Backend Development (Java, Python, PHP)", progressPercentage: "70%" },
    { Stack: "Frontend Development (React, HTML/CSS)", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Banking Digital Intern",
      company: "Orabank",
      companylogo: require("./assets/images/orabankLogo.png"),
      date: "march 2026 – Present",
      desc: "Software development and maintenance, data collection and cleaning, day-to-day technical support.",
      descBullets: [
        "Development and maintenance of internal applications",
        "Data collection, cleaning, and storage"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Air France",
      companylogo: require("./assets/images/AirFranceLogo.png"),
      date: "Juin 2025 – August 2025",
      desc: "Design of an electronic document management application to optimize internal archiving.",
      descBullets: [
        "Implementation of a PostgreSQL database using Supabase",
        "XML/Java user interface; automation of document workflow (upload, indexing, search)"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Lalekou Informatique",
      companylogo: require("./assets/images/lalekouInfLogo.png"),
      date: "Juillet 2023 – Sep 2023",
      desc: "Custom website development and training for computer science students.",
      descBullets: [
        "IT equipment maintenance",
        "Curriculum design and coordination with instructors"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "AI MODELS AND APPLICATIONS I HAVE DEVELOPED FOR THE AGRICULTURAL SECTOR",
  projects: [
    {
      image: require("./assets/images/R1.png"),
      projectName: "YieldPredictor",
      projectDesc: "Machine learning model to predict agricultural yields in Chad using climate and agronomic data.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/BenjosMB235/Prediction-rendement-Mil-Sorgho-Tchad" }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/R2.png"),
      projectName: "StressHydrique",
      projectDesc: "Classification model to detect crop water stress using satellite imagery and weather data.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/BenjosMB235/stress-hydrique-tchad" }
      ]
    },
    {
      image: require("./assets/images/R3.jpg"),
      projectName: "NexusDoc",
      projectDesc: "Electronic document management application developed during the Air France internship — PostgreSQL, Supabase, Java/XML.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/BenjosMB235/NexusDoc" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Scholarships, awards and training that mark my journey",
  achievementsCards: [
    {
      title: "Aspire Leader Program – Harvard (Aspire Institute)",
      subtitle: "2026 recipient of the international leadership and development program at the Aspire Institute (Harvard).",
      image: require("./assets/images/aspire.jpg"),
      imageAlt: "Aspire Institute Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1jICKUmv09ip-J4FkLJzIxJy5U2kMeJvI/view?usp=sharing"
        },
      ]
    },
    {
      title: "Ashinaga Scholarship for Africa (IAA)",
      subtitle: "2025 scholar of the Ashinaga Initiative for Africa — selective program (1 candidate per country out of 1900).",
      image: require("./assets/images/ashinaga.png"),
      imageAlt: "Ashinaga Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1mf2Y2n4rRjjcPICxOJivZthwyDpUmDj4/view?usp=sharing"
        },
      ]
    },
    {
      title: "Machine Learning A-Z – Udemy (2025)",
      subtitle: "43 hours of ML training with Python & R, 5 coding exercises",
      image: require("./assets/images/udemy.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1ZJlu0iANkXm6aHVGOmKVnrlUq3CwpWpL/view?usp=sharing"
        },
      ]
    },
    {
      title: "Data Analyst with Python (2024)",
      subtitle: "36 hours of data training with Python, 5 projects",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1ZhSHIFOgwCG2P72-7a_K6-dpBsGQrLK0/view?usp=sharing"
        },
      ]
    }
  ],
  display: true
};

// Volunteer Section

const volunteerSection = {
  title: "Volunteering",
  subtitle: "GIVING BACK TO THE COMMUNITY THROUGH TECHNOLOGY AND LEADERSHIP",
  display: true,
  volunteering: [
    {
      role: "Organization Committee Member",
      organization: "IndabaX Chad",
      location: "N'Djaména, Chad",
      date: "2024 – 2025",
      desc: "Member of the organizing committee of the 1st and 2nd editions of the first AI conference in Chad.",
      descBullets: [
        "Partnership prospecting and development",
        "Budget management (2M+ FCFA)",
        "Coordination of 120 participants (2024) and 240 participants (2025)",
        "Event management: conference venue sourcing"
      ],
      tags: ["AI Conference", "Event Management"]
    },
    {
      role: "Leadership & Excellence Program",
      organization: "Ashinaga Senegal",
      location: "Senegal / Online",
      date: "July 2025 – Present",
      desc: "International scholarship and leadership program — 1 candidate selected per country out of 1900 applicants.",
      descBullets: [
        "Academic preparation: organizational skills, English",
        "Personal development: leadership, cultural integration",
        "Professional development: community development, project management"
      ],
      tags: ["Leadership", "Scholarship"]
    },
    {
        role: "Community Action Volunteer — IMP'ACT Program",
        organization: "Ashinaga Senegal - OVA (Organisation des Volontaires d'Afrique)",
        location: "N'Djaména, Chad",
        date: "March 2026",
        desc: "Designed and delivered a hands-on training session on finding reliable educational and professional opportunities online, as part of OVA and Ashinaga's IMP'ACT community mobilization program.",
        descBullets: [
          "Trained 17 participants including students and young community leaders",
          "Covered 3 modules: effective search techniques, information reliability verification, and digital professional identity",
          "Conducted practical exercises to build concrete digital literacy skills",
          "Raised awareness on online scams and how to identify trustworthy opportunities"
        ],
        tags: ["Community Impact", "Digital Literacy", "Training"]
      }
  ]
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a project, a collaboration, or just say hi? My inbox is always open.",
  number: "+235 60 59 65 58",
  email_address: "mbaibenjsos@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  volunteerSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
