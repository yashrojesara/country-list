import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CountryForm from "../CountryForm";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test("should render component correctly", () => {
  render(<CountryForm />);
});

test("initially submit button should be disabled", () => {
  render(<CountryForm />);
  const submitButton = screen.getByTestId(/submit-button/i);
  expect(submitButton).toBeDisabled();
});

test("after enter country value submit button must be enabled", () => {
  render(<CountryForm />);
  const inputField = screen.getByTestId(/country-search-input/i);
  fireEvent.change(inputField, {
    target: { value: "india" },
  });
  expect(screen.getByText(/submit/i)).toBeEnabled();
});
