import { useCallback } from "react";
import Card from "../cards/cards";

import './carousel.sass';

const Carousel = () => {
    
    let i = 0;

    const onChangePage = () => {
        const node = document.querySelector('.carousel__container');
        if (i === 0 && node.classList.contains("carousel__container")) {
            node.classList.add('firstPage');
            i++;
        }
    }

    const onBackPage = () => {
        const node = document.querySelector('.carousel__container');
        if (i === 1 && node.classList.contains("firstPage")) {
            node.classList.remove('firstPage');
            i--;
        }
    }

    const onShowCardInfo = useCallback((data) => {  //Применение useCallback при передаче функции дочернему компоненту.
        console.log(data);
    }, []);

    return (
        <section className="carousel">
            <button 
                className="carousel__left"
                onClick={onBackPage}
                >{"<"}</button>
            <button 
                className="carousel__right"
                onClick={onChangePage}
                >{">"}</button>
            <h2 className="carousel__title">Хиты продаж</h2>
            <div className="carousel__container">
                <Card onShowCardInfo={onShowCardInfo}/>
            </div>
        </section>
    )
}

export default Carousel;