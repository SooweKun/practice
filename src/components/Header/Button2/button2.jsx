import styles from "/src/components/Header/Button2/buttons2.module.css";

export const Button2 = ({img, text}) => {
    return (
        <button className={styles.button2}>{img}{text}</button>
    );
};