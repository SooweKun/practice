import { Menu } from "../../components/Menu/menu";
import { Warning } from "../../components/Warning/warning";
import { Footer } from "../../components/Footer/footer";
import styles from "/src/pages/dostavka/dostavka.module.css"

export const Dostavka = () => {
    return (
      <div className={styles.Dostavka}>
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