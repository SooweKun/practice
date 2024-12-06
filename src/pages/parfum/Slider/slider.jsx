import styles from "/src/pages/parfum/Slider/slider.module.css"
import {useState} from "react"
import one from "/src/assets/img/1.jpg"
import two from "/src/assets/img/2.jpg"
import three from "/src/assets/img/3.jpg"
import four from "/src/assets/img/4.jpg"
import five from "/src/assets/img/5.jpg"
import next1 from "/src/assets/img/arrow_forward_ios_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import back2 from "/src/assets/img/arrow_back_ios_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"

export const Slider = () => {
    const [slider, setSlider] = useState(0);
    const Array = [one, two, three, four, five]

    const next = () => {
        setSlider((prevIndex) => (prevIndex + 1) % Array.length)
    }

    const back = () => {
        setSlider((prevIndex) => (prevIndex -1 + Array.length) % Array.length)
    }

    return(
        <div className={styles.Slider}>
            <div className={styles.Slider__buttons}>
                <button className={styles.Slider__button_back} onClick={back}>
                    <img src={back2} alt="" />
                </button>
                <button className={styles.Slider__button_next} onClick={next}>
                    <img src={next1} alt="" />
                </button>
            </div>
            <img src={Array[slider]} alt="not found" />
        </div>
    );
}