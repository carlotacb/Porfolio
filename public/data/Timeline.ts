export interface TimelineItem {
  active: boolean;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  icon: string;
  website?: string;
  instagram?: string;
  linkedin?: string;
}

export const EducationTimeline: TimelineItem[] = [
  {
    active: true,
    company: "UPC (FIB)",
    position: "PhD",
    startDate: "09/2025",
    description: "",
    icon: "upc",
    instagram: "https://www.instagram.com/fib.upc/",
    linkedin: "https://www.linkedin.com/school/universitat-politecnica-de-catalunya/",
  },
  {
    active: false,
    company: "UPC (FIB)",
    position: "Master in informatics engineering",
    startDate: "09/2019",
    endDate: "02/2024",
    description:
      "Master with bases in the different tech specialties: Hardware, Information Technologies, Software, and Computing. And also with bases on direction and management, to be able to work as lead or product. <br /><br /> Developing a master thesis about event organizations, with the backend in Django (Python) using hexagonal architecture, and the frontend in Expo (Typescript). <br /><br /> The master's was extended in time due to the extension of the Master's Thesis because of work and personal issues.",
    icon: "upc",
    website:
      "https://www.fib.upc.edu/en/studies/masters/master-informatics-engineering",
    instagram: "https://www.instagram.com/fib.upc/",
    linkedin:
      "https://www.linkedin.com/school/universitat-politecnica-de-catalunya/",
  },
  {
    active: false,
    company: "TU Wien",
    position: "Master in informatics engineering (Erasmus)",
    startDate: "09/2021",
    endDate: "02/2022",
    description:
      "During my master's, I did an Erasmus in Vienna to start my master thesis, as I was also working and due to some issues with my professor, I was unable to present the thesis in the Erasmus period, but my period abroad was great to learn about cultures, languages and more.",
    icon: "tuwien",
    website:
      "https://www.tuwien.at/en/studies/international/incoming-exchange-students",
    instagram: "https://www.instagram.com/tu_wien/",
    linkedin: "https://www.linkedin.com/school/tuwien/posts/?feedView=all",
  },
  {
    active: false,
    company: "UPC (FIB)",
    position: "Bachelor degree in informatics engineering",
    startDate: "09/2013",
    endDate: "06/2019",
    description:
      "Bases on project management, Multi-tier architecture, Design Patterns, Object-Oriented Programming and Software Architecture. Prepared for being a Full-Stack developer and work with agile methodologies.",
    icon: "upc",
    website:
      "https://www.fib.upc.edu/en/studies/bachelors-degrees/bachelor-degree-informatics-engineering",
    instagram: "https://www.instagram.com/fib.upc/",
    linkedin:
      "https://www.linkedin.com/school/universitat-politecnica-de-catalunya/",
  },
  {
    active: false,
    company: "FERT Batxillerat",
    position: "Technological Baccalaureate",
    startDate: "09/2011",
    endDate: "06/2013",
    description:
      "With technical drawing, physics, chemistry and mathematics subjects selected as optionals.",
    icon: "fert",
    website: "https://fertbatxillerat.com/",
    instagram: "https://www.instagram.com/fertbatx/",
  },
  {
    active: false,
    company: "Col·legi Canigó",
    position: "Primary and Secondary Education",
    startDate: "09/2002",
    endDate: "06/2011",
    description: "",
    icon: "canigo",
    website: "https://www.fomento.edu/canigo/",
    instagram: "https://www.instagram.com/canigo_school/",
    linkedin:
      "https://www.linkedin.com/company/fomento-de-centros-de-ensenanza/",
  },
];

export const ProfessionalTimeline: TimelineItem[] = [
  {
    active: true,
    company: "UPC (GESSI)",
    position: "Researcher",
    startDate: "07/2025",
    description:
      "Starting out my predoctoral period by learning about the research world and starting to work in papers of the research group (GESSI)",
    icon: "upc",
    website: "https://gessi.upc.edu/en",
  },
  {
    active: true,
    company: "UPC (FIB)",
    position: "Associate professor",
    startDate: "02/2022",
    description:
      "Professor in a Web Applications and Services subject (3rd-year students from Software Engineer specialty), having a group of around 20 students. In the first half of the semester, they work in pairs, learning the basis of web development. In the second half, they work in groups of 4 by developing a project in 3 different assignments: <br /> <br /> 1. <b>Backend</b>, develop a full system copying an existing one, for example, HackerNews (with an MVC server-side framework that works without a client, for example: Django, Spring, Express, Ruby on Rails...). <br /> 2. <b>API</b>, modify the backend from the last assignment to convert it to API, endpoints returning JSON. Also, creating good documentation using swagger, and defining the structure and the error codes correctly. <br /><br /> 3. <b>Frontend</b>, using the endpoints from the 2nd assignment, create a front-end using JavaScript frameworks (React, Angular, or Vue). <br /><br /> My work as a teacher is mainly to guide, mentor, correct, and give feedback about how they could do a better job, so they can be great engineers.",
    icon: "upc",
    website: "https://www.fib.upc.edu/en",
    instagram: "https://www.instagram.com/fib.upc/",
    linkedin:
      "https://www.linkedin.com/school/universitat-politecnica-de-catalunya/",
  },
  {
    active: true,
    company: "ESADE",
    position: "Associate professor",
    startDate: "02/2025",
    description:
      "Professor in Programming with Data subject in the Bachelor in Business and Artificial Intelligence (1st-year students), having around 80 students. Teaching about python, object-oriented programming and good practices.",
    icon: "esade",
    website: "https://www.esade.edu/bachelor/en/programmes/double-degree-business-administration-artificial-intelligence-business",
    instagram: "https://www.instagram.com/_esade/",
    linkedin: "https://www.linkedin.com/school/esade/",
  },
  {
    active: false,
    company: "HackUPC",
    position: "Hackathon organizer",
    startDate: "02/2019",
    endDate: "08/2025",
    description:
      "During my years at Hackers@UPC, I worked with my team to run different events, but we worked harder, almost for a year, for the six editions of HackUPC. <br/><br/> Starting my journey in HackUPC 2019, I was a member of the logistics team. In HackUPC 2020/21 (canceled by COVID) I was promoted to logistics director, leading a team of 4 people. In HackUPC 2022 I was promoted to director, as well as in HackUPC 2023 (you can see more information in the specific card about it). And, in HackUPC 2024 we gave the lead to the following ones, going back to lead the logistics team, the web development team, and the finances. Finally, in 2025 I did a support role in the logistics and web development teams while leading the finances.",
    icon: "hackers",
    website: "https://hackupc.com/",
    instagram: "https://www.instagram.com/hackupc",
    linkedin: "https://linkedin.com/company/hack-upc",
  },
  {
    active: false,
    company: "Localboss",
    position: "Full-Stack Software Engineer and Product Owner",
    startDate: "02/2024",
    endDate: "07/2024",
    description:
      "As the first employee of the company, I've been involved in the different projects of the company. Working in Django (Python) for all the backend (common for all the projects). Starting from scratch, an internal CRM built in Next.js (Typescript) with all the needs, linked to external APIs (for example Revenue Cat), and a web platform for big clients. In DevOps, managing all in Google Cloud, mainly with Cloud Run. <br /><br /> As the product owner, I'm also involved in the non-development part, by defining all the needs of the projects, helping with the roadmap, and defining the goals and new features that the systems will have. <br /><br /> Lastly, I've also led external contractors, for the App, developed in Flutter, and also for the landing page, developed in Next.js (JavaScript) with Tailwind.",
    icon: "localboss",
    website: "https://localboss.app/",
    instagram: "https://www.instagram.com/Localboss_app",
    linkedin: "https://www.linkedin.com/company/localboss/posts/?feedView=all",
  },
  {
    active: false,
    company: "HackUPC",
    position: "Hackathon director",
    startDate: "07/2021",
    endDate: "07/2023",
    description:
      "During my years at Hackers@UPC, I had the opportunity to be the leader of the team for two years. After the pandemic, we faced the challenge of bringing back HackUPC at its best with the challenge of leading a team with a lack of motivation where everyone works as volunteers, without a salary. These two years we were able to do two editions. <br /><br /> <b>HackUPC 2022</b>: Co‑directed a team of 22 members, to organize Europe’s largest student hackathon, helping it regain momentum after the pandemic. Our maximum challenge was to motivate the team and lead them to create something amazing for our participants. <br /><br /><b>HackUPC 2023</b>: Co‑directed a team of 22 members, after being unable to find a successor, me and my co-director, we decided to run it again with the help of a 3rd member. Due to the lack of members with experience (since almost everyone from the previous team, left), I was also in charge of the logistics and finance team, to make the event grow back into a healthy, self‑sustaining organization. And after this edition, we can say we managed to create a healthy team, with the motivation and the knowledge to make HackUPC the greatest hackathon in Europe.",
    icon: "hackers",
    website: "https://hackupc.com/",
    instagram: "https://www.instagram.com/hackupc",
    linkedin: "https://linkedin.com/company/hack-upc",
  },
  {
    active: false,
    company: "Mundimoto",
    position: "Full-Stack Software Developer",
    startDate: "08/2021",
    endDate: "05/2023",
    description:
      "I had different roles during my time here. I started with the engineering team (a 5-person team). After the restructuring, I was part of the sales and operations squads. <br /><br /> In the first steps, we started planning an internal tool for the company, created from scratch. Also, I was in charge of the first rebranding of compramostumoto.es <br /><br /> As part of the sales team, we had the responsibility of making the sales process of the motorbike more automatic, working side by side with the commercial team (our stakeholders). We created an internal ERP with a hexagonal architecture approach, using Django (Python) for the backend and Next.js (with Typescript) for the frontend. Also, we had the data part, we created dashboards (using SQL) in Metabase. In addition, we've rebuilt the company website with the new stack, Next.js, and Django. <br /><br /> After that, I joined the operations team, where we had the responsibility for the operational transactions, so the systems we built were only for the company members: mechanics, photographers... <br /><br /> This job has allowed me to work in different areas due to the creation of something from scratch, having roles like product owner, allowing me to understand the needs of the stakeholders to create the best features in the system, and full-stack developer building everything we plan.",
    icon: "mundimoto",
    website: "https://mundimoto.com/es",
    instagram: "https://www.instagram.com/mundimoto",
    linkedin:
      "https://www.linkedin.com/company/mundimoto/?originalSubdomain=es",
  },
  {
    active: false,
    company: "UOC",
    position: "Associate professor",
    startDate: "09/2021",
    endDate: "02/2022",
    description:
      "During my Erasmus period, in Vienna, I was an associate professor in the subject of web development where the students did different deliverables using Java. The subject was taught in English despite the university being from Catalonia, due to the international students we had. <br /><br /> My work was mainly to correct and give feedback about how they could do a better job.",
    icon: "uoc",
    website: "https://www.uoc.edu/en",
    instagram: "https://www.instagram.com/uocuniversitat",
    linkedin: "https://www.linkedin.com/school/uoc/posts/?feedView=all",
  },
  {
    active: false,
    company: "HP",
    position: "Graduate 3D software engineer",
    startDate: "09/2019",
    endDate: "08/2021",
    description:
      "Member of the Software team inside the 3D organization, being a full-stack developer in different projects. Working mainly in React (Typescript) and Go.",
    icon: "hp",
    website: "https://www.hp.com/es-es/printers/3d-printers.html",
    instagram: "https://www.instagram.com/hpespana/",
    linkedin: "https://www.linkedin.com/company/hp/posts/?feedView=all",
  },
  {
    active: false,
    company: "Studio Isadora",
    position: "Technical assistant",
    startDate: "03/2020",
    endDate: "07/2021",
    description:
      "Due to the COVID-19 pandemic, I helped my dance school lead the digital transformation to be able to have distance classes. First, from home, by giving online support and leading all the professors, and then, when we were able to go back to the classes to make sure we could do hybrid lessons by installing all the necessary material.",
    icon: "isadora",
    website: "http://studioisadora.com/",
    instagram: "https://www.instagram.com/studioisadora",
  },
  {
    active: false,
    company: "UPC (FIB)",
    position: "Associate professor",
    startDate: "02/2021",
    endDate: "06/2021",
    description:
      "Professor in databases subject (2nd-year students) teaching about SQL, Triggers and procedures, and JDBC. In every class the students needed to do a deliverable, starting with a little quiz at the beginning of the class with a small question about the previous session, and then, during the remaining time, they started a deliverable about a new topic. <br /><br/> My work as a teacher is mainly to guide, mentor, correct, and give feedback about how they could do a better job, so they can be great engineers.",
    icon: "upc",
    website: "https://www.fib.upc.edu/en",
    instagram: "https://www.instagram.com/fib.upc/",
    linkedin:
      "https://www.linkedin.com/school/universitat-politecnica-de-catalunya/",
  },
  {
    active: false,
    company: "HP",
    position: "3D Software engineer intern",
    startDate: "11/2018",
    endDate: "09/2019",
    description:
      "Member of the Software team inside the 3D organization, as a researcher. I've worked in Golang, contributing to open-source projects and also contributing to code that was non-impacting to clients as I was an intern for research.",
    icon: "hp",
    website: "https://www.hp.com/es-es/printers/3d-printers.html",
    instagram: "https://www.instagram.com/hpespana/",
    linkedin: "https://www.linkedin.com/company/hp/posts/?feedView=all",
  },
  {
    active: false,
    company: "ATOS",
    position: "IT Security intern",
    startDate: "05/2018",
    endDate: "09/2018",
    description:
      "Member of a technical multidisciplinary team, that provide an outstanding level of expertise in every security topic affecting the design, implementation and support of the Olympic Games (Tokyo 2020 and Beijing 2022) and other large-scale projects (Glasgow 2018 European Championships, Barranquilla 2018 XXIII Juegos Centroamericanos y del Caribe and Buenos Aires 2018 Summer Youth Olympic Games).",
    icon: "atos",
    website: "https://atos.net/en/services/sports-and-major-events",
    instagram: "https://www.instagram.com/atosinside/",
    linkedin: "https://www.linkedin.com/company/atos/",
  },
  {
    active: false,
    company: "ATOS",
    position: "Service support intern",
    startDate: "07/2017",
    endDate: "05/2018",
    description:
      "Member of a technical multidisciplinary team, provides Level 2 support for Major Events Services and other support activities related to Major Event’s business following the Quality targets defined. This includes activities related to any of the MEV facilities (Integration Test Lab, MEV Offices, Datacentres, Project Venues and others).",
    icon: "atos",
    website: "https://atos.net/en/services/sports-and-major-events",
    instagram: "https://www.instagram.com/atosinside/",
    linkedin: "https://www.linkedin.com/company/atos/",
  },
  {
    active: false,
    company: "Studio Isadora",
    position: "Address assistant - dance school",
    startDate: "09/2012",
    endDate: "07/2018",
    description:
      "Manager for technical and personal functions and tasks related to the show done every year at the Palau de la Música Catalana.",
    icon: "isadora",
    website: "http://studioisadora.com/",
    instagram: "https://www.instagram.com/studioisadora",
  },
];

export const ExtraCurricularTimeline: TimelineItem[] = [
  {
    active: true,
    company: "Hackers@UPC",
    position: "Member of a university association",
    startDate: "2019",
    description:
      "Member of Hackers@UPC, organizing events and hackathons like HackUPC, BitsxLaMarato, HackNights, HackFromHome, Talks, and more. <br /><br /> Being part of the association gave me experience in leadership, organization, and decision-making in hard situations.",
    icon: "hackers",
    website: "https://hackersatupc.org/ ",
    instagram: "https://www.instagram.com/hackersupc/",
  },
  {
    active: true,
    company: "Dance",
    position: "Ballet classes",
    startDate: "2002",
    description:
      "Taking ballet classes since I was 4, reaching a semi-professional level during my university period, where I also started to take Spanish dance lessons. Nowadays, I dance as a hobby.",
    icon: "isadora",
    website: "http://studioisadora.com/",
    instagram: "https://www.instagram.com/studioisadora",
  },
  {
    active: false,
    company: "Royal Academy of Dance",
    position: "Until Advanced 1 level",
    startDate: "2006",
    endDate: "2018",
    description:
      "In parallel with my ballet classes, I took the exams of the Royal Academy of School of London, when the examiners came to Barcelona.",
    icon: "royal",
    website: "https://www.royalacademyofdance.org/exams/",
  },
  {
    active: false,
    company: "Kumon Methodology",
    position: "Until L level",
    startDate: "2012",
    endDate: "2014",
    description:
      "Maths methodology, each level is a letter (the last one is O), I've started again and the last level I made was about functions.\n",
    icon: "kumon",
    website: "https://www.kumon.es/nuestros-programas/matematicas/",
    instagram: "https://www.instagram.com/kumon.espana/",
  },
  {
    active: false,
    company: "Piano",
    position: "Until 4th middle grade",
    startDate: "2002",
    endDate: "2013",
    description:
      "Attending piano lessons since I was 4, and taking the exams to have a music title. I stopped taking lessons before starting university, but currently, I play the piano on my own.",
    icon: "conservatori",
    website: "https://www.conservatoriliceu.es/escoles/pla-estudis/",
    instagram: "https://www.instagram.com/conservatori.liceu/",
  },
  {
    active: false,
    company: "Solfège",
    position: "Until 5th middle grade",
    startDate: "2006",
    endDate: "2012",
    description:
      "Attending the Conservatori del Liceu Solfège lessons to take my exams and have a music title, the lessons were mandatory to take more difficult Piano classes with a concrete repertory to take my exams.",
    icon: "conservatori",
    website: "https://www.conservatoriliceu.es/escoles/pla-estudis/",
    instagram: "https://www.instagram.com/conservatori.liceu/",
  },
  {
    active: false,
    company: "Kumon Methodology",
    position: "Until I level",
    startDate: "2002",
    endDate: "2010",
    description:
      "Maths methodology, each level is a letter (the last one is O), the last level I made was about basic algebra.",
    icon: "kumon",
    website: "https://www.kumon.es/nuestros-programas/matematicas/",
    instagram: "https://www.instagram.com/kumon.espana/",
  },
];
