import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
  it("renders logo text", () => {
    render(<Header />);
    expect(
      screen.getByText(/MUU - Unique and Creative Resume/i)
    ).toBeInTheDocument();
  });

  it("renders all navigation menu items", () => {
    render(<Header />);
    const items = [
      "home",
      "about me",
      "skills",
      "education",
      "employment",
      "portfolio",
      "awards",
      "blog",
      "contact",
    ];
    items.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders nav trigger button", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /Open Nav/i })).toBeInTheDocument();
  });

  it("renders social links with correct hrefs", () => {
    render(<Header />);
    expect(document.querySelector('a[href="https://www.facebook.com/"]')).toBeTruthy();
    expect(document.querySelector('a[href="https://www.twitter.com/"]')).toBeTruthy();
    expect(document.querySelector('a[href="https://in.linkedin.com/"]')).toBeTruthy();
  });

  it("renders Themezaa credit link", () => {
    render(<Header />);
    expect(screen.getByText("Themezaa.")).toBeInTheDocument();
  });
});
