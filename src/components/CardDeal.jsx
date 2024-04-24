import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>

      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Navigate through our simple steps to find the best card deal tailored to your needs. Make informed decisions and unlock better card deals in just a few clicks.</p>

      <Button styles="mt-10"/>

    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal