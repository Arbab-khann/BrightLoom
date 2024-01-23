import React, { createContext, useState } from "react";
export const Store = createContext();

function Dumydata(props) {
  const [data, setdata] = useState([
    {
      id: "1",
      type: "homeAbout",
      cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
      title: "Online Courses",
      desc: "The benefits of online courses are vast and have transformed the landscape of education. Online courses provide flexibility.",
    },
    {
      id: "2",
      type: "homeAbout",
      cover: "https://img.icons8.com/ios/80/000000/diploma.png",
      title: "Earn A Certificates",
      desc: ": Achieving certificates showcases your dedication and expertise in a specific area. It serves as a tangible testament to your skills.",
    },
    {
      id: "3",
      type: "homeAbout",
      cover: "https://img.icons8.com/ios/80/000000/athlete.png",
      title: "Learn with Expert",
      desc: "Learn from the best, accelerate your path with expert guidance.Dive deeper ,Master your craft with personalized feedback and.",
    },

    {
      id: "4",
      type: "awrapper",
      cover:
        "https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/80/ffffff/external-graduation-education-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png",
      data: "3,000",
      title: "SUCCESS STORIES",
    },
    {
      id: "5",
      type: "awrapper",
      cover: "https://img.icons8.com/ios/80/ffffff/athlete.png",
      data: "320",
      title: "TRUSTED TUTORS",
    },
    {
      id: "6",
      type: "awrapper",
      cover:
        "https://img.icons8.com/external-outline-icons-maxicons/80/ffffff/external-calender-insurance-outline-outline-icons-maxicons.png",
      data: "1,000",
      title: "SCHEDULES",
    },
    {
      id: "7",
      type: "awrapper",
      cover: "https://img.icons8.com/ios/80/ffffff/macbook-idea--v3.png",
      data: "587",
      title: "COURSES",
    },

    {
      id: "8",
      type: "coursesCard",
      duration: "6Months",
      cover: "../images/courses/c1.png",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      coursesName: " Software Engineering",
      status: "open",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",

      priceAll: "$100 All Course",
      pricePer: "$15 per month",
      courTeacher: [
        {
          dcover: "../public/images/testo/t1.webp",
          name: "by John Smith",
          totalTime: "50 lectures (190 hrs)",
        },
      ],
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Introduction to Software Engineering",
          desc: "Understanding the Role of Software Engineering in Technology, Historical Evolution of Software Engineering Importance of Software Engineering in Modern Applications.",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Software Development Life Cycle (SDLC)",
          desc: "Overview of SDLC,Requirement Analysis and Specification,System Design and Architecture,Coding and Implementation,Testing Strategies and Quality Assurance,Deployment and Maintenance",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.Programming Fundamentals",
          desc: "Overview of SDLC,Requirement Analysis and Specification,System Design and Architecture,Coding and Implementation,Testing Strategies and Quality Assurance,Deployment and Maintenance",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Software Design Principles",
          desc: "Design Patterns and Best Practices,Modular Design and Code Reusability,User Interface (UI) Design Principles,Error Handling and Exception Management",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Software Testing and Debugging",
          desc: "Types of Testing (Unit Testing, Integration Testing, System Testing),Test Driven Development (TDD),Debugging Techniques and Tools",
        },
      ],
    },
    {
      id: "9",
      type: "coursesCard",

      cover: "../images/courses/c2.png",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "Close",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      coursesName: "Enhancing Adobe Photoshop",
      courTeacher: [
        {
          dcover: "../public/images/testo/t2.webp",
          name: "by Ram Gurung",
          totalTime: "30 lectures (125 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$25 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Introduction to Adobe Photoshop",
          desc: "Overview of the Interface,Basic Tools and Functions,Understanding Layers.",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Advanced Photo Editing Techniques",
          desc: "Adjustment Layers,Portrait Retouching,Color Correction and Grading",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.Designing Graphics with Photoshop",
          desc: "Creating Banners and Posters,Typography and Text Effects,Designing Logos and Icons",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Specialized Features and Techniques",
          desc: "3D Modeling and Texturing,Creating GIFs and Animations,Smart Objects and Filters",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Project-Based Learning",
          desc: "Comprehensive Project,Feedback and Improvement,Final Project Presentation",
        },
      ],
    },
    {
      id: "10",
      type: "coursesCard",
      cover: "../images/courses/c3.png",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      coursesName: "HTML, CSS, and Javascript ",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "../public/images/testo/t3.webp",
          name: "by Saroj Nepal",
          totalTime: "50 lectures (50 hrs)",
        },
      ],
      priceAll: "$50 All Course",
      pricePer: "$5 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.HTML Fundamentals",
          desc: "Structure of an HTML Document,HTML Elements and Tags,Semantic HTML for Better Structure",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.CSS Styling Basics and Responsiveness",
          desc: "Introduction to Cascading Style Sheets (CSS),Selectors and Style PropertiesBox Model and Layout,Media Queries for Different Screen Sizes,Creating Responsive Navigation",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.JavaScript Essentials",
          desc: "Introduction to JavaScript,Variables, Data Types, and Operators,Control Flow and Loops",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Document Object Model (DOM) Manipulation",
          desc: "Accessing and Modifying HTML Elements,Event Handling with JavaScript,Dynamic Content Updates",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Final Project",
          desc: "Applying the Learned Concepts,Building a Responsive and Interactive WebsiteShowcasing the Final Project",
        },
      ],
    },
    {
      id: "11",
      type: "coursesCard",
      cover: "../images/courses/c4.png",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      coursesName: "Introducing to Programming with WordPress",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Prabin Thapa Mager",
          totalTime: "20 lectures (20 hrs)",
        },
      ],
      priceAll: "$30 All Course",
      pricePer: "$3 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.WordPress Basics",
          desc: "Overview of WordPress as a CMS,Understanding the WordPress Dashboard,Installing and Setting Up WordPress",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Theme and Plugin Development",
          desc: "Customizing Themes and Appearance,Introduction to WordPress Plugins,Creating Custom Plugins for Specific Needs",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.Content Management",
          desc: "Working with Posts and Page,Adding Multimedia Content,Managing Categories and Tags",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.PHP Customization",
          desc: "Basics of PHP in WordPress,Modifying Theme Files with PHP,Implementing Custom Functions",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Security, SEO, and Final Project",
          desc: "WordPress Security Best Practices,SEO for WordPress,Building a Customized WordPress Website (Final Project)",
        },
      ],
    },
    {
      id: "12",
      type: "coursesCard",
      cover: "../images/courses/c5.png",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      coursesName: "Introducing to Programming with ReactJS",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Sunil Bishowkaram",
          totalTime: "100 lectures (150 hrs)",
        },
      ],
      priceAll: "$300 All Course",
      pricePer: "$30 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Introduction to ReactJS",
          desc: "Understanding the ReactJS library, Virtual DOM and its significance,Setting up a ReactJS development environment",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Components and Prop",
          desc: "Creating and Using React Components,Passing data with Props,State and its role in React Components",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.Handling Events and Forms",
          desc: "React event handling, Working with forms in React, Controlled components and form validation",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.React Router",
          desc: "Introduction to React Router,Navigation in React applications,Implementing dynamic routes",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.State Management and Hooks",
          desc: "Managing state with useState,Exploring useEffect for side effects,Introduction to React Hooks for functional components",
        },
      ],
    },
    {
      id: "13",
      type: "coursesCard",
      cover: "../images/courses/c6.png",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      coursesName: "Learn Frontend Programming Language",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Sunil Bishowkaram",
          totalTime: "200 lectures (300 hrs)",
        },
      ],
      priceAll: "$500 All Course",
      pricePer: "$80 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Introduction To HTML Fundamentals",
          desc: "Understanding HTML tags and elements,Creating structured and semantic markup,Working with forms, tables, and other HTML features",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.CSS Styling",
          desc: "Styling HTML elements using CSS, Layouts and positioning,Responsive design and media queries",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.JavaScript Basics",
          desc: "Introduction to JavaScript programming,Variables, data types, and operators,Control flow and functions in JavaScript",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.DOM Manipulation",
          desc: "Interacting with the Document Object Model (DOM), Event handling and manipulation of HTML elements,Dynamic updates to web content with JavaScript",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Introduction to Frontend Frameworks",
          desc: "Overview of popular frontend frameworks (e.g., React, Angular, Vue),Choosing the right framework for a project,Building a simple project using a frontend framework",
        },
      ],
    },
    {
      id: "14",
      type: "coursesCard",
      cover: "../images/courses/c7.png",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      coursesName: "HTML / CSS Crash Course",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Price",
          totalTime: "20 lectures (50 hrs)",
        },
      ],
      priceAll: "$20 All Course",
      pricePer: "$2 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.InIntroduction to HTML",
          desc: "Understanding the role of HTML in web development, HTML document structure: doctype, head, body, HTML elements, tags, and attributes",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Basic HTML Tags",
          desc: "Headings, paragraphs, lists, and links,Images, forms, and tables, Semantic HTML for better structure",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.Introduction to CSS",
          desc: "Understanding the purpose of CSS in styling web pages,CSS syntax: selectors, properties, and values,Inline vs. internal vs. external CSS",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Styling with CSS",
          desc: "Text styling: fonts, colors, and sizes, Box model: margins, borders, padding,Positioning and layout techniques",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Responsive Design",
          desc: "Media queries for different screen sizes,Flexbox and Grid for layout responsiveness,Mobile-first design principles",
        },
      ],
    },
    {
      id: "15",
      type: "coursesCard",
      cover: "../images/courses/c8.png",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      coursesName: "Introducing to with JAVA",
      sstatus: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Understanding Java Fundamentals",
          desc: "ntroduction to Java: history, features, and applications,Setting up the Java development environment, Writing and executing your first Java program",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Java Basics and Syntax",
          desc: "Variables, data types, and operators in Java, Control flow statements: if, switch, loops, Functions and methods in Java",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.Object-Oriented Programming in Java",
          desc: "ntroduction to OOP concepts: classes and objects, Encapsulation, inheritance, and polymorphism,Constructors and destructors in Java",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Java Standard Libraries and APIs",
          desc: "Exploring commonly used Java packages, Working with collections, I/O operations, and exceptions, Overview of GUI programming with Java Swing",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Introduction to Java Technologies",
          desc: "Overview of Java frameworks and libraries,Basics of Java Enterprise Edition (Java EE) and Spring framework, Real-world examples and projects using Java",
        },
      ],
    },
    {
      id: "16",
      type: "coursesCard",
      cover: "../images/courses/c9.png",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      coursesName: "HTML / CSS / JavaScript Crash Course",
      status: "Open",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "50 lectures (50 hrs)",
        },
      ],
      priceAll: "$20 All Course",
      pricePer: "$3 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Introduction to Web Development",
          desc: "Overview of web technologies: HTML, CSS, and JavaScript,Understanding the role of each technology in web development, Setting up a basic development environment",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.HTML Fundamentals",
          desc: "Structure of an HTML document, HTML tags and elements,Creating hyperlinks, lists, and forms",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.CSS Styling Basics",
          desc: "Introduction to CSS and its syntax, Selectors, properties, and values,   Applying styles to HTML elements: colors, fonts, margins, and padding",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.JavaScript Essentials",
          desc: "Introduction to JavaScript: history and purpose, Variables, data types, and operators,Control flow: if statements, loops, and functions",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Building a Simple Web Page",
          desc: "Integrating HTML, CSS, and JavaScript, Creating interactive features with JavaScript,Responsive design principles for different screen sizes",
        },
      ],
    },
    //... (other course objects)

    {
      id: "17",
      type: "online",
      cover: "./images/courses/online/o1.png",
      hoverCover: "./images/courses/online/o1.1.png",
      coursesName: "UI/UX Design Courses",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "Open",
      duration: "6Months",

      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Introduction to UI/UX Design",
          desc: "Understanding the role of UI (User Interface) and UX (User Experience) in web and app design,Exploring successful UI/UX design examples,Overview of design principles and user-centered design",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Fundamentals of Graphic Design",
          desc: "Basics of graphic design elements: color, typography, and imagery, Composition and layout principles for effective visual communication, Introduction to design software/tools",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.User Research and Persona Creation",
          desc: "Importance of user research in the design process,Conducting user interviews and surveys,Creating user personas to guide design decisions",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Wireframing and Prototyping",
          desc: "Wireframing tools and techniques for sketching design ideas,Prototyping interactive designs for user testing,Iterative design processes for refinement",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Design Tools and Collaboration",
          desc: "Introduction to popular design tools (e.g., Adobe XD, Figma),Collaborative design processes and tools,Preparing design files for handoff to developers",
        },
      ],
    },
    {
      id: "18",
      type: "online",
      cover: "./images/courses/online/o2.png",
      hoverCover: "./images/courses/online/o2.1.png",
      coursesName: "Art & Design",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.ntroduction to Art Principles",
          desc: "Understanding the elements of art: line, shape, form, color, texture, etc,Exploration of various art styles and movements,Overview of the role of art in different cultures",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Drawing Fundamentals",
          desc: "Basic drawing techniques and exercises,Introduction to sketching and shading, Still life drawing and observational skills",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.Painting Techniques and Styles",
          desc: "Overview of different painting mediums (acrylics, oils, watercolors),Techniques for creating texture and depth in paintings,Exploration of various painting styles and genres",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Digital Art and Graphic Design",
          desc: "Introduction to digital art creation using graphic tablets or software,Basics of graphic design for visual communication,Creating digital illustrations and designs",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Portfolio Development",
          desc: "Building a professional art portfolio,Presentation and curation of art projects,Tips for showcasing art in online platforms and exhibitions",
        },
      ],
    },
    {
      id: "19",
      type: "online",
      cover: "./images/courses/online/o3.png",
      hoverCover: "./images/courses/online/o3.1.png",
      coursesName: "Computer Science",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Introduction to Computer Science",
          desc: "Overview of fundamental concepts and history, Understanding the role of computers in various fields,Introduction to algorithms and problem-solving",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Programming Fundamentals",
          desc: "Basics of programming languages (e.g., Python, Java, or JavaScript), Writing and debugging simple programs,Introduction to data types, variables, and control structures",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.Data Structures and Algorithms",
          desc: "Understanding common data structures (arrays, linked lists, trees, etc.), Algorithms for searching, sorting, and problem-solving,Time and space complexity analysis",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Web Development Basics",
          desc: "Introduction to HTML, CSS, and JavaScript, Basics of web development and design principles,Building a simple web application",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Introduction to Databases",
          desc: "Basics of relational databases,SQL queries for data manipulation and retrieval,Understanding the role of databases in software development",
        },
      ],
    },
    {
      id: "20",
      type: "online",
      cover: "./images/courses/online/o4.png",
      hoverCover: "./images/courses/online/o4.1.png",
      coursesName: "History & Archeologic",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Introduction to Historical Studies",
          desc: "Introduction to Historical Methodologies,Primary vs. Secondary Sources,Historical Research Skills",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Ancient Civilizations",
          desc: "Mesopotamia, Egypt, Greece, Rome, Cultural, Social, and Political Aspects,Archaeological Discoveries",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.Medieval and Renaissance Periods",
          desc: "Key Events and Figures,cultural Developments,Impact on the Modern World",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Archaeological Techniques",
          desc: "Excavation and Survey Methods, Technology in Archaeological Research,xPreservation Challenges",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Global History and Archaeology",
          desc: "Comparative Study of Historical Developments, Contemporary Issues in Research, Critical Analysis of Historical Interpretations",
        },
      ],
    },
    {
      id: "21",
      type: "online",
      cover: "./images/courses/online/o5.png",
      hoverCover: "./images/courses/online/o5.1.png",
      coursesName: "Software Engineering",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1. Software Engineering Fundamentals",
          desc: "Introduction to software engineering concepts and principles, Understanding the importance of software development in modern technology.",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Software Development Life Cycle (SDLC)",
          desc: "Overview of SDLC phases, including Agile and Waterfall methodologies,Emphasis on iterative development and adaptive planning.",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3. Programming Languages and Tools",
          desc: "Exploration of common programming languages and essential development tools,Introduction to version control systems for collaborative coding.",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Software Design and Architecture",
          desc: "Principles and best practices of software design,Understanding architectural patterns and design considerations",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5. Quality Assurance and Testing",
          desc: "OImportance of testing in software development,Overview of testing types, including Unit, Integration, and System testing",
        },
      ],
    },
    {
      id: "22",
      type: "online",
      cover: "./images/courses/online/o6.png",
      hoverCover: "./images/courses/online/o6.1.png",
      coursesName: "Information Software",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Overview of Information Software",
          desc: "Introduction to information software and its role in managing data,Understanding the significance of information systems in various industries.",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Database Management Systems (DBMS)",
          desc: "Basics of DBMS and its applications in organizing and retrieving data,Database design principles and normalization",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3. Data Analysis and Reporting",
          desc: "Techniques for analyzing and interpreting data using information software,Generating meaningful reports for decision-making",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Information Security",
          desc: "Importance of securing information and data privacy,Overview of encryption, access controls, and security best practices",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5. Emerging Trends in Information Software",
          desc: "Exploration of current trends such as Big Data, Machine Learning, and Artificial Intelligence,How information software adapts to technological advancements.",
        },
      ],
    },
    {
      id: "23",
      type: "online",
      cover: "./images/courses/online/o7.png",
      hoverCover: "./images/courses/online/o7.1.png",
      coursesName: "Health & Fitness",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Fundamentals of Health and Fitness",
          desc: "Introduction to the basic concepts of health and fitness,Understanding the importance of physical activity and a healthy lifestyle",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2. Nutrition and Diet Planning",
          desc: "Overview of essential nutrients and their role in maintaining health,Principles of creating a balanced and personalized diet plan",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3. Exercise Physiology",
          desc: "Understanding how the body responds to exercise and physical activity, Basics of cardiovascular fitness, strength training, and flexibility",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4. Mental Health and Well-being",
          desc: "Exploring the connection between physical and mental health,Strategies for stress management and promoting overall well-being.",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5. Fitness Technology and Trends",
          desc: "Introduction to technology in the fitness industry,Overview of popular fitness trends and how technology enhances the fitness experience",
        },
      ],
    },
    {
      id: "24",
      type: "online",
      cover: "./images/courses/online/o8.png",
      hoverCover: "./images/courses/online/o8.1.png",
      coursesName: "Marketing",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Introduction to Marketing",
          desc: "Understanding the core concepts and principles of marketing, Overview of the marketing mix: product, price, place, and promotion.",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2. Consumer Behavior",
          desc: "Analyzing how consumers make purchasing decisions,Factors influencing consumer behavior and market segmentation",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3. Digital Marketing Strategies",
          desc: "Overview of digital marketing channels and tools,Strategies for effective online marketing, including social media and content marketing.",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4. Branding and Advertising",
          desc: "Importance of branding in creating a distinct market identity,Strategies for developing effective advertising campaigns",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Market Research and Analytics",
          desc: "Conducting market research to understand market trends and consumer preferences,Utilizing data analytics for informed decision-making in marketing.",
        },
      ],
    },
    {
      id: "25",
      type: "online",
      cover: "./images/courses/online/o9.png",
      hoverCover: "./images/courses/online/o9.1.png",
      coursesName: "Graphic Design",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "close",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1. Fundamentals of Graphic Design",
          desc: "Introduction to basic design principles, color theory, and typography,Understanding the visual elements that contribute to effective design.",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Graphic Design Software",
          desc: "Proficiency in popular graphic design tools like Adobe Photoshop, Illustrator, and InDesign, Hands-on exercises and projects to apply software skills.",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3. Logo and Branding Design",
          desc: "Creating impactful logos and understanding the role of branding in design,Techniques for establishing a cohesive visual identity for brands.",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4. Web and User Interface (UI) Design",
          desc: "Basics of web design and UI principles,Designing user-friendly interfaces for websites and applications",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Print and Digital Media Design",
          desc: "Design considerations for both print and digital media,Project-based learning for designing materials such as brochures, banners, and online graphics",
        },
      ],
    },
    {
      id: "26",
      type: "online",
      cover: "./images/courses/online/o10.png",
      hoverCover: "./images/courses/online/o10.1.png",
      coursesName: "Classic Music",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "close",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Introduction to Classical Music",
          desc: "Overview of the historical development and major periods in classical music,Understanding the characteristics of classical compositions",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Notation and Reading Sheet Music",
          desc: "Basics of musical notation and reading sheet music,Introduction to key signatures, time signatures, and musical symbols",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.Famous Classical Composers",
          desc: "Study of renowned classical composers such as Mozart, Beethoven, Bach, and others,Analysis of their most significant compositions.",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Musical Forms and Styles",
          desc: "Exploration of various musical forms in classical music (sonata, symphony, concerto),Recognizing distinct styles within classical compositions",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5. Appreciation and Critique",
          desc: "Developing listening skills for critical appreciation of classical pieces, Understanding the historical and cultural context of classical music.",
        },
      ],
    },
    {
      id: "27",
      type: "online",
      cover: "./images/courses/online/o11.png",
      hoverCover: "./images/courses/online/o11.1.png",
      coursesName: "Business Administration",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "Open",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1.Fundamentals of Business",
          desc: "Introduction to key concepts and principles in business administration,Understanding the role of businesses in various sectors.",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Organizational Management",
          desc: "Principles of organizational structure, leadership, and management,Effective communication and decision-making within organizations",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3.Marketing and Sales",
          desc: "Basics of marketing strategies and sales techniques,Understanding customer behavior and market trends",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.Financial Management",
          desc: "Introduction to financial statements and budgeting, Principles of financial management and investment",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.usiness Ethics and Sustainability",
          desc: "mportance of ethical practices in business,Overview of sustainable business practices and corporate social responsibility",
        },
      ],
    },
    {
      id: "28",
      type: "online",
      cover: "./images/courses/online/o12.png",
      hoverCover: "./images/courses/online/o12.1.png",
      coursesName: "Web Management",
      courseImage: "../public/images/course-bg-card(1).png",
      progressImage1: "../public/images/progress img.svg",
      progressImage2: "../public/images/progress img2.svg",
      status: "close",
      duration: "6Months",
      image:
        "https://img.freepik.com/free-photo/women-education-notes-studying-nature-workplace_1418-88.jpg?w=740&t=st=1706016089~exp=1706016689~hmac=aa021361fe942ad433524b4a98f0a3fa9a8d64f1c7b0e6cab8844e067a84a876",
      courTeacher: [
        {
          dcover: "./images/back.webp",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "$200 All Course",
      pricePer: "$40 per month",
      syllabus: [
        {
          id: "1",
          type: "syllabusDetails",
          title: "1. Fundamentals of Business",
          desc: "introduction to key concepts and principles in business administration,Understanding the role of businesses in various sectors.",
        },
        {
          id: "2",
          type: "syllabusDetails",
          title: "2.Organizational Management",
          desc: "Principles of organizational structure, leadership, and management,Effective communication and decision-making within organizations.",
        },
        {
          id: "3",
          type: "syllabusDetails",
          title: "3. Marketing and Sales",
          desc: "Basics of marketing strategies and sales techniques,Understanding customer behavior and market trends.",
        },
        {
          id: "4",
          type: "syllabusDetails",
          title: "4.JFinancial Management",
          desc: "Introduction to financial statements and budgeting,Principles of financial management and investment",
        },
        {
          id: "5",
          type: "syllabusDetails",
          title: "5.Business Ethics and Sustainability",
          desc: "Importance of ethical practices in business,Overview of sustainable business practices and corporate social responsibility",
        },
      ],
    },
    //... tem

    {
      id: "29",
      type: "team",
      cover: "./images/team/t1.webp",
      name: "Ph.D Adrian Molises",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      id: "30",
      type: "team",
      cover: "./images/team/t2.webp",
      name: "Ph.D Arthur MaGregor",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      id: "31",
      type: "team",
      cover: "./images/team/t3.webp",
      name: "Ph.D Anna Hanzen",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      id: "32",
      type: "team",
      cover: "./images/team/t4.webp",
      name: "Ph.D Brian Wooden",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      id: "33",
      type: "team",
      cover: "./images/team/t5.webp",
      name: "Ph.D Adrian Molises",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      id: "34",
      type: "team",
      cover: "./images/team/t6.webp",
      name: "Ph.D Arthur MaGregor",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      id: "35",
      type: "team",
      cover: "./images/team/t7.webp",
      name: "Ph.D Anna Hanzen",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      id: "36",
      type: "team",
      cover: "./images/team/t8.webp",
      name: "Ph.D Brian Wooden",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    //... (other team member objects)

    {
      id: "37",
      type: "price",
      name: "BASIC PLAN",
      price: "49K",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: "38",
      type: "price",
      name: "BEGINNER PLAN",
      price: "79K",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: "39",
      type: "price",
      name: "PREMIUM PLAN",
      price: "109k",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: "40",
      type: "price",
      name: "ULTIMATE PLAN",
      price: "149K",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    //... (other price plan objects)

    {
      id: "41",
      type: "faq",
      title: "How to Enroll This Online Courses?",
      desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      id: "42",
      type: "faq",
      title: "Where It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      id: "43",
      type: "faq",
      title: "How It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      id: "44",
      type: "faq",
      title: "How to Enroll This Online Courses?",
      desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      id: "45",
      type: "faq",
      title: "Where It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      id: "46",
      type: "faq",
      title: "How It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    //... (other FAQ objects)

    {
      id: "47",
      type: "admin",
      date: "JAN. 18, 2021",
      com: "3 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: "../images/blog/b1.webp",
    },

    //... (other blog post objects)

    {
      id: "48",
      type: "testimonal",
      name: "Sarah Jones",
      post: "MARKETING MANAGER",
      desc: "Meet Sarah Jones, a whirlwind of creativity and data-driven strategy.  Sarah started her marketing journey with a hunger to learn and a knack for storytelling. ",
      cover: "../public/images/team/t3.webp",
    },
    {
      id: "49",
      type: "testimonal",
      name: "Farid",
      post: "MANAGER",
      desc: "Frid wasn't your typical manager. Inherited a team in freefall - missed deadlines, low morale, and rampant finger-pointing - she could have easily walked away. But Farid saw potential beneath the chaos.",
      cover: "../public/images/team/t4.webp",
    },
    {
      id: "50",
      type: "testimonal",
      name: "ROGER",
      post: "MANAGER",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cover: "../public/images/team/t2.webp",
    },
    //... (other testimonial objects)
    //   };
  ]);

  return (
    <div>
      <Store.Provider value={[data, setdata]}>{props.children}</Store.Provider>
    </div>
  );
}

export default Dumydata;
