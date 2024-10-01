// 导航顺序

import {
  Attributions,
  Contribution,
  Description,
  Engineering,
  Experiments,
  Home,
  HumanPractices,
  Results,
  Safety,
  Team,
  Education,
  Inclusivity,
  Model,
  collaboration,
  parts,
  Design,
} from "./contents";
import { FaHome, FaUsers, FaProjectDiagram, FaShieldAlt, FaHandsHelping, FaAward,  FaFlask, FaLightbulb, FaBusinessTime, FaUniversalAccess, FaCogs, FaHandshake } from "react-icons/fa"; // 引入图标

interface Base {
  name: string | undefined;
  icon?: React.ComponentType; // 添加 icon 属性
}

class Folder implements Base {
  name: string | undefined;
  folder: Page[] | undefined;
  icon?: React.ComponentType;
}

class Page implements Base {
  name: string | undefined;
  title: string | undefined;
  path: string | undefined;
  component: React.FC | undefined;
  lead: string | undefined;
  icon?: React.ComponentType;
}

const Pages: (Page | Folder)[] = [
  {
    name: "Home",
    title: "Liver-Brain Guardian",
    path: "/",
    component: Home,
    lead: "Welcome to iGEM 2024! Your team has been approved and you are ready to start the iGEM season!",
    icon: FaHome,
  },
  {
    name: "Team",
    folder: [
      {
        name: "Team",
        title: "Team",
        path: "/team",
        component: Team,
        lead: "On this page you can introduce your team members, instructors, and advisors.",
        icon: FaUsers,
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: "/attributions",
        component: Attributions,
        lead: "In the iGEM Competition, we celebrate student effort and achievement. The Attributions form helps the judges differentiate between what students accomplished from how their external collaborators supported them. Therefore, teams must clearly explain on the standard Project Attributions form what work they have conducted by themselves and what has been done by others.",
        icon: FaUsers,
      },
    ],
    icon: FaUsers,
  },
  {
    name: "Lab Work",
    folder: [
      {
        name: "Results",
        title: "Results",
        path: "/results",
        component: Results,
        lead: "You can describe the results of your project and your future plans here.",
        icon: FaFlask,
      },
      {
        name: "Safety",
        title: "Safety",
        path: "/safety",
        component: Safety,
        lead: "Describe all the safety issues of your project.",
        icon: FaShieldAlt,
      },
      {
        name: "Experiments",
        title: "Experiments",
        path: "/experiments",
        component: Experiments,
        lead: "Describe the research, experiments, and protocols you used in your iGEM project.",
        icon: FaFlask,
      },
    ],
    icon: FaProjectDiagram,
  },
  {
    name: "Project",
    folder: [
      {
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        component: Contribution,
        lead: "Make a useful contribution for future iGEM teams. Use this page to document that contribution.",
        icon: FaProjectDiagram,
      },
      {
        name: "Description",
        title: "Project Description",
        path: "/description",
        component: Description,
        lead: "Describe how and why you chose your iGEM project.",
        icon: FaBusinessTime,
      },
      {
        name: "Design",
        title: "Design",
        path: "/design",
        component: Design,
        lead: "Describe the research, experiments, and protocols you used in your iGEM project.",
        icon: FaFlask,
      },
      {
        name: "Engineering",
        title: "Engineering Success",
        path: "/engineering",
        component: Engineering,
        lead: "Demonstrate engineering success in a technical aspect of your project by going through at least one iteration of the engineering design cycle. This achievement should be distinct from your Contribution for Bronze.",
        icon: FaCogs,
      },
      {
        name: "Model",
        title: "Model",
        path: "/model",
        component: Model,
        lead: "Explain your model's assumptions, data, parameters, and results in a way that anyone could understand.",
        icon: FaCogs,
      },
      {
        name: "Parts",
        title: "Parts",
        path: "/parts",
        component: parts,
        lead: "You can describe the results of your project and your future plans here.",
        icon: FaFlask,
      },
      
    ],
    icon: FaProjectDiagram,
  },
  
  {
    name: "Human Practice",
    folder: [
      {
        name: "Integrated Human Practices",
        title: "Integrated Human Practices",
        path: "/human-practices",
        component: HumanPractices,
        lead: "We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.",
        icon: FaHandsHelping,
      },
      {
        name: "Education",
        title: "Education",
        path: "/education",
        component: Education,
        lead: "Innovative educational tools and outreach activities have the ability to establish a two-way dialogue with new communities by discussing public values and the science behind synthetic biology.",
        icon: FaLightbulb,
      },
      {
        name: "Inclusivity",
        title: "Diversity and Inclusion",
        path: "/inclusivity",
        component: Inclusivity,
        lead: "Every individual, regardless of background or experience, should have an equal opportunity to engage with scientific knowledge and technological development.",
        icon: FaUniversalAccess,
      },
   
      {
        name: "Collaboration",
        title: "Collaboration",
        path: "/collaboration",
        component: collaboration,
        lead: "Collaboration.",
        icon: FaHandshake,
      },
    ],
    icon: FaAward,
  },
  
];

export default Pages;