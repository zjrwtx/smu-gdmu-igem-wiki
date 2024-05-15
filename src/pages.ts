interface Base {
  name: string;
}

class Folder implements Base {
  name!: string;
  folder!: Page[];
}

class Page implements Base {
  name!: string;
  title!: string;
  path!: string;
  lead?: string;
}

const Pages: (Page | Folder)[] = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    lead: "Welcome to iGEM 2024! Your team has been approved and you are ready to start the iGEM season!",
  },
  {
    name: "Team",
    folder: [
      {
        name: "Team",
        title: "Team",
        path: "/team",
        lead: "On this page you can introduce your team members, instructors, and advisors.",
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: "/attributions",
        lead: "This page must show the attribution form of your project. This includes the work done by each of the student members on your team and any work that was done by people outside of your team, including the host labs, advisors, instructors, and individuals not on the team roster. This requirement is not about literature references - these can and should be displayed throughout your wiki.",
      },
    ],
  },
  {
    name: "Project",
    folder: [
      {
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        lead: "Make a useful contribution for future iGEM teams. Use this page to document that contribution.",
      },
      {
        name: "Description",
        title: "Project Description",
        path: "/description",
        lead: "Describe how and why you chose your iGEM project.",
      },
      {
        name: "Engineering",
        title: "Engineering Success",
        path: "/engineering",
        lead: "Demonstrate engineering success in a part of your project by going through at least one iteration of the engineering design cycle.",
      },
      {
        name: "Experiments",
        title: "Experiments",
        path: "/experiments",
        lead: "Describe the research, experiments, and protocols you used in your iGEM project.",
      },
      {
        name: "Notebook",
        title: "Notebook",
        path: "/notebook",
        lead: "Document the dates you worked on your project. This should be a detailed account of the work done each day for your project.",
      },
      {
        name: "Results",
        title: "Results",
        path: "/results",
        lead: "You can describe the results of your project and your future plans here.",
      },
    ],
  },
  {
    name: "Safety",
    title: "Safety",
    path: "/safety",
    lead: "Describe all the safety issues of your project.",
  },
  {
    name: "Human Practices",
    title: "Human Practices",
    path: "/human-practices",
    lead: "We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.",
  },
  {
    name: "Awards",
    folder: [
      {
        name: "Education",
        title: "Education",
        path: "/education",
        lead: "Innovative educational tools and outreach activities have the ability to establish a two-way dialogue with new communities by discussing public values and the science behind synthetic biology.",
      },
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: "/entrepreneurship",
        lead: "The entrepreneurship prize recognizes exceptional effort to build a business case and commercialize an iGEM project.",
      },
      {
        name: "Hardware",
        title: "Hardware",
        path: "/hardware",
        lead: "Hardware in iGEM should make synthetic biology based on standard parts easier, faster, better, or more accessible to our community.",
      },
      {
        name: "Inclusivity",
        title: "Diversity and Inclusion",
        path: "/inclusivity",
        lead: "Every individual, regardless of background or experience, should have an equal opportunity to engage with scientific knowledge and technological development.",
      },
      {
        name: "Measurement",
        title: "Measurement",
        path: "/measurement",
        lead: "Synthetic Biology needs great measurement approaches for characterizing parts, and efficient new methods for characterizing many parts at once. Describe your measurement approaches on this page.",
      },
      {
        name: "Model",
        title: "Model",
        path: "/model",
        lead: "Explain your model's assumptions, data, parameters, and results in a way that anyone could understand.",
      },
      {
        name: "Plant",
        title: "Plant",
        path: "/plant",
        lead: "This award is designed to celebrate exemplary work done in plant synthetic biology.",
      },
      {
        name: "Software",
        title: "Software",
        path: "/software",
        lead: "Software in iGEM should make synthetic biology based on standard parts easier, faster, better or more accessible to our community.",
      },
      {
        name: "Sustainable",
        title: "Sustainable Development Goals",
        path: "/sustainable",
        lead: "Describe how you have evaluated your project ideas against one or more of the SDGs.",
      },
    ],
  },
];

export default Pages;
