import styles from "/src/pages/profile/profile.module.css"
import { Footer } from "../../components/Footer/footer";
import { Menu } from "../../components/Menu/menu";
import { Link } from "@tanstack/react-router";

export const Profile = () => {
  return(
    <div>
      <div className={styles.Profile}>
          <div className={styles.Profile__content}>
              <div className={styles.content__info}>
                  <h1>testmail@mail.com</h1>
              </div>
              <Link to="/admin"><button className={styles.content_button}>Создать карточку</button></Link>
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
}