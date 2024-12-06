import styles from "/src/components/Header/Button1/buttons1.module.css"

export const Button1 = ({img, text}) => {
    return (
        <button className={styles.button1}>{img}{text}</button>
    );
}