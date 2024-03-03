import React from "react";
import { Chip } from "./Chip";

const ExperienceItem = ({
  id,
  startDate,
  endDate,
  title,
  company,
  skills,
  description,
}: {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company?: string;
  skills?: string[];
  description?: string;
}) => {
  return (
    <li
      className="grid md:grid-cols-[150px_1fr] grid-cols-1 items-start content-start"
      key={id}
    >
      <p className="opacity-70 mb-0">
        {startDate} - {endDate}
      </p>
      <div className="flex flex-col gap-1">
        <div className="flex lg:flex-row flex-col lg:content-start lg:items-center gap-1">
          <h3 className="md:text-xl text-lg">{title}</h3>
          <p className="italic opacity-70 mb-0">{company}</p>
        </div>
        <p className="opacity-70 mb-0">{description}</p>
        {skills && (
          <div className="flex flex-row flex-wrap gap-1 [&>*]:text-sm">
            {skills.map((skill, index) => (
              <Chip key={index} label={skill} />
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

const ExperienceList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex flex-col gap-8">{children}</ul>;
};

export { ExperienceList, ExperienceItem };
