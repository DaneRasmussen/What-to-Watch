function DateFilter({ start, end, onChange }) {
  return (
    <div className="mb-3">
      <h5>Release Year</h5>
      <div className="date-filter">
        <input
          type="number"
          placeholder="Start Year"
          value={start}
          onChange={(e) => onChange(e.target.value, end)}
          className="form-control"
        />
        <input
          type="number"
          placeholder="End Year"
          value={end}
          onChange={(e) => onChange(start, e.target.value)}
          className="form-control"
        />
      </div>
    </div>
  );
}

export default DateFilter;
