import { render, screen } from "@testing-library/react";
import HomeSlide from "@/components/HomeSlide";

describe("HomeSlide", () => {
  it("renders with id home and visible class", () => {
    const { container } = render(<HomeSlide />);
    const li = container.querySelector("#home");
    expect(li).toBeInTheDocument();
    expect(li).toHaveClass("visible");
  });

  it("renders name Beckham Roy", () => {
    render(<HomeSlide />);
    expect(screen.getByText(/Beckham Roy/i)).toBeInTheDocument();
  });

  it("renders all three slide numbers", () => {
    render(<HomeSlide />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
  });

  it("renders Read More CTAs", () => {
    render(<HomeSlide />);
    const links = screen.getAllByText(/Read More/i);
    expect(links.length).toBeGreaterThanOrEqual(2);
  });

  it("renders signature image", () => {
    const { container } = render(<HomeSlide />);
    const sig = container.querySelector(".signature img");
    expect(sig).toBeInTheDocument();
    expect(sig).toHaveAttribute("src", expect.stringContaining("signature.png"));
  });

  it("renders sub-slides structure", () => {
    const { container } = render(<HomeSlide />);
    expect(container.querySelectorAll(".sub-slides > li").length).toBe(3);
  });
});
