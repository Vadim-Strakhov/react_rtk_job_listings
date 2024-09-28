import { ICard } from "../models/types";

const Card = ({ children, isFeatured, className }: ICard) => {
  return (
    <div
      className={`card${isFeatured ? " card--featured" : ""}${className ? " " + className : ""}`}
    >
      {children}
    </div>
  );
};

export { Card };


