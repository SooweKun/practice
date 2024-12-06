import styles from "/src/pages/reg/reg.module.css"
import {useForm} from 'react-hook-form';
import { Link } from "@tanstack/react-router";
import { Footer } from "../../components/Footer/footer";
import { Menu } from "../../components/Menu/menu";

export const Reg = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const getData = (data) => {
    console.log(data)
  }

  return(
    <div>
      <div className={styles.Reg}>
          <form className={styles.Reg__inner} >
            <h1 className={styles.Reg__h1}>Регистрация</h1>
            <div className={styles.Reg__content}>
              <div className={styles.Reg__inputs}>
                <input type="email" placeholder="Email" className={styles.Reg__inputs_input}
                  {...register('Email', {required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                />
                  {errors?.Email?.type === 'required' && <p className={styles.error_p}>Форма не заполнена</p>}
                  {errors?.Email?.type ==='pattern' && <p className={styles.error_p}>Форма должна выглядеть как email</p>}
                <input type="text" placeholder="Пароль" className={styles.Reg__inputs_input}
                  {...register('Password', {minLength: 4, maxLength: 8, required: true})}
                />
                  {errors?.Password?.type === 'required' && <p className={styles.error_p}>Форма не заполнена</p>}
                  {errors?.Password?.type === 'minLength' && <p className={styles.error_p}>Форма должна содержать минимум 4 символов</p>}
                  {errors?.Password?.type === 'maxLength' && <p className={styles.error_p}>Форма должна содержать максимум 8 символов</p>}
              </div>
              <button type="submit" className={styles.Reg_button_auth} onClick={handleSubmit(getData)}>Регистрация</button>
            </div>
        </form>
        <Link to="/auth"><button className={styles.Reg_button_reg}>Вход</button></Link>
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