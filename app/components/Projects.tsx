import styles from "../ui/projects.module.css";
import { RuledAccordian, RuledAccordianList } from "./RuledAccordian";
import Section from "./Section";

const PROJECTS = [
  {
    id: 1,
    title: "Bluetooth Robot Controller",
    link: "",
    tools: ["Android Studio", "Java"],
  },
  {
    id: 2,
    title: "Movie Booking and Listing Management Application",
    link: "",
    tools: ["Java"],
  },
  {
    id: 3,
    title: "This Website",
    link: "",
  },
  {
    id: 4,
    title: "Smart To-do Scheduler",
    link: "",
    tools: ["Flask"],
  },
  {
    id: 5,
    title: "Unconventionality and Success: A Data Science Project",
    link: "",
    tools: ["Numpy", "Pandas", "Matplotlib"],
  },
  {
    id: 6,
    title: "See-maphores",
    link: "",
    tools: ["OpenCV", "YoloV5", "Tessaract OCR"],
  },
  {
    id: 7,
    title: "Depression Detection using Speech",
    link: "",
    tools: ["PyTorch", "librosa"],
  },
];

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <RuledAccordianList>
        {PROJECTS.map((project) => (
          <RuledAccordian
            id={project.id}
            key={project.id}
            title={project.title}
            link={project.link}
            tools={project.tools}
          >
            Description coming soon...
          </RuledAccordian>
        ))}
      </RuledAccordianList>
    </Section>
  );
};

export default Projects;

