import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faM, faSignal} from "@fortawesome/free-solid-svg-icons";
import {faHeart as voidLike} from "@fortawesome/free-regular-svg-icons";

import {useState, useEffect} from "react";

import useCardsService from "../../services/cardsService";
import Spinner from "../spinner/spinner";

import "./cards.sass"

const Card = ({onShowCardInfo}) => {
    const {loading, getCards} = useCardsService();

    const [data, setData] = useState([]);

    function request() {
        getCards()
            .then(createCards)
    };

    function onChangeLiked(e) {
        const id = e.target.parentNode.parentNode.parentNode;
        const index = data.findIndex(item => item.id === id.id);
        
        const newObj = {...data[index], like: !data[index].like};

        const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)];

        setData(newArr);
    }

    const createCards = (cards) => {
        setData(cards);
    };
    //eslint-disable-next-line
    useEffect(request, []);


    const classNames = require('classnames');

    
    const content = data.map(item => { 
        const btnClass = classNames('card__buttons_favor', {  //Применил библиотеку classNames для реализации активности кнопки
            'card__buttons_favor-active': item.like,
        })

        return (
            <div 
                className="container" 
                key={item.id}  // Сформированы с помощью uiid в файле cardsService.js
                id={item.id}
                onClick={() => {onShowCardInfo(item.title)}}>
                <div className="card__head">
                    <div className="card__licvidation">Ликвидация!</div>
                    <button className="card__arrow">{'>'}</button>
                </div>
                <img src={item.source} alt={item.title} className="card__img" />
                <div className="card__title">{item.title}</div>
                <div className="card__rait">
                    <div className="card__rait_val">★{item.rate}</div>
                    <div className="card__rait_reviews">{item.reviews} отзывов</div>
                </div>
                <div className="card__price">
                    <div className="card__price_new">{item.price}</div>
                    <div className="card__price_old">{item.oldPrice}</div>
                </div>
                <div className="card__bonus"><span className="card__bonus_span"><FontAwesomeIcon icon={faM} /> +{item.bonus}</span> Бонусных рублей</div>
                <div className="card__buttons">
                    <button className="card__buttons_basket"><FontAwesomeIcon id={item.id} icon={faShoppingCart} /></button>
                    <div 
                        className={btnClass}
                        onClick={(e) => {onChangeLiked(e)}}><FontAwesomeIcon id={item.id} icon={voidLike} /></div>
                    <div className="card__buttons_comparison"><FontAwesomeIcon icon={faSignal} /></div>
                </div>
            </div>
        )
    })

    return ( // Пример условного рендера, когда карточки товара загружаются с сервера, на их месте показывается спиннер.
        <div className="card">  
            {loading ? <Spinner/> : content} 
        </div>
    )
}

export default Card;