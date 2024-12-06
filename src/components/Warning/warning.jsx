import styles from "/src/components/Warning/warning.module.css"

export const Warning = () => {
    return(
        <div className={styles.Warning__inner}>
            <h1 className={styles.Warning__h1}>
                Находится в разработке 
            </h1>
        </div>
    );
}