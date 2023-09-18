function Search({ inputEl, city, dispatch }) {
  return (
    <header>
      <h1>React Weather App</h1>
      <input
        type="text"
        placeholder="Enter City"
        ref={inputEl}
        value={city}
        onChange={(e) => dispatch({ type: "change", payload: e.target.value })}
      />
    </header>
  );
}

export default Search;
