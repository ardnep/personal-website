import { Chip, ChipColor } from "./Chip";
import { ExternalLink } from "./ExternalLink";

interface CardProps {
  title: string;
  imgSrc?: string;
  tools?: string[];
  additionalInfo?: string[];
  description?: string;
  link?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const { title, imgSrc, description, tools, additionalInfo, link } = props;
  return (
    <div
      className={`
          rounded-md
          border
          border-solid
          border-[color:hsla(0,0%,100%,0.2)]
          flex
          flex-col
          min-h-[500px]
          w-[400px]
          `}
    >
      <div
        className={`
           h-80
          `}
      >
        <img
          src={imgSrc ?? "/placeholder.png"}
          alt={title}
          className={`h-full w-full object-cover rounded-t-md`}
        />
      </div>
      <div
        className={`
          p-4
          flex 
          flex-col
          gap-2
      `}
      >
        <h4 className="text-wrap">{title}</h4>
        {(tools || additionalInfo) && (
          <div className="flex flex-row flex-wrap gap-1">
            {additionalInfo?.map((info, idx) => (
              <Chip key={idx} color={ChipColor.WARNING} label={info} />
            ))}
            {tools?.map((tool, idx) => (
              <Chip key={idx} color={ChipColor.INFO} label={tool} />
            ))}
          </div>
        )}
        <p className="opacity-70">{description}</p>
        {link && <ExternalLink href={link}>View Project</ExternalLink>}
      </div>
    </div>
  );
};
