import React, { createContext, useState } from 'react';

export const ProjectViewerContext = createContext();



const ProjectViewerProvider = ({ children }) => {
    const [projects] = useState([
      {
        id: 1,
        image: require("../images/efu__image.png"),
        imageAlt: "Executive Followup",
        type: "Design/Development",
        project: "https://nameless-inlet-97185.herokuapp.com/",
        github: "https://github.com/MissyM2/efu-client",
        title: "Executive FollowUp",
        style: "peach",
        tech: [
          {
            name: "HTML5",
            link: require("../images/icons8-html-5-50.svg"),
          },
          {
            name: "CSS3",
            link: require("../images/icons8-css3-50.svg"),
          },
          {
            name: "Javascript",
            link: require("../images/icons8-javascript-50.svg"),
          },
          {
            name: "React",
            link: require("../images/icons8-react-native-50.svg"),
          },
          {
            name: "NodeJS",
            link: require("../images/icons8-nodejs-50.svg"),
          },
          {
            name: "MongoDB",
            link: require("../images/icons8-mongodb-50.svg"),
          },
        ],
        overview:
          "Executive FollowUp gives students a way to monitor academic success and plan their work.",
        content:
          "A student adds assignments and makes a concrete plan of action to get their assignments completed.  " +
          "From their dashboard, a student can see what is due today or this week, as well as, how much study " +
          "time they need have assigned themselves.",
        reports: [
          {
            id: 100,
            name: "Complete Design Brief",
            desc: "this is the desc",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Complete Project Brief",
            artifactLink: require("../artifacts/efu__final-design-report.pdf"),
          },
          {
            id: 101,
            name: "Design Brief, Introduction",
            desc: "this is the desc",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Introduction",
            artifactLink: require("../artifacts/efu__section-1.pdf"),
          },
          {
            id: 102,
            name: "Research and Design Methods",
            desc: "this is the desc",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Research and Design Methods",
            artifactLink: require("../artifacts/efu__section-2.pdf"),
          },
          {
            id: 103,
            name: "User Needs Analysis",
            desc: "this is the desc",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU User Needs Analysis",
            artifactLink: require("../artifacts/efu__section-3.pdf"),
            supportDocLink: require("../artifacts/efu__data-convergence.png"),
            supportDocDesc: "data convergence support doc",
          },
          {
            id: 104,
            name: "Competitive Analysis",
            desc: "this is the desc",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Competitive Analysis",
            artifactLink: require("../artifacts/efu__section-4.pdf"),
          },
          {
            id: 105,
            name: "Design Goals",
            desc: "this is the desc",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Design Goals",
            artifactLink: require("../artifacts/efu__section-5.pdf"),
          },
          {
            id: 106,
            name: "Prototype",
            desc: "this is the desc",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Prototype",
            artifactLink: require("../artifacts/efu__section-6.pdf"),
          },
          {
            id: 107,
            name: "Final Usability Testing",
            desc: "this is the desc",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Final Usability Testing",
            artifactLink: require("../artifacts/efu__section-7.pdf"),
          },
          {
            id: 108,
            name: "Next Steps",
            desc: "this is the desc",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Next Steps",
            artifactLink: require("../artifacts/efu__section-8.pdf"),
          },
          {
            id: 109,
            name: "Appendix",
            desc:
              "Personas, Scenarios, Pretest/Post Test Docs, Interview Scripting ",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Appendix",
            artifactLink: require("../artifacts/efu__section-9.pdf"),
          },
        ],
        artifacts: [
          {
            id: 110,
            name: "Data Convergence",
            desc: "need mural",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Data Convergence",
            artifactLink: require("../artifacts/efu__data-convergence.png"),
          },
          {
            id: 111,
            name: "Ideation Wireframes",
            desc: "Wireframes were drawn up after initial ideation sessions.",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Ideation Wireframes",
            artifactLink: require("../artifacts/efu__ideation-wireframes.png"),
          },
          {
            id: 112,
            name: "Initial Wireframes",
            desc:
              "Once the initial data-gathering was complete, new wireframes were built.",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Mockups",
            artifactLink: require("../artifacts/efu__initial-wireframes.png"),
          },
          {
            id: 114,
            name: "Full-Color Mockups",
            desc: "need mockups",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Mockups",
            artifactLink: require("../artifacts/efu__section-6.pdf"),
          },
          {
            id: 121,
            name: "Wizard of Oz Concept Site",
            desc: " wiz of oz",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Wizard of Oz",
            artifactLink: "http://executivefollowup.com",
          },
          {
            id: 115,
            name: "Clickable Prototype",
            desc: "New User",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU New User",
            artifactLink:
              "https://www.figma.com/proto/VivSuDJJ2Kpln9v9dgdkCd/EFU-Prototypes?node-id=299%3A1482&scaling=scale-down",
          },
          {
            id: 116,
            name: "Clickable Prototypes",
            desc: "Returning User",
            artifactIcon: require("../images/efu.png"),
            altIcon: "EFU Returning User",
            artifactLink:
              "https://www.figma.com/proto/VivSuDJJ2Kpln9v9dgdkCd/EFU-Prototypes?node-id=299%3A17104&scaling=scale-down",
          },
        ],
      },
      {
        id: 2,
        image: require("../images/syc.svg"),
        imageAlt: "shopYourCloset",
        type: "Design/Development",
        project: "https://serene-dawn-65763.herokuapp.com/",
        github: "https://github.com/MissyM2/shopYourCloset",
        title: "shopYourCloset",
        style: "blue",
        tech: [
          {
            name: "HTML5",
            link: require("../images/icons8-html-5-50.svg"),
          },
          {
            name: "CSS3",
            link: require("../images/icons8-css3-50.svg"),
          },
          {
            name: "Javascript",
            link: require("../images/icons8-javascript-50.svg"),
          },
          {
            name: "React",
            link: require("../images/icons8-react-native-50.svg"),
          },
          {
            name: "NodeJS",
            link: require("../images/icons8-nodejs-50.svg"),
          },
          {
            name: "MongoDB",
            link: require("../images/icons8-mongodb-50.svg"),
          },
        ],
        overview:
          "shopYourCloset allows a user to analyze their wardrobe and get ideas about some next steps.",
        content:
          "After a user adds their wardrobe items to their personal closet, the app compares their wardrobe to " +
          "an ideal wardrobe and issues recommendations.  Inside the app, a user can add an item to a donation" +
          " closet or share it with others in their share group.",
        reports: [],
        artifacts: [
          {
            id: 118,
            name: "Wireframes",
            desc: "got the wireframes",
            artifactIcon: require("../images/efu.png"),
            artifactLink: require("../artifacts/syc__site-wireframes.png"),
            altIcon: "shopYourCloset Wireframes",
          },
        ],
      },
      {
        id: 3,
        image: require("../images/gtb.svg"),
        imageAlt: "getTheBook",
        type: "Design/Development",
        project: "https://missym2.github.io/getTheBook/",
        github: "https://github.com/MissyM2/getTheBookFinal",
        title: "getTheBook",
        style: "yellow",
        tech: [
          {
            name: "HTML5",
            link: require("../images/icons8-html-5-50.svg"),
          },
          {
            name: "CSS3",
            link: require("../images/icons8-css3-50.svg"),
          },
          {
            name: "Javascript",
            link: require("../images/icons8-javascript-50.svg"),
          },
          {
            name: "JQuery",
            link: require("../images/icons8-jquery-50.svg"),
          },
        ],
        overview:
          "getTheBook pulls together different sources of research to help members select a good book.",
        content:
          "A user can enter a title, author or subject a book and review a list of results to choose " +
          " from.  Once a user drills down and selects a book, they are presented three types of information " +
          "to use to make their decision, reviews, videos, author information.",
        reports: [],
        artifacts: [
          {
            id: 121,
            name: "Site Map Wireframes",
            desc: "got the wireframe",
            artifactIcon: require("../images/efu.png"),
            artifactLink: require("../artifacts/gtb__site-wireframes.png"),
            altIcon: "getTheBook Wireframes",
          },
        ],
      },
      {
        id: 4,
        image: require("../images/do__image.png"),
        imageAlt: "Dinner's On",
        type: "Design",
        title: "Dinner's On",
        style: "green",
        tech: [
          {
            name: "Balsamiq",
            link: require("../images/balsamiq-ar21.svg"),
          },
          {
            name: "Figma",
            link: require("../images/figma-ar21.svg"),
          },
        ],
        overview:
          "Dinner's On delivers family-style meals to help busy households who don't have time to cook.",
        content:
          "In this online ordering system, a user navigates through a progressive process, choosing items " +
          "from several meal categories.  The user, then, inputs details for the delivery and payment.  " +
          "This application allows for a recurring user.",
        reports: [
          {
            id: 123,
            name: "Strategy Brief",
            desc: "This concept was developed as a design challenge.",
            artifactIcon: require("../images/do.png"),
            artifactLink: require("../artifacts/do__strategy-brief.pdf"),
            altIcon: "Dinner's On Strategy Brief",
          },
        ],
        artifacts: [
          {
            id: 124,
            name: "Mockups Final",
            desc:
              "After several iterations of full color mockups, we agreed on this design.",
            artifactIcon: require("../images/do.png"),
            artifactLink: require("../artifacts/do__mockups-final.png"),
            altIcon: "Dinner's On Final Mockup",
          },
        ],
      },
    ]);
          


    return (
        <ProjectViewerContext.Provider 
          value={{ projects }} >
            {children}
        </ProjectViewerContext.Provider>
    )
}

export default ProjectViewerProvider;

