import styles from "/src/components/Footer/footer.module.css";

export const Footer = () => {
    return (
        <div className={styles.footer__inner}>
            <div className={styles.footer__buttons}>
                <button className={styles.footer__buttons_button1}>Оплата</button>
                <button className={styles.footer__buttons_button2}>Доставка</button>
                <button className={styles.footer__buttons_button3}>О нас</button>
            </div>
            <div className={styles.footer__text}>
                <p>Контакты</p>
                <p>Оферта</p>
                <p>Пользовательское соглашение</p>
                <p>Политика конфиденциальности</p>
            </div>
            <p className={styles.footer__p}> © 2023 – 2024. «Полфлакона». Все права защищены.</p>
        </div>
    );
};