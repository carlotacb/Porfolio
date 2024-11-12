interface Projects {
  type: "Game" | "WebApp" | "Website" | "App" | "Other";
  projectName: string;
  Languages: {
    icon: string;
    tooltip: string;
  }[];
  img: string;
  description: string;
  GHLink: string;
}

export const MyProjectList: Projects[] = [
  {
    type: "WebApp",
    projectName: "Event Organizator",
    Languages: [
      { icon: "langs/python", tooltip: "Python" },
      { icon: "frameworks/django", tooltip: "Django" },
      { icon: "langs/ts", tooltip: "Typescript" },
      { icon: "frameworks/react", tooltip: "React" },
      { icon: "devops/gcloud", tooltip: "Google Cloud" },
      { icon: "devops/docker", tooltip: "Docker" },
    ],
    img: "event-organizator.gif",
    description:
      "Master thesis where I develop a web application using Expo and Django to help organize events in a more efficient way.",
    GHLink: "https://github.com/carlotacb/Event-Organizator",
  },
  {
    type: "Website",
    projectName: "HackUPC 2024 Landing",
    Languages: [
      { icon: "langs/ts", tooltip: "Typescript" },
      { icon: "frameworks/nextjs", tooltip: "Next.js" },
    ],
    img: "hackupc-2024.webp",
    description:
      "I've lead the HackUPC webdev team to create the landing page for the 2024 edition of the hackathon with a solid and escalable structure.",
    GHLink: "https://github.com/carlotacb/Event-Organizator",
  },
  {
    type: "Game",
    projectName: "Lemmings",
    Languages: [{ icon: "langs/cplusplus", tooltip: "C++" }],
    img: "lemmings-gameplay.gif",
    description:
      "University project where we made a clone from the popular game Lemmings in C++ with a additional hard mode!",
    GHLink: "https://github.com/carlotacb/Lemmings",
  },
  {
    type: "Game",
    projectName: "SuperMario GO",
    Languages: [
      { icon: "langs/csharp", tooltip: "C#" },
      { icon: "misc/unity", tooltip: "Unity" },
    ],
    img: "mario-gameplay.gif",
    description:
      "University project made in Unity, we use SuperMario theme to create an amazing game based in Lara Croft GO.",
    GHLink: "https://github.com/mariofv/SuperMarioGo",
  },
  {
    type: "WebApp",
    projectName: "Coink",
    Languages: [
      { icon: "langs/go", tooltip: "Golang" },
      { icon: "langs/js", tooltip: "JavaScript" },
      { icon: "frameworks/react", tooltip: "React" },
      { icon: "devops/aws", tooltip: "AWS" },
    ],
    img: "coink.webp",
    description:
      "My bachelor thesis, a webapp application based on microservices and React. The github repo is private as it contains secret keys",
    GHLink: "https://upcommons.upc.edu/handle/2117/168285",
  },
  {
    type: "Game",
    projectName: "BirdPitch",
    Languages: [
      { icon: "langs/js", tooltip: "JavaScript" },
      { icon: "langs/python", tooltip: "Python" },
    ],
    img: "birdpith-gameplay.gif",
    description:
      "Game developed for LauzHack 2018 that works with the voice... Singing! (It doesn't work 100% fine). Developed in 24 hours.",
    GHLink: "https://github.com/carlotacb/BirdPitch",
  },
  {
    type: "Website",
    projectName: "HFH Landing & Live",
    Languages: [
      { icon: "langs/js", tooltip: "JavaScript" },
      { icon: "misc/html", tooltip: "HTML" },
      { icon: "misc/css", tooltip: "CSS" },
      { icon: "frameworks/vuejs", tooltip: "VueJS" },
    ],
    img: "hackfromhome.webp",
    description:
      "I've create two websites for an online hackathon I've organized (during the covid lockdown) as part of Hackers@UPC team.",
    GHLink: "https://github.com/hackupc/hackfromhome-landing",
  },
  {
    type: "Game",
    projectName: "StopTheCrown",
    Languages: [{ icon: "langs/js", tooltip: "JavaScript" }],
    img: "stopthecrown.webp",
    description:
      "WebApp Game created for HackTheBurgh 2020 a game based on papers please! but with a theme completly diferent, the coronavirus! Developed in 24 hours learning Phaser.",
    GHLink: "https://github.com/elena20ruiz/stopthecrown",
  },
  {
    type: "WebApp",
    projectName: "FoodLord",
    Languages: [
      { icon: "langs/js", tooltip: "JavaScript" },
      { icon: "langs/python", tooltip: "Python" },
      { icon: "frameworks/flask", tooltip: "Flask" },
      { icon: "frameworks/react", tooltip: "React" },
      { icon: "devops/gcloud", tooltip: "Google Cloud" },
      { icon: "devops/docker", tooltip: "Docker" },
    ],
    img: "foodlord.webp",
    description:
      "Project developed during HackCU 2019 where doing a picture to a food it analyzes its ingredients and also it say the calories you are consuming!",
    GHLink: "https://github.com/carlotacb/foodlord",
  },
];
