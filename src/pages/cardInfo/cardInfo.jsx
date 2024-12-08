import styles from "/src/pages/cardInfo/cardInfo.module.css"
import { Footer } from "../../components/Footer/footer"
import { Menu } from "../../components/Menu/menu";

export const CardInfo = () => {
    return(
        <div className={styles.CardInfo}>
            <div className={styles.CardInfo__content}>
                <div className={styles.CardInfo__img}></div>
                <div className={styles.CardInfo__text}>
                    <h1 className={styles.CardInfo__text_name}>Название</h1>
                    <p className={styles.CardInfo__text_info}>
                        описание описание описание описание описание 
                        описание описание описание описание описание 
                        описание описание описание описание описание 
                        описание описание описание описание описание 
                        описание описание описание описание описание 
                        описание описание описание описание описание 
                        описание описание описание описание описание 
                        описание описание описание описание описание 
                        описание описание описание описание описание 
                    </p>
                    <button className={styles.CardInfo__text_button}>В корзину</button>
                </div>
            </div>
            <div className={styles.Footer}>
                <Footer />
            </div>
            <div className={styles.main__Menu}>
                <Menu />
            </div>
        </div>
    );
}