import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={[styles.elementcardinfoCardsmalliParent, className].join(" ")}
    >
      <img
        className={styles.elementcardinfoCardsmalliIcon}
        loading="lazy"
        alt=""
        src="/elementcardinfocardsmalliconpositionleft@2x.png"
      />
      <div className={styles.titleParent}>
        <div className={styles.title}>Title Goes Here</div>
        <div
          className={styles.body}
        >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
