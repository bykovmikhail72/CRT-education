import {useHttp} from '../hooks/http.hook';
import uuid from 'react-uuid'

const useCardsService = () => {
    const {loading, response} = useHttp();

    const getCards = async () => {
        const res = await response("http://localhost:3002/cards");
        return res.map(_transormCard);
    }

    const _transormCard = (card) => {
        return {
            id: uuid(),  //Использовал библиотеку uuid для создания уникального id, и, соответственно, так как у меня key = id, то и уникального key.
                        // Использовать Index в качестве key нежелательно, так как элементы могут удалятся и добавлятся, что может в дальнейшем привести к повторению index и повторению key.
            title: card.title,
            rate: card.rate,
            reviews: card.reviews,
            price: card.price,
            oldPrice: card.oldPrice,
            bonus: card.bonus,
            like: card.like,
            source: card.source,
        }
    }

    return {getCards, loading};
}

export default useCardsService;