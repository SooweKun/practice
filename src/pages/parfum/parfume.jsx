import styles from "/src/pages/parfum/parfume.module.css"
import { Menu } from "../../components/Menu/menu";
import { Slider } from "./Slider/slider";
import { Footer } from "../../components/Footer/footer";

export const Parfume = () => {
    return (
      <div>
        <div className={styles.Slider}>
          <Slider />
        </div>
        <div className={styles.main__Footer}>
          <Footer />
        </div>
        <div className={styles.main__Menu}>
          <Menu />
        </div>
      </div>  
    );
};