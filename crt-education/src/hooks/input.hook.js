import { useState } from "react";

const useInput = () => {  // Хук по работе с инпутом. Использовал для валидации введенного значения.
    const [inputValue, setInputValue] = useState('');  // Добавил состояние input в кастомный хук.

    const validateInput = (e) => {  // Функция по валидации инпута.
        if (!isNaN(e.target.value) && inputValue.length < 12) {
            setInputValue(e.target.value);
        }
    }

    const setInitialInputVal = () => {  // Функция по созданию шаблона инпута.
        if (!inputValue) {
            setInputValue('+7');
        }
    }
    return {validateInput, setInitialInputVal, inputValue};
}

export default useInput;