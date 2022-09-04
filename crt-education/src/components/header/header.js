import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faBars, faMagnifyingGlass, faClock, faUser} from "@fortawesome/free-solid-svg-icons";

import { toggleActive } from "../app/appSlice";

import './header.sass'
import { useDispatch } from "react-redux";

// Решил поверстать немного. Заодно создал кнопку "Войти", на которую повесил функционал открытия модального окна.

const Header = () => {
    const dispatch = useDispatch();

    const onToggleActive = () => {
        dispatch(toggleActive());
    }   

    return (
        <header className="header">
            <div className="header__topContainer">
                <div className="header__logistic">
                    <a href="/" className="header__item">Тюмень</a>
                    <a href="/" className="header__item">Магазины</a>
                    <a href="/" className="header__item">Доставка</a>
                </div>
                <div className="header__other">
                    <a href="/" className="header__item">Блог «М.Клик»</a>
                    <a href="/" className="header__item">M.Club</a>
                    <a href="/" className="header__item">Для бизнеса</a>
                    <a href="tel:+78006007775" className="header__item"><FontAwesomeIcon icon={faPhone} /> 8-800-600-7775</a>
                </div>
            </div>
            <div className="header__middleContainer">
                <div className="header__flexContainer">
                    <img 
                        src="img/mvideo.svg" 
                        alt="https://www.mvideo.ru/" 
                        className="header__flexContainer_img" 
                        width="117px" 
                        height="48px"/>
                    <button className="header__katalog"><FontAwesomeIcon icon={faBars} />  Каталог</button>
                    <div className="input__container">
                        <input type="text" className="header__input" placeholder="Искать ноутбуки HUAWEI с выгодой до 20 000 р"/>
                        <div className="header__search"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    </div>
                    <div className="header__link">
                        <FontAwesomeIcon fontSize="18px" icon={faClock} />
                        <p className="header__label">Статус заказа</p>
                    </div>
                    <div className="header__link" onClick={onToggleActive}>
                        <FontAwesomeIcon fontSize="18px" icon={faUser} />
                        <p className="header__label">Войти</p>
                    </div>
                    <div className="header__link"></div>
                    <div className="header__link"></div>
                    <div className="header__link"></div>
                </div>
            </div>
        </header>
    )
}

export default Header;

