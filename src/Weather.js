function Weather({ weather }) {
  return (
    <div>
      <div className="summary">
        <h1>{weather.name}</h1>
        <h2>{weather.main.temp}°C</h2>
        <p>{weather.weather[0].description.toUpperCase()}</p>
      </div>
      <div className="weather">
        <div className="cards">
          <h2>Max weather</h2>
          <p>{weather.main.temp_max}°C</p>
        </div>
        <div className="cards">
          <h2>Min weather</h2>
          <p>{weather.main.temp_max}°C</p>
        </div>

        <div className="cards">
          <h2>Humidity</h2>
          <p>{weather.main.humidity}</p>
        </div>
        <div className="cards">
          <h2>Pressure</h2>
          <p>{weather.main.pressure}</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
