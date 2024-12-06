import styles from "/src/pages/auth/auth.module.css"
import {useForm} from 'react-hook-form';
import { Link } from "@tanstack/react-router";
import { Footer } from "../../components/Footer/footer";
import { Menu } from "../../components/Menu/menu";

export const Auth = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const getData = (data) => {
    console.log(data);
  }

  return (
    <div>
      <div className={styles.Auth}>
        <form className={styles.Auth__inner}>
            <h1 className={styles.Auth__h1}>Вход</h1>
            <div className={styles.Auth__content}>
              <div className={styles.Auth__inputs}>
                <input type="email" placeholder="Email" className={styles.Auth__inputs_input}
                  {...register('Email', {required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                />
                  {errors?.Email?.type === 'required' && <p className={styles.error_p}>Форма не заполнена</p>}
                  {errors?.Email?.type ==='pattern' && <p className={styles.error_p}>Форма должна выглядеть как email</p>}
                <input type="text" placeholder="Пароль" className={styles.Auth__inputs_input}
                {...register('Password', {minLength: 4, maxLength: 8, required: true})}
                />
                  {errors?.Password?.type === 'required' && <p className={styles.error_p}>Форма не заполнена</p>}
                  {errors?.Password?.type === 'minLength' && <p className={styles.error_p}>Форма должна содержать минимум 4 символов</p>}
                  {errors?.Password?.type === 'maxLength' && <p className={styles.error_p}>Форма должна содержать максимум 8 символов</p>}
              </div>
              <Link><button type="submit" className={styles.Auth_button_auth} onClick={handleSubmit(getData)}>Войти</button></Link>
            </div>
        </form>
        <Link to="/reg"><button className={styles.Auth_button_reg}>Регистрация</button></Link>
      </div>
      <div className={styles.main__Fo0ter}>
        <Footer />
      </div>
      <div className={styles.main__Menu}>
        <Menu />
      </div>
   </div>
  );
}