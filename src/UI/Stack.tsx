import PropTypes from "prop-types";
import { IStack } from "../models/types";

const Stack = ({ children, pos }: IStack) => (
  <div
    className="stack"
    style={{
      justifyContent: pos === "center" ? "center" : `flex-${pos}`,
    }}
  >
    {children}
  </div>
);

export { Stack };

Stack.propTypes = {
  children: PropTypes.node.isRequired,
};
