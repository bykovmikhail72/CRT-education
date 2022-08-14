
const useInput = () => {  // Хук по работе с инпутом. Использовал для валидации введенного значения.
    const validateInput = (val, e, setVal) => {  // Функция по валидации инпута.
        if (!isNaN(e.target.value) && val.length < 12) {
            setVal(e.target.value);
        }
    }

    const setInitialInputVal = (val, setVal) => {  // Функция по созданию шаблона инпута.
        if (!val) {
            setVal('+7');
        }
    }
    return {validateInput, setInitialInputVal};
}

export default useInput;