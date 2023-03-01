import { office2 } from "../assets";
import styles, { layout } from "../styles";

const CardDeal = () => (
  <section id="product" className={layout.sectionReverse}>

    <div className={layout.sectionImgReverse}>
      <img src={office2} alt="billing" className="w-[100%] h-[80%] relative z-[5] rounded" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        High-Quality Web Solutions for Your Unique Needs<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
        We believe in being honest and upfront with our clients about every aspect of their project, from timelines and costs to the strategies we're using to achieve their goals. We work closely with our clients throughout the entire web development process, and value their input and feedback at every stage. Our ultimate goal is to help our clients achieve their online goals, whether that's increasing their online visibility, driving more traffic to their website, or generating more leads and sales. <br/>
        If you're looking for a trusted partner to help you achieve your online goals, JPC & Co. is here to help. We're passionate about using our skills and expertise to help businesses succeed online, and we'd love to work with you to create a website that helps you achieve your goals.
      </p>

    </div>

  </section>
);

export default CardDeal;