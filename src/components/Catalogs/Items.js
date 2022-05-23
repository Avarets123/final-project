import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchWithState from "../../hooks/useFetchWithState";
import { fetchFunc } from "../../utils";






const Items = ({ items }) => {


    const beginState = useFetchWithState('/items');
    const [stateItems, setStateItems] = useState(null);
    const param = useParams();



    useEffect(() => {
        setStateItems(beginState);
    }, [beginState]);



    useEffect(() => {
        setStateItems(items);
    }, [items]);


    const onAddItems = (e) => {

        const id = param.id ? param.id.slice(1) : undefined;
        e.preventDefault();
        // fetchFunc('items', (id?))
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