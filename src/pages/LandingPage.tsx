import FrameComponent1 from "../components/FrameComponent1";
import UndrawMobileLoginIkmvEle from "../components/UndrawMobileLoginIkmvEle";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage2}>
      <div className={styles.mask} />
      <FrameComponent1 />
      <div className={styles.landingPage2Inner}>
        <div className={styles.frameParent}>
          <div className={styles.titleParent}>
            <h1
              className={styles.title}
            >{`Introduce Your Product Quickly & Effectively`}</h1>
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
          <div className={styles.elementbuttonlargefilledParent}>
            <div className={styles.elementbuttonlargefilled}>
              <div className={styles.bg} />
              <div className={styles.buttonLabel}>Purchase UI Kit</div>
            </div>
            <div className={styles.elementbuttonlargefilledCo}>
              <div className={styles.bg1} />
              <a className={styles.buttonLabel1}>Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <UndrawMobileLoginIkmvEle />
      <FrameComponent2 />
      <section className={styles.introCopy}>
        <div className={styles.rectangle} />
        <img
          className={styles.undrawSocialInfluencerSgsvIcon}
          loading="lazy"
          alt=""
          src="/undraw-social-influencer-sgsv.svg"
        />
        <div className={styles.introCopyInner}>
          <div className={styles.titleGroup}>
            <h1 className={styles.title1}>{`Light, Fast & Powerful`}</h1>
            <div className={styles.body1}>
              <p
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
              <p className={styles.musDonecQuam1}>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent3 />
      <FrameComponent4 />
      <Footer />
      <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
    </div>
  );
};

export default LandingPage;
