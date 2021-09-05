import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.header}>

            <div className={s.butt}>
                <NavLink to="/main" activeClassName={s.activeLink}>
                    <div>Devious Project</div>
                </NavLink>
            </div>
            <div className={s.butt}>
                <NavLink to="/main" activeClassName={s.activeLink}>
                    <div>Главная</div>
                </NavLink>
            </div>
            <div className={s.butt}>
                <NavLink to="/main" activeClassName={s.activeLink}>
                    <div>Новости</div>
                </NavLink>
            </div>
            <div className={s.butt}>
                <NavLink to="/main" activeClassName={s.activeLink}>
                    <div>Как начать игру</div>
                </NavLink>
            </div>
            <div className={s.butt}>
                <NavLink to="/main" activeClassName={s.activeLink}>
                    <div>Личный кабинет</div>
                </NavLink>
            </div>


        </div>
    )
}
export default Header;