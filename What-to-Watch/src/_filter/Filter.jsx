import { useState } from "react";
import StreamingFilter from "./StreamingFilter";
import GenreFilter from "./GenreFilter";
import DateFilter from "./DateFilter";
import "./Filter.css";

function Filter({ onSubmitFilters, genres }) {
  const [filters, setFilters] = useState({
    streaming: [],
    genre: [],
    startYear: "",
    endYear: ""
  });

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onSubmitFilters(filters);
    console.log(filters)
  }

  return (
    <form className="filter-container" onSubmit={handleFilterSubmit}>
      <h3>Filter Movies</h3>
      <StreamingFilter
        value={filters.streaming}
        onChange={(v) => updateFilter("streaming", v)}
      />
      <GenreFilter
        genres={genres}
        value={filters.genre}
        onChange={(v) => updateFilter("genre", v)}
      />
      <DateFilter
        start={filters.startYear}
        end={filters.endYear}
        onChange={(start, end) => {
          updateFilter("startYear", start);
          updateFilter("endYear", end);
        }}
      />
      <button type="submit" className="submit-button">Search</button>
    </form>
  );
}

export default Filter;
