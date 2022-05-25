import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useFetchWithState from "../../hooks/useFetchWithState";
import { fetchFunc, toggleActiveClass } from "../../utils";
import Preloader from '../Preloader/Preloader';
import Items from './Items';

const Catalogs = ({ search, idCatalog }) => {


    const stateCatalogs = useFetchWithState('/categories');
    const [stateItems, setStateItem] = useState(null);
    const [stateIdCatalog, setStateIdCatalog] = useState(null)

    useEffect(() => {
        setStateItem(search)
    }, [search]);


    useEffect(() => {

        if (idCatalog) idCatalog(stateIdCatalog)
    }, [idCatalog, stateIdCatalog])




    const onChooseCatalog = (e, id) => {
        e.preventDefault();
        fetchFunc('items', (id ? `?categoryId=${id}` : ''), setStateItem);
        toggleActiveClass(e);
        setStateIdCatalog(id)
    }




    return (
        <>
            <ul className="catalog-categories nav justify-content-center">
                <li className="nav-item" key={'all'}>
                    <NavLink className="nav-link active " to={`/`}
                        onClick={(e) => onChooseCatalog(e)}
                    >Все</NavLink>
                </li>

                {!stateCatalogs ? <Preloader /> : stateCatalogs.map(({ id, title }) => {
                    return (
                        <li className="nav-item" key={id}>
                            <NavLink to={`/items:${id}`} key={id}
                                className="nav-link"
                                onClick={(e) => onChooseCatalog(e, id)}
                            >
                                {title}</NavLink>
                        </li>
                    );
                })}
            </ul>
            {<Items items={stateItems} catalogId={stateIdCatalog} />}


        </>
    )
}

export default Catalogs;

