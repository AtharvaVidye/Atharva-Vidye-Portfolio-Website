import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A highly skilled Python developer with a proven track record of delivering innovative solutions that significantly enhance team efficiency. I have received multiple star awards for automating complex billing tasks and developed an opcode generator that dramatically reduced processing time from 8 hours to just 15 minutes. My expertise extends to automating business processes, simplifying the rating process, and contributing to academic research with the publication of an IEEE paper on IoT-based face recognition robots, presented at the 7th National Conference on ACCET 2021.`;

export const ABOUT_TEXT = `I’m Atharva Vidye, a dedicated and versatile Python developer with a passion for crafting efficient and innovative solutions. With 2.5 years of professional experience, I’ve honed my skills across a range of technologies including Python, Django, Flask, and various data management tools. My journey in software development began with a keen interest in problem-solving and has evolved into a career focused on delivering high-quality applications and automating complex processes.

Throughout my career, I’ve had the opportunity to work on diverse projects, from developing Django-based applications to integrating machine learning models and optimizing database performance. My roles at Vodafone Intelligent Solution and Pi-Grass Labs have provided me with valuable experience in automation, web development, and collaborative team efforts.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Software Engineer",
    company: "Vodafone Intelligent Solutions",
    description: `Automated repetitive tasks using Python scripts, increasing efficiency within the team's workflow processes. Collaborated with cross-functional teams to design, develop, and implement high-quality Python applications. Enhanced user experience by designing intuitive user interfaces using modern web technologies. Integrated machine learning models into Python applications for advanced data analysis and predictions. Supported business objectives by developing custom reporting tools using Python libraries like Pandas.`,
    technologies: ["Python", "Django", "Flask", "Pandas", "SQL" , "Unix Schell Scripting" , "Splunk Dashboard Development"],
  },
  {
    year: "2022",
    role: "Python Developer",
    company: "Pi-Grass Labs Pvt Ltd",
    description: `Increased code reusability with modular programming techniques, facilitating faster development cycles. Optimized database queries for improved performance. Designed and implemented scalable applications for data extraction and analysis. Improved application performance by optimizing Python code and implementing best practices. Ensured timely delivery of high-quality products through diligent project management.`,
    technologies: ["Python", "Django", "Database Management", "Scalable Applications"],
  },
];


export const PROJECTS = [
  {
    title: "IMDB Stream Platform API",
    image: project2,  // Replace with the actual image file for this project
    description:
      "IMDB DRF Backend is a Django and DRF-based service for managing IMDB data. It offers a robust API for CRUD operations on movie records, advanced search, pagination, and user reviews. Secure endpoints with token-based authentication and interactive API documentation.",
    technologies: ["Django", "DRF", "Python"],
  },
  {
    title: "Cloud-Native Resource Monitoring App",
    image: project1,  // Replace with the actual image file for this project
    description:
      "Developed and deployed a cloud-native resource monitoring app on Kubernetes using Python.",
    technologies: ["Python", "Kubernetes", "Docker"],
  },
  {
    title: "IoT-based Face Recognition Robot",
    image: project3,  // Replace with the actual image file for this project
    description:
      "IoT robot that can recognize a person’s face, greet the person with their name if in the database, record their temperature, and store all information on Google Sheets using Integromat.",
    technologies: ["IoT", "Face Recognition", "Google Sheets", "Integromat"],
  },
  {
    title: "News Web Application",
    image: project4,  // Replace with the actual image file for this project
    description:
      "A web application to grab and display daily news.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Chinchwad, Pune - 411033 ",
  phoneNo: "+91 70307 93200",
  email: "atharvavidye2001@gmail.com",
};
