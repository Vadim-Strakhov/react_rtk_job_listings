import { useSelector } from "react-redux";
import { selectVisiblePositions } from "./position-slice";
import { selectFilters } from "../filter/filter-slice";
import { RootState } from "../../store";

export const usePositions = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state: RootState) =>
    selectVisiblePositions(state, currentFilters as string[]),
  );

  return positions;
};
