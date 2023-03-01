import { office1 } from "../assets";
import styles, { layout } from "../styles";

const Overview = () => (
  <section id="product" className={layout.sectionReverse}>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover How JPC & Co. Helps Businesses Succeed Online<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
        JPC & Co. is a full-service web development company that was founded in 2022. Our mission is to help businesses of all sizes succeed online by delivering high-quality web solutions tailored to their unique needs. We believe in the power of technology to transform businesses, and our goal is to make that transformation as seamless and effective as possible. <br/>
        At JPC & Co., we're committed to providing exceptional customer service and delivering results that exceed our clients' expectations. We pride ourselves on our attention to detail and our ability to create websites that are not only visually appealing, but also user-friendly and optimized for search engines. We stay up-to-date with the latest web development and design trends and technologies, and bring our extensive experience to every project we work on.
      </p>

    </div>

    <div className={layout.sectionImgReverse}>
      <img src={office1} alt="billing" className="w-[100%] h-[70%] relative z-[5] rounded" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

  </section>
);

export default Overview;