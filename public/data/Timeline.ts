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
    active: false,
    company: "TU Wien",
    position: "Master in informatics engineering (Erasmus)",
    startDate: "09/2021",
    endDate: "02/2022",
    description: "Development of the master thesis in an exchange university.",
    icon: "tuwien",
    website: "https://www.tuwien.at/en/",
    instagram: "https://www.instagram.com/tu_wien/",
    linkedin: "https://www.linkedin.com/school/tuwien/posts/?feedView=all",
  },
  {
    active: false,
    company: "UPC (FIB)",
    position: "Master in informatics engineering",
    startDate: "09/2019",
    endDate: "02/2024",
    description:
      "Bases in different tech specialities: Hardware, Information Technologies, Software and Computing. And also with bases on direction and management. Developing a mater thesis about event organizations, with the backend in Django (Python) using hexagonal architecture and Expo (Typescript) for the frontend. The master was extended in time due to the extension of the Master Thesis because of work",
    icon: "upc",
    website: "https://www.fib.upc.edu/en",
    instagram: "https://www.instagram.com/fib.upc/",
    linkedin:
      "https://www.linkedin.com/school/universitat-politecnica-de-catalunya/",
  },
  {
    active: false,
    company: "UPC (FIB)",
    position:
      "Bachelor degree in informatics engineering with major in software engineering",
    startDate: "09/2013",
    endDate: "06/2019",
    description:
      "Bases on project management, Multi-tier architecture, Design Patterns, Object-Oriented Programming and Software Architecture. Prepared for being a Full-Stack developer and work with agile methodologies.",
    icon: "upc",
    website: "https://www.fib.upc.edu/en",
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
    active: false,
    company: "Localboss",
    position: "Full-Stack Software Engineer and Product Owner",
    startDate: "02/2024",
    endDate: "07/2024",
    description:
      "As the first employee of the company, I'm involved in the different projects of the company. Working in Django (Python) for all the backend (common for all the projects). Starting from scratch, an internal CRM build in Next.js (Typescript) with all the needs, linked to external APIs (for example Revenue Cat). As DevOps, also managing Google Cloud, mainly Cloud Run. <br/><br/> As product owner, I'm involved in the needs of all the projects, specially in the internal CRM and a web platform for big clients. <br /><br /> Lastly, leading external contractors in some projects.",
    icon: "localboss",
    website: "https://localboss.app/",
    instagram: "https://www.instagram.com/Localboss_app",
    linkedin: "https://www.linkedin.com/company/localboss/posts/?feedView=all",
  },
  {
    active: true,
    company: "UPC (FIB)",
    position: "Associate professor",
    startDate: "02/2022",
    description:
      "Professor in Web Applications and Services subject (3rd-year students from Software Engineer speciality), having a group of 20 students. In the first half of the semester they work in pairs learning the bases of the web development, and in the second half, they work in groups of 4 by developing a project in 3 different assignments: <br/><br/> <b>1) Backend</b>, develop a full system copying an existing one, for example HackerNews (with an MVC server-side framework that works without a client, for example, Django, Spring Boot...).<br/><br/> <b>2) API</b>, modify the backend to have the endpoints also returning JSONs, and creating a good documentation using swagger.<br/><br/> <b>3) Frontend</b>, using the endpoints from the 2nd assignment, create a new page using JavaScript frameworks (React, Angular or Vue).<br/><br/> My work is mainly to guide, correct and give feedback about how they could do a better job.",
    icon: "upc",
    website: "https://www.fib.upc.edu/en",
    instagram: "https://www.instagram.com/fib.upc/",
    linkedin:
      "https://www.linkedin.com/school/universitat-politecnica-de-catalunya/",
  },
  {
    active: false,
    company: "Mundimoto",
    position: "Full-Stack Software Developer",
    startDate: "08/2021",
    endDate: "05/2023",
    description:
      "Part of the teach team, being at first part of the first engineer team, later in the sales squad and finally in the operations team. <br/> <br /> In the first steps, we started planning an internal tool for all the company, created from scratch, and also I was in charge of the first rebranding of compramostumoto.es <br /><br /> In the sales team, we had the responsibilities of creating all the sales process of the motorbike more automatic, by creating an internal ERP with a hexagonal architecture approach, using Django (Python) for the backend and Next.js (with Typescript) for the frontend side. Also, for the data part, creating dashboards (using SQL) in Metabase. In addition, creating with the new stack, Next.js and Django, the website for the company. <br /><br /> In the operations team, I had responsibilities more in the operational transactions, so the systems we build were for the personal in the company, mechanics, photographers... <br/><br/> This job has allowed me to work in different areas due to the creation of something from scratch.",
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
      "During my Erasmus period, I was an associate professor in the subject of web development where the students did different deliverables using Java. My work was mainly to correct and give feedback about how they could do a better job.",
    icon: "uoc",
    website: "https://www.uoc.edu/en",
    instagram: "https://www.instagram.com/uocuniversitat",
    linkedin: "https://www.linkedin.com/school/uoc/posts/?feedView=all",
  },
  {
    active: false,
    company: "UPC (FIB)",
    position: "Associate professor",
    startDate: "02/2021",
    endDate: "06/2021",
    description:
      "Associate professor in databases subject for the 2nd-year teaching about SQL, Triggers and procedures and JDBC.",
    icon: "upc",
    website: "https://www.fib.upc.edu/en",
    instagram: "https://www.instagram.com/fib.upc/",
    linkedin:
      "https://www.linkedin.com/school/universitat-politecnica-de-catalunya/",
  },
  {
    active: false,
    company: "Studio Isadora",
    position: "Technical assistant",
    startDate: "03/2020",
    endDate: "07/2021",
    description:
      "Due the covid pandemic, I helped the school leading the digital transformation for being able to have distance classes, first by giving online support and leading all the professors and then adapting all the classes to make sure we could do hybrid lessons.",
    icon: "isadora",
    website: "http://studioisadora.com/",
    instagram: "https://www.instagram.com/studioisadora",
  },
  {
    active: false,
    company: "HP",
    position: "Graduate 3D software engineer",
    startDate: "09/2019",
    endDate: "08/2021",
    description:
      "Member of the Software team inside the 3D organisation, being full-stack developer in some of the open projects. Working mainly in React (Typescript) and Go.",
    icon: "hp",
    website: "https://www.hp.com/es-es/printers/3d-printers.html",
    instagram: "https://www.instagram.com/hpespana/",
    linkedin: "https://www.linkedin.com/company/hp/posts/?feedView=all",
  },
  {
    active: false,
    company: "HP",
    position: "3D Software engineer intern",
    startDate: "11/2018",
    endDate: "09/2019",
    description:
      "Member of the Software team inside the 3D organisation doing research as an intern. Working mainly with Go.",
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
      "Member of Hackers@UPC, organising events and hackathons like HackUPC",
    icon: "hackers",
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
  },
  {
    active: false,
    company: "Solfège",
    position: "Until 5th middle grade",
    startDate: "2006",
    endDate: "2012",
    description:
      "To take exams I made Solfège lessons and also harder Piano classes with a concrete repertory to take my exams.",
    icon: "conservatori",
  },
  {
    active: false,
    company: "Royal Academy of Dance",
    position: "Until Advanced 1 level",
    startDate: "2006",
    endDate: "2018",
    description:
      "Ballet exams taught by examiners of the Royal Academy of School of London that came to Barcelona. To prepare the exams I take semi-professional classes of Ballet, spanish dances and contemporary dance",
    icon: "royal",
  },
  {
    active: false,
    company: "Piano",
    position: "Until 4th middle grade",
    startDate: "2002",
    endDate: "2013",
    description:
      "I take since I was 4 piano classes, I stopped before starting university, currently I play the piano but at my own.",
    icon: "conservatori",
  },
  {
    active: true,
    company: "Dance",
    position: "Ballet classes",
    startDate: "2002",
    description:
      "I take since I was 4 ballet classes, actually I'm doing classes in semi-professional level. Also taking spanish dance lessons.",
    icon: "isadora",
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
  },
];
