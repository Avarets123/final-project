import { useEffect, useState } from "react";
import useFetchWithState from "../../hooks/useFetchWithState";

const Items = ({ items, idCatalog }) => {


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
    }, [idCatalog])



    const onAddItems = (e) => {
        e.preventDefault();
        (async function () {
            await fetch('http://localhost:7070/api/items' + (idCatalog ? `?categoryId=${idCatalog}&offset=${stateCountOffset}` : `?offset=${stateCountOffset}`))
                .then(res => res.json())
                .then(setStateItems)
                .then(setStateCountOffset(stateCountOffset + 6));
        })()
    }




    if (!stateItems) return null

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
                                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
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