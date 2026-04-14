import styles from "./Footer.module.css";
import { FOOTER_LINKS } from "./Footer.config.js";
import instagram from "@assets/icons/instagram.svg";
import youtube from "@assets/icons/youtube.svg";
import tweeter from "@assets/icons/tweeter.svg";
import { Logo } from "@components/UI/logo/Logo.jsx";
import { Icon } from "@components/UI/icon/Icon.jsx";
import { Button } from "@components/UI/button/Button.jsx";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.brandText}>
            Takeaway & Delivery template <br />
            for small - medium businesses.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.linksContainer}>
            {FOOTER_LINKS.map((column) => (
              <div key={column.title} className={styles.column}>
                <h4 className={styles.columnTitle}>{column.title}</h4>
                <nav className={styles.nav}>
                  {column.links.map((link) => (
                    <a key={link.label} href={link.href}>
                      {link.label}
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
          Built by <span className={styles.highlight}>Flowbase</span> · Powered
          by <span className={styles.highlight}>Webflow</span>
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
