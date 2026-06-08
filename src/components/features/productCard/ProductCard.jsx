import styles from "./ProductCard.module.css";
import { Button } from "@components/UI/button/Button.jsx";
import { SimpleCounterInput } from "@components/UI/simpleCounter/SimpleCounterInput.jsx";
import { useState } from "react";
import { useCart } from "../../../context/CartContext.jsx";

export const ProductCard = ({ imgUrl, name, price, description, meal }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(quantity);
    setQuantity(1);
  };

  return (
    <div className={styles.card}>
      <img src={imgUrl} alt={name} className={styles.productImg} />
      <div className={styles.info}>
        <div className={styles.mainInfo}>
          <h3 className={styles.productName}>{name}</h3>
          <p className={styles.productPrice}>$ {price} USD</p>
        </div>
        <p className={styles.productDesc}>{description}</p>
        <div className={styles.control}>
          <SimpleCounterInput
            value={quantity}
            onChange={setQuantity}
            className={styles.productCardInput}
          />
          <Button onClick={handleAdd} className={styles.productCardBtn}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
