import { render, screen } from "@testing-library/react";
import { Cart } from "@components/features/cart/Cart";
import { describe, it, expect } from "vitest";
describe("Cart Component", () => {
  it("renders with 5 in counter", () => {
    render(<Cart count={5} />);
    const badgeElement = screen.getByText("5");
    expect(badgeElement).toBeInTheDocument();
  });

  it("should render without counter by default", () => {
    render(<Cart />);

    const badgeElement = screen.queryByText("0");
    expect(badgeElement).not.toBeInTheDocument();
  });
});
