export enum ChipColor {
  INFO = "#4791DD",
  WARNING = "#F9A826",
  SUCCESS = "#34A853",
  DANGER = "#EA4335",
}

interface ChipProps {
  label: string;
  color: ChipColor;
}

export const Chip: React.FC<ChipProps> = (props) => {
  const { label, color } = props;

  return (
    <div
      className={`flex
      flex-row 
      justify-center 
      items-center 
      rounded-[16px]
      border
      border-solid
      pl-2
      pr-2
      pt-0.5
      pb-0.5`}
      style={{
        backgroundColor: `${color}20`,
        borderColor: `${color}60`,
        color: color,
        fontSize: "0.875rem",
      }}
    >
      {label}
    </div>
  );
};
