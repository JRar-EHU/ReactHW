import styles from "./Hero.module.css";
import heroImage from "@assets/images/food.png";
import clientLogo from "@assets/icons/trustpilot-logo.svg";
import { Button } from "@components/UI/button/Button";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

export const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handlePlaceOrder = () => {
    navigate("/orders");
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <Trans
            i18nKey="hero.title"
            components={{
              highlight: <span className={styles.highlight} />,
            }}
          />
        </h1>

        <p className={styles.description}>{t("hero.description")}</p>

        <Button
          variant={"primary"}
          size={"md"}
          className={styles.heroBtn}
          onClick={handlePlaceOrder}
        >
          {t("hero.button")}
        </Button>

        <div className={styles.client}>
          <img
            className={styles.clientLogo}
            src={clientLogo}
            alt="client-logo"
          />
          <p className={styles.clientDescription}>
            <Trans
              i18nKey="hero.reviews"
              components={{
                highlight: <span className={styles.highlight} />,
              }}
            />
          </p>
        </div>
      </div>

      <div>
        <img src={heroImage} className={styles.heroImg} alt="hero-image" />
      </div>
    </section>
  );
};
