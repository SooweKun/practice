import styles from "./list.module.css";

export const List = () => {
    return (
        <div className={styles.List__inner}>
            <div className={styles.List__button}>
                <p className={styles.List__button_text}>1</p>
            </div>
            <div className={styles.List__button}>
                <p className={styles.List__button_text}>2</p>
            </div>
            <div className={styles.List__button}>
                <p className={styles.List__button_text}>3</p>
            </div>
            <div className={styles.List__button}>
                <p className={styles.List__button_text}>4</p>
            </div>
            <div className={styles.List__button}>
                <p className={styles.List__button_text}>...</p>
            </div>
            <div className={styles.List__button}>
                <p className={styles.List__button_text}>9</p>
            </div>
        </div>
    );
};