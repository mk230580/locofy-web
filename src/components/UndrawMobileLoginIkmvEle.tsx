import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./UndrawMobileLoginIkmvEle.module.css";

const UndrawMobileLoginIkmvEle = ({ className = "" }) => {
  return (
    <section className={[styles.undrawMobileLoginIkmvEle, className].join(" ")}>
      <div className={styles.mask} />
      <div className={styles.undrawMobileLoginIkmvEleInner}>
        <div className={styles.frameParent}>
          <div className={styles.titleParent}>
            <h1 className={styles.title}>{`Light, Fast & Powerful`}</h1>
            <div className={styles.body}>
              <p
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
              <p className={styles.musDonecQuam}>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <FrameComponent />
            <FrameComponent />
          </div>
        </div>
      </div>
      <img
        className={styles.undrawMobileLoginIkmvIcon}
        loading="lazy"
        alt=""
        src="/undraw-mobile-login-ikmv@2x.png"
      />
    </section>
  );
};

UndrawMobileLoginIkmvEle.propTypes = {
  className: PropTypes.string,
};

export default UndrawMobileLoginIkmvEle;
