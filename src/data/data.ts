export const professionalProjectsList: Project[] = [
  {
    name: 'ArtBlock',
    img: 'images/artblock2.png',
    url: 'https://artblock-com.web.app/',
    subtitle: 'Global Creative Technologies',
    description:
      'Art Block is a secure platform for exhibiting and collecting fine art digital assets',
  },
  {
    name: 'BallStreet Cards',
    img: 'images/ballstreet2.png',
    url: 'https://ballstreet.cards/',
    subtitle: 'Global Creative Technologies',
    description:
      'BallStreet is a token based platform that makes it easy to purchase trading card NFTs',
  },
  {
    name: 'Seahorse Dating',
    img: 'images/seahorse2.png',
    url: 'https://seahorsedating.com/',
    subtitle: 'Global Creative Technologies',
    description:
      'Seahorse Dating is a lifestyle dating platform that focuses on self-love AI-based matchmaking',
  },
];

export const personalProjectsList: Project[] = [
  {
    name: 'noise.',
    img: 'images/noise.png',
    url: 'https://devpost.com/software/noise-qohxez',
    description:
      '"Tinder for talent" web application, linking freelancers with projects',
    subtitle: 'RU Hacks 2021: Digital',
    award: 'Top 15 Hackthon Entries',
  },
  {
    name: 'Safe Space',
    img: 'images/safespace.png',
    url: 'https://devpost.com/software/get-me-home-safe',
    description: 'Community sourced incident reports for safety awareness',
    subtitle: 'BrickHack 6, 2020',
    award: 'Best Use of Google Cloud',
  },
  {
    name: 'Cellular Automata Island Generator',
    img: 'images/cellularautomo.png',
    url: 'https://aloinn.github.io/CellularAutomata/',
    description:
      'Demonstration of a Cellular Automata simulation interpreted as islands',
  },
  {
    name: 'Penguins.io',
    img: 'images/penguins.io.png',
    url: 'https://aloinpenguins.herokuapp.com/',
    description:
      'Realtime multiplayer physics-based game based on the iOS imessage penguins game',
  },
  {
    name: 'Evid Evis',
    img: 'images/evidevis.png',
    url: 'https://devpost.com/software/evidevis',
    description:
      'Police board web application for the Martello data visualization challenge',
    subtitle: 'cuHacking 2020',
  },
  {
    name: 'JS Pong',
    img: 'images/jspong.png',
    url: 'https://aloinn.github.io/JavaScript-PONG/',
    description: 'Pong browser game with implemented CPU',
  },
];

export interface Project {
  name: string;
  img: string;
  url: string;
  description?: string;
  subtitle?: string;
  award?: string;
}
