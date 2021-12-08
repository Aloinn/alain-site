export const professionalProjectsList: Project[] = [
  {
    name: 'Art Block',
    img: 'images/artblock2.png',
    url: 'https://artblock-com.web.app/',
  },
  {
    name: 'BallStreet Cards',
    img: 'images/ballstreet.png',
    url: 'https://ballstreet.cards/',
  },
  {
    name: 'Seahorse Dating',
    img: 'images/seahorse.png',
    url: 'https://seahorsedating.com/',
  },
];

export const personalProjectsList: Project[] = [
  {
    name: 'Cellular Automata Island Generator',
    img: 'images/cellularautomo',
    url: 'https://aloinn.github.io/CellularAutomata/',
  },
  {
    name: 'Penguins.io',
    img: 'images/penguins.io',
    url: 'https://aloinpenguins.herokuapp.com/',
  },
  {
    name: 'Safe Space',
    img: 'images/spacespace.png',
    url: 'https://devpost.com/software/get-me-home-safe',
  },
  {
    name: 'JS Pong',
    img: 'images/jspong.png',
    url: 'https://aloinn.github.io/JavaScript-PONG/',
  },
];

export interface Project {
  name: string;
  img: string;
  url: string;
}
