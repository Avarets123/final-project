import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchWithState from "../../hooks/useFetchWithState";
import Preloader from "../Preloader/Preloader";

const Items = ({ items, catalogId }) => {


    const beginState = useFetchWithState('/items');
    const [stateItems, setStateItems] = useState(null);
    const [stateCountOffset, setStateCountOffset] = useState(6)




    useEffect(() => {
        setStateItems(beginState);
    }, [beginState]);



    useEffect(() => {
        setStateItems(items);
    }, [items]);



    useEffect(() => {

        setStateCountOffset(6)
    }, [catalogId])



    const onAddItems = (e) => {
        e.preventDefault();
        (async function () {
            await fetch('http://localhost:7070/api/items' + (catalogId ? `?categoryId=${catalogId}&offset=${stateCountOffset}` : `?offset=${stateCountOffset}`))
                .then(res => res.json())
                .then(setStateItems)
                .then(setStateCountOffset(stateCountOffset + 6));
        })()
    }




    if (!stateItems) return <Preloader />

    return (

        <>
            <div className="row">

                {stateItems.map(({ id, title, price, images }) => {
                    return (
                        <div className="col-4" key={id}>
                            <div className="card catalog-item-card">
                                <img src={images[0]}
                                    className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                                <div className="card-body">
                                    <p className="card-text">{title}</p>
                                    <p className="card-text">{price} руб.</p>
                                    <Link to={`/catalog/${id}`} className="btn btn-outline-primary">Заказать</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {stateItems.length < 6 ? null : <div className="text-center">
                <button className="btn btn-outline-primary"
                    onClick={(e) => onAddItems(e)}
                >Загрузить ещё</button>
            </div>}


        </>
    )
}

export default Items;