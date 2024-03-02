import styles from "../ui/projects.module.css";
import { Line, RuledAccordian, RuledAccordianList } from "./RuledAccordian";
import Section from "./Section";

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <RuledAccordianList>
        <RuledAccordian id={4} title="Smart To-do Scheduler" tools={["Flask"]}>
          Desciption coming soon...
        </RuledAccordian>
        <RuledAccordian
          id={3}
          title="This Website"
          link="https://github.com/ardnep/personal-website"
          tools={["Next.js", "React", "TypeScript"]}
        >
          Desciption coming soon...
        </RuledAccordian>
        <RuledAccordian
          id={7}
          title="Depression Detection using Speech"
          tools={["PyTorch", "librosa"]}
        >
          Desciption coming soon...
        </RuledAccordian>
        <RuledAccordian
          id={1}
          title="Bluetooth Robot Controller"
          link="https://github.com/SC2079-Group19/AndroidApp"
          tools={["Android Studio", "Java"]}
        >
          Desciption coming soon...
        </RuledAccordian>
        <RuledAccordian
          id={1}
          title="MyTripDiary"
          link="https://github.com/ardnep/SC2006-Project-No-Idea"
          tools={["TypeScript", "React Native", "Firebase", "Maps APIs"]}
        >
          Desciption coming soon...
        </RuledAccordian>
        <RuledAccordian
          id={6}
          title="See-maphores"
          link="https://github.com/ardnep/see-maphores"
          tools={["OpenCV", "YoloV5", "Tessaract OCR"]}
        >
          Desciption coming soon...
        </RuledAccordian>
        <RuledAccordian
          id={2}
          title="Movie Booking and Listing Management Application"
          link="https://github.com/limlincoln/SC2002-MOBLIMA-Project"
          tools={["Java"]}
        >
          Desciption coming soon...
        </RuledAccordian>
        <RuledAccordian
          id={5}
          title="Unconventionality and Success: A Data Science Project"
          link="https://github.com/ardnep/ntu-sc1015-mini-project"
          tools={["Numpy", "Pandas", "Matplotlib"]}
        >
          Desciption coming soon...
        </RuledAccordian>
      </RuledAccordianList>
    </Section>
  );
};

export default Projects;

