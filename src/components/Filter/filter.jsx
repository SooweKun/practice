import styles from "./filter.module.css";
import Arrow from "/src/assets/img/Down.svg"
import Option from "/src/assets/img/Options 2.svg"
import { FilterModal } from "./FilterModal/filterModal";
import { useState } from "react";

export const Filter = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(!showModal);
    };

    return (
        <div className={styles.filter__inner}>
            <div className={styles.Filter__modal}>
                <button className={styles.Filter_button1} onClick={handleClick}>
                    По популярности
                    <img src={Arrow} alt="" />
                </button>
                {showModal && (<FilterModal />)}
            </div>
            <button className={styles.Filter_button2}>
                <img src={Option} alt="" />
                Фильтры
            </button>
        </div>
    );
};