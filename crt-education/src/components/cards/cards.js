import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faM, faSignal} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";

import "./cards.sass"

const data = [
    {
        "id": "0",
        "title": "Ноутбук HUAWEI MateBook 14 KLVL-W56W 16+512GB Space",
        "rate": "4.2",
        "reviews": "17",
        "price": "69 999 ₽",
        "oldPrice": "79 999 ₽",
        "bonus": "2 100",
        "source": "../../../img/Notebook.webp"
    },
    {
        "id": "1",
        "title": "Монитор Rombica SkyView M23-MF (MUT-002)",
        "rate": "4.6",
        "reviews": "16",
        "price": "7 899 ₽",
        "oldPrice": "11 799 ₽",
        "bonus": "237",
        "source": "../../../img/Monitor.webp"
    },
    {
        "id": "2",
        "title": "Смартфон HUAWEI nova Y70 Midnight Black (MGA-LX9N)",
        "rate": "4.6",
        "reviews": "11",
        "price": "15 999 ₽",
        "oldPrice": "18 999 ₽",
        "bonus": "480",
        "source": "../../../img/Smartphone.webp"
    },
    {
        "id": "3",
        "title": "Телевизор Toshiba 43C350KE",
        "rate": "4.9",
        "reviews": "38",
        "price": "29 999 ₽",
        "oldPrice": "39 999 ₽",
        "bonus": "900",
        "source": "../../../img/TV.webp"
    },
    {
        "id": "4",
        "title": "Стиральная машина узкая Haier HW70-BP12969AS",
        "rate": "4.5",
        "reviews": "139",
        "price": "37 999 ₽",
        "oldPrice": "58 999 ₽",
        "bonus": "3 800",
        "source": "../../../img/Washing-mashine.webp"
    },
    {
        "id": "5",
        "title": "Холодильник Candy CCRN 6180W",
        "rate": "4.8",
        "reviews": "51",
        "price": "29 999 ₽",
        "oldPrice": "42 999 ₽",
        "bonus": "900",
        "source": "../../../img/Fridge.webp"
    },
    {
        "id": "6",
        "title": "Сплит-система Electrolux EACS-09HAR_A/N3_21Y",
        "rate": "3.3",
        "reviews": "3",
        "price": "29 999 ₽",
        "oldPrice": "35 999 ₽",
        "bonus": "900",
        "source": "../../../img/Split.webp" 
    },
    {
        "id": "7",
        "title": "Робот-пылесос Tefal Smart Force X-plorer RG6825WH",
        "rate": "4.7",
        "reviews": "307",
        "price": "8 999 ₽",
        "oldPrice": "19 499 ₽",
        "bonus": "270",
        "source": "../../../img/Robot.webp" 
    },
    {
        "id": "8",
        "title": "Пылесос ручной (handstick) Tefal Allergy TY6837WO",
        "rate": "4.9",
        "reviews": "36",
        "price": "12 999 ₽",
        "oldPrice": "21 499 ₽",
        "bonus": "390",
        "source": "../../../img/Cleaner.webp" 
    },
    {
        "id": "9",
        "title": "Встраиваемая посудомоечная машина 60...",
        "rate": "4.6",
        "reviews": "19",
        "price": "49 999 ₽",
        "oldPrice": "67 999 ₽",
        "bonus": "1 500",
        "source": "../../../img/Dishwasher.webp" 
    },
    {
        "id": "10",
        "title": "Наушники True Wireless Samsung Galaxy Buds2...",
        "rate": "3.6",
        "reviews": "13",
        "price": "7 499 ₽",
        "oldPrice": "8 999 ₽",
        "bonus": "225",
        "source": "../../../img/Headphones.webp" 
    },
    {
        "id": "11",
        "title": "Паровая гладильная установка Tefal 3 в 1 Ixeo...",
        "rate": "4.7",
        "reviews": "152",
        "price": "39 999 ₽",
        "oldPrice": "54 999 ₽",
        "bonus": "1 200",
        "source": "../../../img/Steam.webp" 
    },
    {
        "id": "12",
        "title": "Микроволновая печь соло Hyundai HYM-M2038",
        "rate": "4.8",
        "reviews": "31",
        "price": "4 999 ₽",
        "oldPrice": "7 199 ₽",
        "bonus": "150",
        "source": "../../../img/Microwave.webp" 
    }
]

const Card = () => {

    return (
        <div className="card">
            {data.map(item => {
                return (
                    <div className="container" key={item.id}>
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
                            <button className="card__buttons_basket"><FontAwesomeIcon icon={faShoppingCart} /></button>
                            <div className="card__buttons_favor"><FontAwesomeIcon icon={faHeart} /></div>
                            <div className="card__buttons_comparison"><FontAwesomeIcon icon={faSignal} /></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;