import styles from "./text1.module.css";

export const Text1 = () => {
    return (
        <div className={styles.text}>
            <p className={styles.text_p1}>Главная <span>—</span> Бренды <span>—</span> Cacharel</p>
            <h1 className={styles.text_h1}>Cacharel</h1>
            <p className={styles.text_p2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
        </div>
    );
};