// LeaseBeats.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import LeaseBeats from "../components/LeaseBeats"; // 
import '@testing-library/jest-dom';

describe("LeaseBeats Component", () => {
  beforeEach(() => {
    render(<LeaseBeats />);
  });

  it("renders the main heading", () => {
    const heading = screen.getByRole("heading", { name: /browse beats/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the metadata subheading", () => {
    const meta = screen.getByText(/instant download after purchase/i);
    expect(meta).toBeInTheDocument();
  });

  it("renders the iframe inside the HTML content", () => {
    const iframe = document.querySelector("iframe");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", expect.stringContaining("beatstars.com"));
    expect(iframe).toHaveAttribute("width", "100%");
    expect(iframe).toHaveAttribute("height", "800");
  });
});
