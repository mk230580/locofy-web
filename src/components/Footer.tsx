import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.rectangle} />
      <div className={styles.frameParent}>
        <div className={styles.wrapper}>
          <div className={styles.div}>©2023 Yourcompany</div>
        </div>
        <div className={styles.landieWrapper}>
          <h2 className={styles.landie}>Landing</h2>
        </div>
        <div className={styles.elementbuttonsmallfilledWrapper}>
          <div className={styles.elementbuttonsmallfilled}>
            <div className={styles.bg} />
            <div className={styles.buttonLabel}>Purchase now</div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle1} />
        <div className={styles.frameGroup}>
          <div className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <a className={styles.about}>About</a>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.iconsocialinstagramCopy4Parent}>
              <img
                className={styles.iconsocialinstagramCopy4}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-4.svg"
              />
              <img
                className={styles.iconsocialinstagramCopy3}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-3@2x.png"
              />
              <img
                className={styles.iconsocialinstagramCopy2}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-2.svg"
              />
              <img
                className={styles.iconsocialinstagramCopy}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy@2x.png"
              />
              <img
                className={styles.iconsocialinstagram}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
