import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";



const Header = () => {
    const nav = useNavigate()
    const store = useSelector(store => store.cartStore);





    const onSearch = (e) => {
        e.preventDefault();

        const form = document.querySelector('[data-id=search-form]');
        form.classList.toggle('invisible');


        const input = form.childNodes[0].value;
        if (!input) return;
        nav(`/catalog?value=${input}`);
        form.reset();

    }


    const onCart = () => {
        nav('/cart')
    }


    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <NavLink className="navbar-brand" to="/">
                            <img src="./img/header-logo.png" alt="Bosa Noga" />
                        </NavLink>
                        <div className="collapase navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Главная</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/catalog">Каталог</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">О магазине</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
                                </li>
                            </ul>
                            <div>
                                <div className="header-controls-pics">
                                    <div data-id="search-expander"
                                        onClick={onSearch}
                                        className="header-controls-pic header-controls-search"></div>
                                    {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                                    <div
                                        className="header-controls-pic header-controls-cart"
                                        onClick={onCart}
                                    >
                                        {store.length === 0 ? null : <div className="header-controls-cart-full"> {store.length}</div>}
                                        <div className="header-controls-cart-menu"></div>
                                    </div>
                                </div>
                                <form data-id="search-form"
                                    onSubmit={onSearch}
                                    className="header-controls-search-form form-inline invisible">
                                    <input className="form-control" placeholder="Поиск" />
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;