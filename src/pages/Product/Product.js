import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchWithState from "../../hooks/useFetchWithState";
import { addData } from '../../reducer/cartStore';
import { useDispatch } from "react-redux";

const Product = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();


    const product = useFetchWithState('/items/' + +params.id);

    const refCount = useRef();
    const refSize = useRef();







    const onSize = async (e) => {

        const elements = e.target.parentNode.children;
        for (let el of elements) {
            el.classList.remove('selected')
        }
        e.target.classList.add('selected')


    }






    if (!product) return null;
    const { color, id, images, sku, title, season, reason, manufacturer, material, sizes, price } = product;



    const onCountProduct = (e, two = '') => {
        e.preventDefault();

        const value = refCount.current.textContent;

        if ((+value === 1 && two) || (+value > 9 && !two)) return;

        two ? refCount.current.textContent = +value - 1 : refCount.current.textContent = +value + 1
    }

    const onAddProduct = (e) => {
        e.preventDefault();

        let size;
        for (let el of refSize.current.children) {
            if (el.classList.contains('selected')) {
                size = el.textContent
            }
        }

        const data = {
            id, title, price, size,
            count: +refCount.current.textContent
        }

        dispatch(addData(data))


        if (size) nav('/cart')

    }

    const UseSizes = () => {
        return sizes.filter(({ avalible }) => avalible)
            .map(({ size }, i) => <span
                key={i}
                className="catalog-item-size"
                onClick={(e) => onSize(e, size)}
            >
                {size}</span>)
    }




    return (

        <main className="container">
            <div className="row">
                <div className="col">


                    <section className="catalog-item" key={id}>
                        <h2 className="text-center">{title}</h2>
                        <div className="row">
                            <div className="col-5">
                                <img src={images[0]}
                                    className="img-fluid" alt={title} />
                            </div>
                            <div className="col-7">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>Артикул</td>
                                            <td>{sku}</td>
                                        </tr>
                                        <tr>
                                            <td>Производитель</td>
                                            <td>{manufacturer}</td>
                                        </tr>
                                        <tr>
                                            <td>Цвет</td>
                                            <td>{color}</td>
                                        </tr>
                                        <tr>
                                            <td>Материалы</td>
                                            <td>{material}</td>
                                        </tr>
                                        <tr>
                                            <td>Сезон</td>
                                            <td>{season}</td>
                                        </tr>
                                        <tr>
                                            <td>Повод</td>
                                            <td>{reason}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {sizes ? (
                                    <>
                                        <div className="text-center">
                                            <p ref={refSize}>Размеры в наличии:
                                                <UseSizes />
                                            </p>
                                            <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                                <button
                                                    className="btn btn-secondary"
                                                    onClick={(e) => onCountProduct(e, '-')}
                                                >
                                                    -</button>
                                                <span ref={refCount} className="btn btn-outline-primary">1</span>
                                                <button
                                                    className="btn btn-secondary"
                                                    onClick={(e) => onCountProduct(e)}
                                                >
                                                    +</button>
                                            </span>
                                            </p>
                                        </div>
                                        <button
                                            className="btn btn-danger btn-block btn-lg"
                                            onClick={onAddProduct}
                                        >
                                            В корзину</button>
                                    </>
                                ) : null}

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Product;