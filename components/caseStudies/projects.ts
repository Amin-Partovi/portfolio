import Chapter from "public/chapter.png";
import Pejwak from "public/pejwak.png";
import Parking from "public/parking.png";
import AgentPro from "public/agentPro.png";
import NotFound from "public/404.png";

const projects = [
  {
    id: 1,
    title: "Chapter Pitch",
    description:
      "A freelancing platform. clients can interview, hire and work with freelancers and freelance agencies through the platform.",
    photo: Chapter,
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Redux Saga",
      "WebSocket",
      "Sass Module",
      "Material UI",
    ],
  },
  {
    id: 2,
    title: "Pejwak Baran",
    description:
      "A B2B white-label platform for insurance sales network development management.",
    photo: Pejwak,
    stack: [
      "React",
      "React-hook-form",
      "React-router",
      "Sass Module",
      "ReactStrap",
      "Material UI",
      "DevExtreme",
      "React Context",
    ],
  },

  {
    id: 4,
    title: "Agent Pro",
    description: "A landing page application for Pejwak Baran panel",
    photo: AgentPro,
    stack: ["Next.js", "Three.js"],
  },
  {
    id: 5,
    title: "Smart Parking",
    description: "An application to manage and control a smart parking.",
    photo: Parking,
    stack: ["React", "GeoServer", "Leaflet", "React Leaflet", "Material UI"],
  },
  {
    id: 6,
    title: "Oil Company",
    description:
      "Rebuilt data management panel of National Oil Company using new technologies.",
    photo: NotFound,
    stack: ["React", "React-Router", "Bootstrap"],
  },
];

export default projects;
