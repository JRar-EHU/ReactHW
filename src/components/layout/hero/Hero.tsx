import styles from "./Hero.module.css";
import heroImage from "@assets/images/food.png";
import clientLogo from "@assets/icons/trustpilot-logo.svg";
import { Button } from "@components/UI/button/Button.js";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/orders");
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Beautiful food & takeaway,
          <span className={styles.highlight}> delivered </span>
          to your door.
        </h1>

        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500.
        </p>

        <Button
          variant={"primary"}
          size={"md"}
          className={styles.heroBtn}
          onClick={handlePlaceOrder}
        >
          Place an Order
        </Button>

        <div className={styles.client}>
          <img
            className={styles.clientLogo}
            src={clientLogo}
            alt="client-logo"
          />
          <p className={styles.clientDescription}>
            <span className={styles.highlight}>4.8 out of 5 </span>
            based on 2000+ reviews
          </p>
        </div>
      </div>

      <div>
        <img src={heroImage} className={styles.heroImg} alt="hero-image" />
      </div>
    </section>
  );
};
