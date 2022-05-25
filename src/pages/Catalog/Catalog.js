import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Catalogs from "../../components/Catalogs/Catalogs";
import { fetchFunc } from "../../utils";

const Catalog = () => {
    const [searchParams] = useSearchParams()


    const [stateInput, setStateInput] = useState('');
    const [stateSearch, setStateSearch] = useState(null);

    useEffect(() => {
        setStateInput(searchParams.getAll('value'))
    }, [searchParams])



    const onSearch = (e) => {
        e.preventDefault();

        fetchFunc('items', `?q=${stateInput}`, setStateSearch);


    }




    return (

        <>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <div className="banner">
                            <img src="./img/banner.jpg" className="img-fluid" alt="К весне готовы!" />
                            <h2 className="banner-header">К весне готовы!</h2>
                        </div>
                        <section className="catalog">
                            <h2 className="text-center">Каталог</h2>
                            <form
                                onSubmit={(e) => onSearch(e)}
                                className="catalog-search-form form-inline">
                                <input className="form-control" placeholder="Поиск"
                                    value={stateInput}
                                    onChange={(e) => setStateInput(e.target.value)}
                                />
                            </form>
                            <Catalogs search={stateSearch} />
                        </section>
                    </div>
                </div>
            </main>


        </>
    )
};

export default Catalog;