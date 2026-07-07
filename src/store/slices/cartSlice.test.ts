import cartReducer, { addToCart, clearCart } from "./cartSlice";
import { describe, it, expect } from "vitest";

describe("cartSlice reducer", () => {
  const initialState = { cartCount: 0 };
  it("should return the initial state in case of unknown action", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should increase cartCount after 'Add to cart'", () => {
    const actual = cartReducer(initialState, addToCart(3));
    expect(actual.cartCount).toBe(3);
    const nextState = cartReducer(actual, addToCart(2));
    expect(nextState.cartCount).toBe(5);
  });

  it("should clear cart", () => {
    const rawState = { cartCount: 4 };
    const actual = cartReducer(rawState, clearCart());
    expect(actual.cartCount).toBe(0);
  });
});
