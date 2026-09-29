import { render } from "@testing-library/react";
import IndicationArrows from "@/components/IndicationArrows";

describe("IndicationArrows", () => {
  it("renders three indication arrows", () => {
    const { container } = render(<IndicationArrows />);
    const arrows = container.querySelectorAll(".cd-single-step");
    expect(arrows.length).toBe(3);
  });

  it("has right, bottom, left classes", () => {
    const { container } = render(<IndicationArrows />);
    expect(container.querySelector(".indication-right")).toBeInTheDocument();
    expect(container.querySelector(".indication-bottom")).toBeInTheDocument();
    expect(container.querySelector(".indication-left")).toBeInTheDocument();
  });

  it("arrows are hidden by default", () => {
    const { container } = render(<IndicationArrows />);
    const arrows = container.querySelectorAll(".cd-single-step");
    arrows.forEach((el) => {
      expect(el).toHaveStyle({ display: "none" });
    });
  });
});
