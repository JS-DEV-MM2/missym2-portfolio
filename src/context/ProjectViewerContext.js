import React, { createContext, useState } from 'react';

export const ProjectViewerContext = createContext();



const ProjectViewerProvider = ({ children }) => {
    const [projects] = useState([
      {
        id: 1,
        image: require("../images/efu.png"),
        imageAlt: "Executive Followup",
        type: "Design/Development",
        title: "Executive FollowUp",
        overview:
          "getTheBook will help bookclubs choose the right book for the group.",
        reports: [
              {
                id: 100,
                name:"what is the name",
                desc: "this is the desc",
                artifactIcon: require("../images/efu.png"),
                altIcon: "EFU Complete Project Brief",
                artifactLink: require("../artifacts/efu__final-design-report.pdf"),
              },
              {
                id: 101,
                name: "what is the name",
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
                artifactLink: "https//www.disney.com",
              },
              {
                id: 111,
                name: "Ideation Wireframes",
                desc:
                  "Wireframes were drawn up after initial ideation sessions.",
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
                id: 113,
                name: "Wireframes",
                desc: "need wireframs",
                artifactIcon: require("../images/efu.png"),
                altIcon: "EFU Wireframes",
                artifactLink: "https//www.disney.com",
              },
              {
                id: 114,
                name: "Mockups",
                desc: "need mockups",
                artifactIcon: require("../images/efu.png"),
                altIcon: "EFU Mockups",
                artifactLink: "https//www.disney.com",
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
            ]
      },
      {
        id: 2,
        image: require("../images/syc.png"),
        imageAlt: "shopYourCloset",
        type: "Design/Development",
        title: "shopYourCloset",
        overview:
          "With shopYourCloset a user can get and maintain control over his or her wardrobe.",
        reports: [
              {
                id: 117,
                name: "NONE: no reporting",
                desc: "got the wireframes",
                artifactIcon: require("../images/efu.png"),
                altIcon: "shopYourCloset Wireframes"
              }
        ],
        artifacts: [
              {
                id: 118,
                name: "Wireframes",
                desc: "got the wireframes",
                altIcon: "shopYourCloset Wireframes",
              },
              {
                id: 119,
                name: "Mockups",
                desc: "need the mockups",
                altIcon: "shopYourCloset Mockups",
              },
        ]
      },
      {
        id: 3,
        image: require("../images/gtb.png"),
        imageAlt: "getTheBook",
        type: "Design/Development",
        title: "getTheBook",
        overview:
          "getTheBook will help bookclubs choose the right book for the group.",
        reports: [
            {
                id: 120,
                name: "Site Map Wireframes",
                desc: "got the wireframe",
                altIcon: "getTheBook Wireframes",
            },
        ],
        artifacts: [
            {
            id: 121,
            name: "Site Map Wireframes",
            desc: "got the wireframe",
            altIcon: "getTheBook Wireframes",
            },
            {
            id: 122,
            name: "Mockups",
            desc: "need mockup",
            altIcon: "getTheBook Mockup",
            }
        ]
      },
      {
        id: 4,
        image: require("../images/do__mockup-icon-2.png"),
        imageAlt: "Dinner's On",
        type: "Design",
        title: "Dinner's On",
        overview: "adfasdfasdfasdf",
        reports:[
            {
                id: 123,
                name: "Strategy Brief",
                desc: "This concept was developed as a design challenge.",
                altIcon: "Dinner's On Strategy Brief",
            }
        ],
        artifacts: [
            {
                id: 124,
                name: "Mockups Final",
                desc:
                    "After several iterations of full color mockups, we agreed on this design.",
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

