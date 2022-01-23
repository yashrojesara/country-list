import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CountryCard from "../CountryCard";
import { ICountry } from "../types/types";

const x: ICountry = {
    capital: ["Kabul"],
    latlng: [34.5, 69.2],
    name: { common: "Afghanistan" },
    population: 27657145,
    flags: { png: '' }
}

test("should render correctly", () => {
  render(<CountryCard country={x} index={0} />);
});

test("capital must be in document", () => {
  render(<CountryCard country={x} index={0} />);
  const linkElement = screen.getByTestId(/Capital/i);  
  expect(linkElement).toBeInTheDocument();
});

test("should click button correctly", () => {
  render(<CountryCard country={x} index={0} />);
  const linkElement = screen.getByTestId(/button/i);  
  fireEvent.click(linkElement);
  expect(linkElement).toBeInTheDocument();
});



