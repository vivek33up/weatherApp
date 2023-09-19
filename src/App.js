import React, { useEffect, useReducer, useRef } from "react";
import Search from "./Search";
import Weather from "./Weather";
import Error from "./Error";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "change":
        return { ...state, city: action.payload };
      case "dataReceived":
        return { ...state, weather: action.payload, status: "ready" };
      case "error":
        return { ...state, status: "error", errorMessage: action.payload };
      default:
        return state;
    }
  }

  const initialState = {
    city: "",
    weather: null,
    status: "",
    errorMessage: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { city, weather, status, errorMessage } = state;
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const apiKey = "30ad1bfa7581b5228f8cf7ba29b3a779";
        if (!apiKey) {
          throw new Error("API key not found.");
        }

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: error.message });
      }
    }

    if (city) {
      fetchWeather();
    }

    return () => {};
  }, [city]);

  return (
    <main className="app">
      <Search inputEl={inputEl} city={city} dispatch={dispatch} />
      {status === "loading" && <p>Loading...</p>}
      {status === "ready" && weather && weather.cod !== "400" && (
        <Weather weather={weather} />
      )}
      {status === "error" && city.length > 0 && (
        <Error message={errorMessage} />
      )}
    </main>
  );
}

export default App;
