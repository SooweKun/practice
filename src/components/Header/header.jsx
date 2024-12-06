import { Button1 } from "./Button1/button1";
import { Button2 } from "./Button2/button2";
import navig from "/src/assets/img/Navigation 3.svg";
import icon from "/src/assets/img/icon.svg";
import Styles from "./header.module.css";
import logo from "/src/assets/img/logo.png";
import profile from "/src/assets/img/profile.svg"
import { Input } from "./Input/input";
import { Link } from "@tanstack/react-router";

export const Header = () => {
    return (
        <div className={Styles.header}>
            <div className={Styles.header__left_menu}>
                <Link to="/auth">
                    <Button1
                        img={<img src={profile}/>}
                    />
                </Link>
                <Button2
                    text="Москва"
                    img={<img src={navig} alt="" />}
                />
            </div>
            <Link to="/" className={Styles.header_img}>
                <img src={logo} alt=""/>
            </Link>
            <div className={Styles.header__right_menu}>
                <Input />
                <Link to="/carzina">
                    <Button1
                        img={<img src={icon} alt="" />}
                    />              
                </Link>
            </div>
        </div>
    );
};