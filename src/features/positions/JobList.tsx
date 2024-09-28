import { useDispatch } from "react-redux";
import { JobPosition } from "./JobPosition";
import { usePositions } from "./use-positions";
import { useFetchPositions } from "./use-fetch-positions";
import { addFilter } from "../filter/filter-slice";

const JobList = () => {
  useFetchPositions();
  const positions = usePositions();
  const dispatch = useDispatch();

  const handleAddFilter = (filter: string) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  );
};

export { JobList };
