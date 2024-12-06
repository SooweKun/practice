import styles from "/src/pages/contact/contact.module.css"
import { Menu } from "../../components/Menu/menu";
import { Footer } from "../../components/Footer/footer"


export const Contact = () => {
    return (
      <div className={styles.Contact}>
        <div className={styles.Contact__inner}>
          <div className={styles.Contact__about}>
            <h1>О нас</h1>
            <p>Мы — команда экспертов в мире ароматов,
               которая стремится предоставить вам самые изысканные и качественные парфюмы.
                Наша цель — помочь вам найти идеальный аромат, который станет отражением вашей индивидуальности.
            </p>
          </div>
          <div className={styles.Contact__story}>
            <h1>История</h1>
            <p>Наш онлайн-магазин был основан с любовью
               к парфюмерии и стремлением поделиться этой 
               страстью с нашими клиентами. Мы тщательно отбираем 
               каждый аромат, чтобы предложить вам только лучшее.
            </p>
          </div>
          <div className={styles.Contact__adress}>
            <h1>Связь</h1>
            <p>Телефон: +7 (XXX) XXX-XX-XX.</p>
            <p>Почта: example@example.com.</p>
            <p>ВКонтакте: vk.com/example.</p>
            <p>Telegram: @example_id.</p>
          </div>
        </div>
        <div className={styles.main__Footer}>
          <Footer />
        </div>
        <div className={styles.main__Menu}>
          <Menu />
        </div>
      </div>
    );
};  