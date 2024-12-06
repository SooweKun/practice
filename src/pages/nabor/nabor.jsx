import styles from "/src/pages/nabor/nabor.module.css"
import { Menu } from "../../components/Menu/menu";
import { Warning } from "../../components/Warning/warning";
import { Footer } from "../../components/Footer/footer";

export const Nabor = () => {
    return (
      <div className={styles.Nabor}>
        <div className={styles.Warning}>
          <Warning />
        </div>
        <div className={styles.Footer}>
          <Footer />
        </div>
        <div className={styles.main__Menu}>
          <Menu />
        </div>
      </div> 
    );
};