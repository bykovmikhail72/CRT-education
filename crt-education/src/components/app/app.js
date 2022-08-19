

import { useSelector } from "react-redux";

import Carousel from "../carousel/carousel";
import Header from "../header/header";
import Modal from "../modal/modal";

const App = () => {
    const active = useSelector(state => state.app.active);

    const modal = active && <Modal/>

    return (
        <>
            {modal}
            <Header/>
            <Carousel/>
        </>
        
    )
}

export default App;