export default function GenreFilter({ genres, value, onChange }) {
  const toggleGenre = (id) => {
    if (value.includes(id)) {
      onChange(value.filter((g) => g !== id));
    } else {
      onChange([...value, id]);
    }
  };

  return (
    <div>
      <h5>Genres</h5>
      <div className="genre-options">
        {genres.map((genre) => (
          <label key={genre.id}>
            <input
              type="checkbox"
              checked={value.includes(genre.id)}
              onChange={() => toggleGenre(genre.id)}
            />
            {genre.name}
          </label>
        ))}
      </div>
    </div>
  );
}
