interface Projects {
  type: "Game" | "WebApp" | "Website" | "App" | "Other";
  projectName: string;
  LanguagesIcons: string[];
  LanguagesTooltip: string[];
  img: string;
  description: string;
  GHLink: string;
}

export const MyProjectList: Projects[] = [
  {
    type: "Game",
    projectName: "Lemmings",
    LanguagesIcons: ["langs/cplusplus"],
    LanguagesTooltip: ["C++"],
    img: "lemmings-gameplay.gif",
    description:
      "University project where we made a clone from the popular game Lemmings in C++ with a additional hard mode!",
    GHLink: "https://github.com/carlotacb/Lemmings",
  },
  {
    type: "Game",
    projectName: "SuperMario GO",
    LanguagesIcons: ["langs/csharp", "misc/unity"],
    LanguagesTooltip: ["C#", "Unity"],
    img: "mario-gameplay.gif",
    description:
      "University project made in Unity, we use SuperMario theme to create an amazing game based in Lara Croft GO.",
    GHLink: "https://github.com/mariofv/SuperMarioGo",
  },
  {
    type: "Game",
    projectName: "BirdPitch",
    LanguagesIcons: ["langs/js", "langs/python"],
    LanguagesTooltip: ["JavaScript", "Python"],
    img: "birdpith-gameplay.gif",
    description:
      "Game developed for LauzHack 2018 that works with the voice... Singing! (It doesn't work 100% fine)",
    GHLink: "https://github.com/carlotacb/BirdPitch",
  },
  {
    type: "WebApp",
    projectName: "Coink",
    LanguagesIcons: ["langs/go", "langs/js", "frameworks/react", "devops/aws"],
    LanguagesTooltip: ["Golang", "JavaScript", "React", "AWS"],
    img: "coink.webp",
    description:
      "My bachelor thesis, a webapp aplication based on microservices and React. The github repo is private as it contains secret keys",
    GHLink: "https://upcommons.upc.edu/handle/2117/168285",
  },
  {
    type: "Website",
    projectName: "HFH Landing & Live",
    LanguagesIcons: ["langs/js", "misc/html", "misc/css", "frameworks/vuejs"],
    LanguagesTooltip: ["JavaScript", "HTML", "CSS", "VueJS"],
    img: "hackfromhome.webp",
    description:
      "I've create two websites for an online hackathon I've organized (during the covid lockdown) as part of Hackers@UPC team.",
    GHLink: "https://github.com/hackupc/hackfromhome-landing",
  },
  {
    type: "Game",
    projectName: "StopTheCrown",
    LanguagesIcons: ["langs/js"],
    LanguagesTooltip: ["JavaScript"],
    img: "stopthecrown.webp",
    description:
      "WebApp Game created for HackTheBurgh 2020 a game based on papers please! but with a theme completly diferent, the coronavirus!",
    GHLink: "https://github.com/elena20ruiz/stopthecrown",
  },
  {
    type: "WebApp",
    projectName: "FoodLord",
    LanguagesIcons: [
      "langs/js",
      "langs/python",
      "frameworks/flask",
      "frameworks/react",
      "devops/gcloud",
      "devops/docker",
    ],
    LanguagesTooltip: [
      "JavaScript",
      "Python",
      "Flask",
      "React",
      "Google Cloud",
      "Docker",
    ],
    img: "foodlord.webp",
    description:
      "Project developed during HackCU 2019 where doing a picture to a food it analizes its ingridients and also it say the calories you are consuming!",
    GHLink: "https://github.com/carlotacb/foodlord",
  },
];
