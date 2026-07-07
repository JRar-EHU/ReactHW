import styles from "./ProductCard.module.css";
import { Button } from "@components/UI/button/Button";
import { SimpleCounterInput } from "@components/UI/simpleCounter/SimpleCounterInput";
import { useState } from "react";
import { addToCart } from "@store/slices/cartSlice";
import { ProductCart } from "@types";
import { useAppDispatch } from "@store/hooks";

export const ProductCard = ({
  imgUrl,
  name,
  price,
  description,
}: ProductCart) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(addToCart(quantity));
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
            onValueChange={setQuantity}
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
