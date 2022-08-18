import { useRef, useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import {toggleActive} from "../app/appSlice";

import cn from "classnames";

import useInput from "../../hooks/input.hook";

import './modal.sass'

// Тут я создал копию модального окна при нажатии на кнопку "Войти". Попытаюсь реализовать домашнне задание на форме внутри.

const Modal = () => {
    const [inputValue, setInputValue] = useState('');

    const {validateInput, setInitialInputVal} = useInput();  // Вытаскиваю функции по работе с инпутом из кастомного хука.

    const dispatch = useDispatch();

    const onToggleActive = () => {  // Функция по закрытию модального окна.
        dispatch(toggleActive());
    }

    const onSendForm = () => {  //При неполностью введенном номере и попытке отправить форму переключаем фокус на инпут.
        if (inputValue.length === 12) {
            dispatch(toggleActive());
        }
        ref.current.focus();
    }

    const ref = useRef();  //Инициализируем ref

    const btnClass = cn('modal__enter', {  // Применил библиотеку classNames для функционала открытия модального окна.
        "modal__enter-active": inputValue.length === 12
    })

    // Реализовал закрытие модального окна по таймеру. При размонтировании модального окна происходит отписка от timeOut.
    useEffect(() => {
        const closeModal = () => {
            dispatch(toggleActive());
        }

        const timeOut = setTimeout(closeModal, 60000)

        return () => {
            clearTimeout(timeOut);
        }
        //eslint-disable-next-line
    }, [])

    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__close" 
                    onClick={onToggleActive}
                    onKeyPress={(e) => {
                        if (e.key === "Escape") {
                            onToggleActive();
                        }
                    }}>x</div>
                <h3 className="modal__title">Вход или регистрация</h3>
                <input 
                    type="text" 
                    className="modal__input" 
                    placeholder="Телефон"
                    value={inputValue}
                    onChange={(e) => validateInput(inputValue, e, setInputValue)}      // Функция по записи и валидации номера введенного в input. Запись результата в value. // Добавил кастомный хук для валидации введенного значения.
                    onClick={() => setInitialInputVal(inputValue, setInputValue)}      // При фокусе на форму создается шаблон. Добавил создание шаблона в инпуте при фокусе, через кастомный хук.
                    ref={el => ref.current = el}
                    onKeyPress={e => {
                            if (e.key === "Enter") {
                                onSendForm();
                            }
                        }}/>
                <button 
                    className={btnClass} 
                    onClick={onSendForm}>Продолжить</button>
                <a href="/" className="modal__ur">{"Для юридических лиц >"}</a>
            </div>
        </div>  
    )
}

export default Modal;