import styles from "/src/pages/carzina/carzina.module.css"
import { Footer } from "../../components/Footer/footer"
import { Menu } from "../../components/Menu/menu";
import { Card } from "./Card/card";
import { useMemo } from "react";

export const Carzina = () => {
const carzinaItems = useMemo(() => {
        return Array.from({ length: 4 }).map((_, index) => (
            <Card key={index} />
        ));
      }, []);

    return(
        <div className={styles.Karzina}>
            <div className={styles.Karzina__inner}>
                {carzinaItems}
            </div>
            <div className={styles.main__Footer}>
                <Footer />
            </div>
            <div className={styles.main__Menu}>
                <Menu />
            </div>
        </div>
    );
}