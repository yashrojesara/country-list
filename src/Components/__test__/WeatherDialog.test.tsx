import React from "react";
import { render, screen } from "@testing-library/react";
import { IWeatherInfo } from "../types/types";
import WeatherDialog from "../WeatherDialog";

const x: IWeatherInfo = {
    current: {
        weather_icons: [""],
        temperature: 0,
        wind_speed: 0,
        precip: 0,
    },
    location: {
        name: "Test",
    }
}

test("should render correctly", () => {
  render(<WeatherDialog open={true} weather={x} />);
});

test("Temperature must be in document", () => {
  render(<WeatherDialog open={true} weather={x} />);
  const linkElement = screen.getByTestId(/temp/i);  
  expect(linkElement).toBeInTheDocument();
});