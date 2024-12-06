import styles from "/src/pages/carzina/Card/card.module.css"

export const Card = () => {
    return(
        <div className={styles.Card}>
            <div className={styles.Card_img}></div>
                <div className={styles.Card_info}>
                <h1>Devil's Intrigue</h1>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt...
                </p>
            </div>
        </div>
    );
}