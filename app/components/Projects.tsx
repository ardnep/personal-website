import { RuledAccordian, RuledAccordianList } from "./RuledAccordian";
import Section from "./Section";

interface Project {
  title: string;
  link: string;
  tools: string[];
  imgSrc?: string;
  additionalInfo?: string[];
  description?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Raven: A Smart Task Scheduler",
    link: "",
    tools: ["Flask"],
    additionalInfo: ["Ongoing"],
    description: `Raven is an app that enables you to create your daily schedule
       without having to deal with the hassle of planning
       everything yourself.

        You tell Raven what tasks you want done,
        and it will intelligently suggest a time for you to complete them, so
        that you never miss a deadline! What's even better, it ensures that
        the suggested schedule has no clashes with your other events or breaks.
        It uses a smart algorithm to schedule your tasks.`,
  },
  {
    title: "MyTripDiary",
    link: "",
    tools: ["React Native", "TypeScript", "Firebase", "Various APIs"],
    imgSrc: "/project-images/my-trip-diary.jpeg",
    description: `MyTripDiary is a mobile app that allows you to keep track of your daily commutes and trips.
    Want to know how much time you spend on the road? Or how much money you spend on fuel? MyTripDiary has got you covered! Visualize your commutes and get cost estimates of trips based on factors such as start location, destination, mode of transport, and transport fees.`,
  },
  {
    title: "See-maphores",
    link: "",
    tools: ["OpenCV", "YoloV5", "Tessaract OCR"],
    imgSrc: "/project-images/see-maphores.jpeg",
    additionalInfo: ["Hackathon Finalist"],
    description: `A realtime desktop app that detects and analyses objects using the webcam, generates their descriptions (position on screen, color, etc.), and reads them out loud. Supports English, Chinese, Malay, and Tamil.`,
  },
  {
    title: "Bluetooth Robot Controller",
    link: "",
    tools: ["Android Studio", "Java"],
    imgSrc: "/project-images/bluetooth-robot-controller.jpeg",
    description: `
An Android app that connects to a Bluetooth-enabled robot and allows you to control it using a tablet. The app has a joystick for controlling the robot's movement and buttons for other actions. Among other features, it has a grid view to see the position of the robot in real-time, and a chat tab which allows you to chat directly with the robot.`,
  },
  {
    title: "Unconventionality and Success: A Data Science Project",
    link: "",
    tools: ["Numpy", "Pandas", "Matplotlib"],
    imgSrc: "/project-images/unconv-and-success.jpeg",
    description: `A data science project that explores the relationship between career success of a developer and whether they are an 'unconventional' individual. The project uses data from the Stack Overflow Developer Survery 2020.`,
  },
  {
    title: "Depression Detection using Speech",
    link: "",
    tools: ["PyTorch", "librosa"],
    imgSrc: "/project-images/depression-using-speech.jpeg",
    description: `A deep learning project aimed at leveraging acoustic features to detect depression in speech. We developed two combined Convolutional Neural Network (CNN) and Recurrent Neural Network (RNN) architectures and performed a comparative analysis along with model optimizations and hyperparameter tuning.`,
  },
  {
    title: "This Website",
    link: "",
    tools: ["Next.js", "Tailwind CSS", "GSAP"],
    description: `Yes.`,
  },
];

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <RuledAccordianList>
        {PROJECTS.map((project, idx) => (
          <RuledAccordian
            id={idx}
            key={idx}
            title={project.title}
            link={project.link}
            tools={project.tools}
            additionalInfo={project.additionalInfo}
            imgSrc={project.imgSrc}
          >
            <p className="opacity-70">
              {project.description || "Description not available"}
            </p>
          </RuledAccordian>
        ))}
      </RuledAccordianList>
    </Section>
  );
};

export default Projects;
