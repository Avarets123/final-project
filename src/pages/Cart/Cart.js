/* eslint-disable jsx-a11y/scope */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { delData } from "../../reducer/cartStore";
import { fetchPost } from "../../utils";





const Cart = () => {

    const store = useSelector(store => store.cartStore)
    const dispatch = useDispatch();
    const [resPost, setResPost] = useState(null);
    const nav = useNavigate();




    const sendData = async (e) => {
        e.preventDefault();

        const target = e.target




        const data = {
            owner: {
                phone: target.phone.value,
                address: target.address.value
            },
            items: store.map(({ id, price, count }) => ({ id, price, count }))
        }


        const res = await fetchPost(data, 'Заявка была оформлена, скоро вы будете перенаправлены на главную страницу');

        setResPost(res);

        setTimeout(() => nav('/'), 2000);

        dispatch(delData())

    }




    const onDelete = (e, id, size) => {
        e.preventDefault();
        dispatch(delData({ id, size }))
    }



    const CartStore = () => {
        return (
            store.map(({ id, price, count, title, size }, i) => {
                return <tr key={i}>
                    <td scope="row">1</td>
                    <td><Link to={`/catalog/${id}`}>{title}</Link></td>
                    <td>{size}</td>
                    <td>{count}</td>
                    <td>{price}</td>
                    <td>{count * price}</td>
                    <td><button
                        className="btn btn-outline-danger btn-sm"
                        onClick={(e) => onDelete(e, id, size)}
                    >
                        Удалить</button></td>
                </tr>
            })
        )
    }


    const allSum = store.reduce((acc, el) => acc + (el.count * el.price), 0);

    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <div className="banner">
                        <img src="./img/banner.jpg" className="img-fluid" alt="К весне готовы!" />
                        <h2 className="banner-header">К весне готовы!</h2>
                    </div>
                    <section className="cart">
                        <h2 className="text-center">Корзина</h2>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Название</th>
                                    <th scope="col">Размер</th>
                                    <th scope="col">Кол-во</th>
                                    <th scope="col">Стоимость</th>
                                    <th scope="col">Итого</th>
                                    <th scope="col">Действия</th>
                                </tr>
                            </thead>
                            <tbody>

                                <CartStore />

                                {allSum === 0 ? null : <tr>
                                    <td colSpan="5" className="text-right">Общая стоимость</td>
                                    <td>{allSum} руб.</td>
                                </tr>}

                            </tbody>
                        </table>
                    </section>
                    <section className="order">
                        <h2 className="text-center"> Оформить заказ</h2>
                        {resPost ? <h4>{resPost}</h4> : null}
                        <div className="card" style={{ maxWidth: "30rem; margin: 0 auto" }}>
                            <form onSubmit={sendData} className="card-body">
                                <div className="form-group">
                                    <label htmlFor="phone">Телефон</label>
                                    <input className="form-control" id="phone" placeholder="Ваш телефон" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Адрес доставки</label>
                                    <input className="form-control" id="address" placeholder="Адрес доставки" />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="agreement" />
                                    <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                                </div>
                                <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
};

export default Cart;