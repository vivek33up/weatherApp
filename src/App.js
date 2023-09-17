import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  let api = "30ad1bfa7581b5228f8cf7ba29b3a779";
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState("");
  const getTemp = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${api}`
    );
    const temperature = await response.data;
    console.log(temperature);
    setTemp(temperature);
  };
  function handleSubmit(e) {
    // e.preventDefault();
    getTemp();
    setLocation("");
  }
  return (
    <body>
      <nav>
        <h1 className="navbar">Weather App</h1>
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // Prevent the form submission
              // Call your function to handle the Enter key press (e.g., submitting the form)
              handleSubmit(e);
            }
          }}
        />
        <h1 className="navbar">Contact me</h1>
      </nav>

      <div className="content">
        {temp && (
          <div className="a">
            <h1 className="city">{temp.name}</h1>
            <h2 className="temperature">{temp.main.temp}°C</h2>
            <p>{temp.weather[0].description}</p>
            <div className="full">
              <div className="temp">
                <div className="max">
                  <h2>Max Temp</h2>
                  <p>{temp.main.temp_max}°C</p>
                </div>
                <div className="min">
                  <h2>Min Temp</h2>
                  <p>{temp.main.temp_max}°C</p>
                </div>
              </div>
              <div className="var">
                <div className="humidity">
                  <h2>Humidity</h2>
                  <p>{temp.main.humidity}</p>
                </div>
                <div className="pressure">
                  <h2>Pressue</h2>
                  <p>{temp.main.pressure}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </body>
  );
}

export default App;
