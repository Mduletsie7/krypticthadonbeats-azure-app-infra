// PricingTable.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { PricingTable } from "../components/PricingTable"; 
import '@testing-library/jest-dom';

describe("PricingTable Component", () => {
  beforeEach(() => {
    render(<PricingTable />);
  });

  it("renders the main heading", () => {
    const heading = screen.getByText(/licensing info/i);
    expect(heading).toBeInTheDocument();
  });

  it("displays all three pricing tiers", () => {
    expect(screen.getByText("Basic")).toBeInTheDocument();
    expect(screen.getByText("Premium")).toBeInTheDocument();
    expect(screen.getByText("Unlimited")).toBeInTheDocument();
  });

  it("displays correct prices for each tier", () => {
    expect(screen.getByText("$30")).toBeInTheDocument();
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
  });

  it("displays some feature text for Basic license", () => {
    expect(screen.getByText(/5000 sales/i)).toBeInTheDocument();
    expect(screen.getByText(/100,000 Audio Streams/i)).toBeInTheDocument();
  });

  it("displays some feature text for Premium license", () => {
    expect(screen.getByText(/10,000 sales/i)).toBeInTheDocument();
    expect(screen.getByText(/200,000 streams/i)).toBeInTheDocument();
  });

  it("displays some feature text for Unlimited license", () => {
    expect(screen.getByText(/Unlimited sales & Unlimited streams/i)).toBeInTheDocument();
    expect(screen.getByText(/Includes Trackout stem files/i)).toBeInTheDocument();
  });

  it("mentions full ownership is maintained in each plan", () => {
    const ownershipText = /kryptic tha don maintains full ownership of the instrumental/i;
    const ownershipMentions = screen.getAllByText(ownershipText);
    expect(ownershipMentions).toHaveLength(3);
  });
});
