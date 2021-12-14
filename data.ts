import { FaServer } from "react-icons/fa";
import { IService, ISkill, IProject } from "./type";
import { BsCircleFill } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { FiDatabase } from "react-icons/fi";

export const services: IService[] = [
  {
    Icon: GrReactjs,
    title: "Frontend Developer",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React</b>"
  },
  {
    Icon: FaServer,
    title: "Backend Developer",
    about: "handle database, server, api using <b>Django <b/>"
  },
  {
    Icon: FiDatabase,
    title: "BigData & Cloud Computing",
    about: "Hadoop, Hive, Google Cloud"
  }
];

export const languanges: ISkill[] = [
  {
    name: "JavaScript",
    level: "70%",
    Icon: BsCircleFill
  },
  {
    name: "TypeScript",
    level: "50%",
    Icon: BsCircleFill
  },
  {
    name: "React",
    level: "70%",
    Icon: BsCircleFill
  },
  {
    name: "SQL",
    level: "50%",
    Icon: BsCircleFill
  },
  {
    name: "StyledComponent",
    level: "80%",
    Icon: BsCircleFill
  },
  {
    name: "ChakraUI",
    level: "70%",
    Icon: BsCircleFill
  },
  {
    name: "Tailwind",
    level: "70%",
    Icon: BsCircleFill
  }
];

export const tools: ISkill[] = [
  {
    name: "Figma",
    level: "70%",
    Icon: BsCircleFill
  },
  {
    name: "Jira",
    level: "70%",
    Icon: BsCircleFill
  }
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Covid Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/covid.png",
    deployed_url: "https://covid-19-tracker-b363d.web.app/",
    github_url: "https://github.com/DragoBJJ/covid-19-tracker",
    category: ["react", "javaScript"],
    key_techs: ["React", "Chart.js", "Material UI"]
  },
  {
    id: 2,
    name: "Expense Tracker",
    description:
      "Empty pockets never stopped anyone from taking action. Only empty mind and empty hearts can do it",
    image_path: "/expense.png",
    deployed_url: "https://expense-tracker-fe7fe.web.app/",
    github_url: "https://github.com/DragoBJJ/ExpenseTracker",
    category: ["react", "javaScript"],
    key_techs: ["React", "Chart.js", "Material UI"]
  },
  {
    id: 3,
    name: "Brain Health Page",
    description:
      "There is nothing so distant that it is out of reach, and nothing so hidden that it cannot be discovered",
    image_path: "/brain.png",
    deployed_url: "https://brainhealthpage-99fd9.web.app/",
    github_url: "https://github.com/DragoBJJ/BrainHealthPage-Material-Ui",
    category: ["react", "javaScript"],
    key_techs: ["React", "Material UI"]
  },
  {
    id: 4,
    name: "Tic-Tac-Toe Game",
    description: "A tic-tac-toe game with a history of reversing moves",
    image_path: "/vinci.png",
    deployed_url: "https://dragobjj.github.io/TicTacToe-React/",
    github_url: "https://github.com/DragoBJJ/TicTacToe-React",
    category: ["react", "javaScript"],
    key_techs: ["React", "javaScript"]
  },
  {
    id: 5,
    name: "Tesla Clone",
    description:
      "Tesla Clone Landing Page Tesla Clone Landing Page Tesla Clone Landing Page",
    image_path: "/tesla.png",
    deployed_url: null,
    github_url: "https://github.com/DragoBJJ/Tesla-Clone",
    category: ["react", "javaScript"],
    key_techs: ["React", "javaScript", "styledComponents"]
  },
  {
    id: 6,
    name: "Note Taking App",
    description:
      "Every self-respecting 'cleaner' has an app for creating notes",
    image_path: ["/leon&mathilda.png", "/leon.png"],
    deployed_url: null,
    github_url: "https://github.com/DragoBJJ/NoteTakingApp",
    category: ["react", "javaScript"],
    key_techs: ["React", "javaScript", "styledComponents"]
  }
];
