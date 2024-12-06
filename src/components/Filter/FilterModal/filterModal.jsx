import styles from "./filterModal.module.css";

export const FilterModal = () => {
    return (
        <div className={styles.Filter__modal}>
            <div className={styles.filter__modal_option}>
                <p>Порфюм</p>
            </div>
            <div className={styles.filter__modal_option}>
                <p>Порфюм</p>
            </div>
            <div className={styles.filter__modal_option}>
                <p>Порфюм</p>
            </div>
            <div className={styles.filter__modal_option}>
                <p>Порфюм</p>
            </div>
        </div>
    );
};