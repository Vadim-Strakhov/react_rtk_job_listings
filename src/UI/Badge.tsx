import Remove from "../assets/images/icon-remove.svg?react";
import { IBadge } from "../models/types";

const Badge = ({
  variant = "basic",
  colorScheme = "light",
  children,
  onClear,
  onClick,
}: IBadge) => (
  <div
    className={`badge badge--${variant} badge--${colorScheme}`}
    onClick={onClick}
  >
    <span>{children}</span>
    {variant === "clearable" && (
      <div className="badge-remover" onClick={onClear}>
        <Remove />
      </div>
    )}
  </div>
);

export { Badge };
