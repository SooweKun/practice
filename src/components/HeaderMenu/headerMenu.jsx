import { Link } from "@tanstack/react-router";
import styles from "/src/components/HeaderMenu/HeaderMenu.module.css"

export const HeaderMenu = () => {
    return (
        <div className={styles.header__menu}>
            <Link to="/parfum/" className={styles.header__menu_link}>Парфюмерия</Link>
            <Link to="/aromat" className={styles.header__menu_link}>Ароматы для дома</Link>
            <Link to="/nabor" className={styles.header__menu_link}>Наборы</Link>
            <Link to="/dostavka" className={styles.header__menu_link}>Доставка и оплата</Link>
            <Link to="/contact" className={styles.header__menu_link}>Контакты</Link>
        </div>
    );
};