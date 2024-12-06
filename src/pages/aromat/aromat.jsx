import { Menu } from "../../components/Menu/menu";
import { Warning } from "../../components/Warning/warning";
import { Footer } from "../../components/Footer/footer";
import styles from "/src/pages/aromat/aromat.module.css"

export const Aromat = () => {
    return (
      <div className={styles.Aromat}>
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