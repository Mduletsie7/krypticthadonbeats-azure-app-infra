// HeroSection.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero"; // Adjust the path if needed
import '@testing-library/jest-dom';

describe("Hero Section", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it("renders the Hero section", () => {
    const section = screen.getByRole("region", { name: /hero section/i });
    expect(section).toBeInTheDocument();
  });

  it("displays the correct heading", () => {
    const heading = screen.getByRole("heading", { name: /kryptic tha don/i });
    expect(heading).toBeInTheDocument();
  });

  it("displays the correct description", () => {
    const paragraph = screen.getByText(/music producer from Cape Town/i);
    expect(paragraph).toBeInTheDocument();
  });

  it("has a styled span with class 'herotxt-kryptic'", () => {
    const span = screen.getByText("Kryptic");
    expect(span).toHaveClass("herotxt-kryptic");
  });
});
