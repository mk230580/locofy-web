import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.navWrapper, className].join(" ")}>
      <header className={styles.nav}>
        <nav className={styles.navInner}>
          <nav className={styles.homeParent}>
            <a className={styles.home}>Home</a>
            <a className={styles.about}>About</a>
            <a className={styles.contact}>Contact</a>
          </nav>
        </nav>
        <div className={styles.rectangle} />
        <div className={styles.landieWrapper}>
          <a className={styles.landie}>Landing</a>
        </div>
        <div className={styles.elementbuttonsmallfilledWrapper}>
          <div className={styles.elementbuttonsmallfilled}>
            <div className={styles.bg} />
            <a className={styles.buttonLabel}>Buy Now</a>
          </div>
        </div>
      </header>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
