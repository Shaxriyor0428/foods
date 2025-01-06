import { FC, ReactNode, useEffect } from "react";

interface IModal {
  children: ReactNode;
  close: Function;
}

const Modal: FC<IModal> = ({ children, close }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    close();
  };

  return (
    <>
      <div
        onClick={handleOverlayClick}
        className="overlay z-10 fixed top-0 left-0 w-full h-full bg-[#0005] dark:bg-[#0008]"
      ></div>
      <div
        className="fixed z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animation-modal"
        // onClick={(e) => e.stopPropagation()} 
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
