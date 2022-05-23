import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetchWithState from "../../hooks/useFetchWithState";
import { fetchFunc } from "../../utils";
import Preloader from '../Preloader/Preloader';
import Items from './Items';

const Catalogs = () => {


    const stateCatalogs = useFetchWithState('/categories');
    const [stateItems, setStateItem] = useState(null);
    const param = useParams();



    const onChooseCatalog = () => {
        const id = param.id ? param.id.slice(1) : undefined;
        console.log(id)

        fetchFunc('items', (id ? `?categoryId=${id}` : ''), setStateItem);
    }




    return (
        <>
            <ul className="catalog-categories nav justify-content-center">
                <li className="nav-item" key={'all'}>
                    <NavLink className="nav-link " to={'/'}
                        onClick={() => onChooseCatalog()}
                    >Все</NavLink>
                </li>

                {!stateCatalogs ? <Preloader /> : stateCatalogs.map(({ id, title }) => {
                    return (
                        <li className="nav-item" key={id}>
                            <NavLink to={`/categoryId:${id}`} key={id}
                                className="nav-link"
                                onClick={() => onChooseCatalog()}
                            >
                                {title}</NavLink>
                        </li>
                    )
                })}
            </ul>
            {<Items items={stateItems} />}


        </>
    )
}

export default Catalogs;

