export const Chip = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-row justify-center items-center rounded-[16px] border border-solid border-[#4791DD]/20 bg-[#4791DD]/[.12] text-[#4791DD] pl-2 pr-2 pt-0.5 pb-0.5">
      {label}
    </div>
  );
};
