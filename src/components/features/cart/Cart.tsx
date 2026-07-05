import styles from "./Cart.module.css";
import { Button } from "@components/UI/button/Button.js";
import { Icon } from "@components/UI/icon/Icon.js";
import { Badge } from "@components/UI/badge/Badge.js";

import cartIcon from "@assets/icons/cart.svg";

export const Cart = ({ count = 0 }) => {
  return (
    <div className={styles.cart}>
      <Button
        size="md"
        variant="primary"
        isIcon={true}
        className={styles.cartBtn}
      >
        <Icon src={cartIcon} size={"md"} alt="cart" />
        <Badge count={count} className={styles.badgePosition} />
      </Button>
    </div>
  );
};
