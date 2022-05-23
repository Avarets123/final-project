import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetchWithState from "../../hooks/useFetchWithState";
import { fetchFunc, toggleActiveClass } from "../../utils";
import Preloader from '../Preloader/Preloader';
import Items from './Items';

const Catalogs = ({ search }) => {


    const stateCatalogs = useFetchWithState('/categories');
    const [stateItems, setStateItem] = useState(null);
    const params = useParams();


    useEffect(() => {

        setStateItem(search)

    }, [search])





    const onChooseCatalog = () => {
        // e.preventDefault();

        const id = params.categoryId.slice(1);


        console.log(id)
        fetchFunc('items', (id ? `?categoryId=${id}` : ''), setStateItem);
        // toggleActiveClass(e);
        // setStateIdCatalog(id)
    }




    return (
        <>
            <ul className="catalog-categories nav justify-content-center">
                <li className="nav-item" key={'all'}>
                    <NavLink className="nav-link " to={`/items:0`}
                        onClick={(e) => onChooseCatalog()}
                    >Все</NavLink>
                </li>

                {!stateCatalogs ? <Preloader /> : stateCatalogs.map(({ id, title }) => {
                    return (
                        <li className="nav-item" key={id}>
                            <NavLink to={`/items:${id}`} key={id}
                                className="nav-link"
                                onClick={() => onChooseCatalog()}
                            >
                                {title}</NavLink>
                        </li>
                    );
                })}
            </ul>
            {<Items items={stateItems} />}


        </>
    )
}

export default Catalogs;

