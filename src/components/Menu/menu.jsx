import { Link } from "@tanstack/react-router";
import styles from "./menu.module.css";

export const Menu = () => {
    return (
        <div className={styles.menu__inner}>
            <Link to="/profile"><img src="/src/assets/img/profile.svg" alt="" className={styles.menu__inner_img}/></Link>
            <img src="/src/assets/img/menuIc.svg" alt="" className={styles.menu__inner_img}/>
            <Link to="/carzina"><img src="/src/assets/img/catalogIc.svg" alt="" className={styles.menu__inner_img}/></Link>
        </div>
    );
};