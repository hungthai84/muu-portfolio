import { render, screen } from "@testing-library/react";
import AboutSlide from "@/components/AboutSlide";

describe("AboutSlide", () => {
  it("renders section with id about-me", () => {
    const { container } = render(<AboutSlide />);
    expect(container.querySelector("#about-me")).toBeInTheDocument();
  });

  it("renders slide title", () => {
    render(<AboutSlide />);
    expect(screen.getByText("about me")).toBeInTheDocument();
  });

  it("renders personal info fields", () => {
    render(<AboutSlide />);
    expect(screen.getByText("Name:")).toBeInTheDocument();
    expect(screen.getByText("Beckham Roy")).toBeInTheDocument();
    expect(screen.getByText("Email:")).toBeInTheDocument();
    expect(screen.getByText("beckham@gmail.com")).toBeInTheDocument();
  });

  it("renders Download Resume button", () => {
    render(<AboutSlide />);
    expect(screen.getByText(/Download Resume/i)).toBeInTheDocument();
  });

  it("renders short history section", () => {
    render(<AboutSlide />);
    expect(screen.getByText("short history")).toBeInTheDocument();
  });

  it("email is a mailto link", () => {
    render(<AboutSlide />);
    const email = screen.getByText("beckham@gmail.com");
    expect(email.closest("a")).toHaveAttribute("href", "mailto:beckham@gmail.com");
  });
});
