import { FC, ReactNode } from "react";

interface IFooterProps {
  title: string;
  n: number;
  children?:ReactNode
}

const Footer: FC<IFooterProps> = ({ title,children }) => {
  return (
    <div>
      <h2>{title} </h2>
      {children}
    </div>
  );
};

export default Footer;