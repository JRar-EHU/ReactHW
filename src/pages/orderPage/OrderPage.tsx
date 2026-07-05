import styles from "./OrderPage.module.css";
import { useNavigate } from "react-router-dom";
import { clearCart } from "@store/slices/cartSlice";
import { Button } from "@components/UI/button/Button";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { SyntheticEvent } from "react";

export const OrderPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cartCount = useAppSelector((state) => state.cart.cartCount);

  const handleSubmitOrder = (
    e: SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
    dispatch(clearCart());
    navigate("/");
  };

  if (cartCount === 0) {
    return (
      <div className={styles.cartEmpty}>
        <h2>Your cart is empty</h2>
        <p>Check the menu first!</p>
        <Button onClick={() => navigate("/menu")} variant="primary" size="md">
          Go to Menu
        </Button>
      </div>
    );
  }
  return (
    <div className={styles.orderPage}>
      <h2>Checkout</h2>
      <div className={styles.order}>
        <p>
          <strong>Total items in order:</strong> {cartCount} position(s)
        </p>
      </div>

      <form onSubmit={handleSubmitOrder} className={styles.orderForm}>
        <label className={styles.orderForm}>
          Delivery Address
          <input
            type="text"
            placeholder="123 Pizza Street"
            required
            className={styles.orderFormInput}
          />
        </label>

        <label className={styles.orderForm}>
          Phone Number
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            required
            className={styles.orderFormInput}
          />
        </label>

        <Button
          type="submit"
          variant="primary"
          size="md"
          className={styles.orderPageButton}
        >
          Confirm and Pay
        </Button>
      </form>
    </div>
  );
};
