import styles from "./catalog.module.css";
import {Link} from "@tanstack/react-router"

export const Catalog = () => {
    return (
        <div className={styles.Catalog__inner}>
            <Link to="/cardInfo">
                <div className={styles.Catalog_img}></div>
            </Link>
            <p className={styles.Catalog_label}>Devil's Intrigue</p>
            <p className={styles.Catalo_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
            <button className={styles.Catalog_button}>Выбрать</button>
        </div>
    );
};