import { ArrowUpRight } from "react-feather";

interface ExternalLinkProps {
  href: string;
  children?: React.ReactNode;
}

export const ExternalLink: React.FC<ExternalLinkProps> = (props) => {
  const { href, children } = props;
  return (
    <a
      href={href}
      target="_blank"
      className={`
        text-[color:rgb(var(--secondary-rgb))]
        mt-4
        inline-flex
        underline
        decoration-transparent 
        items-start
        duration-200
        hover:decoration-[color:rgb(var(--secondary-rgb))]
`}
    >
      {children}
      <ArrowUpRight size="1.5rem" strokeWidth={0.8} />
    </a>
  );
};
