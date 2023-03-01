import styles from "./styles";
import { CardDeal, CTA, Footer, Navbar, Overview } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Overview/>
        <CardDeal/>
        <CTA/>
        {/* TODO: ADD More Info about Team members, Expertise and services, Unique value proposition, Awards and recognition, Company culture, Contact information */}
        <Footer/>
      </div>
    </div>
  </div>
);

export default App;