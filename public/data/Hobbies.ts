interface Hobby {
  icon: string;
  text: string;
  link?: string;
  linkText?: string;
}

export const hobbiesList: Hobby[] = [
  {
    icon: "map",
    text: "Travel",
  },
  {
    icon: "camara",
    text: "Photography",
  },
  {
    icon: "dancer",
    text: "Dance",
  },
  {
    icon: "piano",
    text: "Piano",
  },
  {
    icon: "guitar",
    text: "Guitar",
  },
  {
    icon: "skiing",
    text: "Ski",
  },
  {
    icon: "soccer",
    text: "Soccer",
  },
  {
    icon: "events",
    text: "Organize events",
  },
  {
    icon: "boat",
    link: "https://www.transportes.gob.es/marina-mercante/titulaciones/titulaciones-de-recreo/titulos/patron-de-embarcaciones-recreo/patron-de-embarcaciones-de-recreo-per",
    linkText: "PER title",
    text: "Sailing - ",
  },
];
