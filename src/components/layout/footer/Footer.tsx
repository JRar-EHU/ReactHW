import styles from "./Footer.module.css";
import { FOOTER_LINKS } from "./Footer.config";
import instagram from "@assets/icons/instagram.svg";
import youtube from "@assets/icons/youtube.svg";
import tweeter from "@assets/icons/tweeter.svg";
import { Logo } from "@components/UI/logo/Logo.js";
import { Icon } from "@components/UI/icon/Icon.js";
import { Button } from "@components/UI/button/Button.js";
import { Trans, useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.brandText}>
            <Trans i18nKey="footer.title" />
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.linksContainer}>
            {FOOTER_LINKS.map((column) => (
              <div key={column.titleKey} className={styles.column}>
                <h4 className={styles.columnTitle}>{t(column.titleKey)}</h4>
                <nav className={styles.nav}>
                  {column.links.map((link) => (
                    <a key={link.labelKey} href={link.href}>
                      {t(link.labelKey)}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          <Trans
            i18nKey="footer.copyright"
            components={{
              highlight: <span className={styles.highlight} />,
            }}
          />
        </p>
        <div className={styles.social}>
          <Button isIcon variant="empty" className={styles.socialBtn}>
            <Icon src={instagram} alt="instagram-icon" />
          </Button>
          <Button isIcon variant="empty" className={styles.socialBtn}>
            <Icon src={tweeter} alt="twitter-icon" />
          </Button>
          <Button isIcon variant="empty" className={styles.socialBtn}>
            <Icon src={youtube} alt="youtube-icon" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
