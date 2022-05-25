import { Link } from "react-router-dom";
import useFetchWithState from "../../hooks/useFetchWithState";
import Preloader from "../Preloader/Preloader";


const TopSales = () => {


    const stateTopSales = useFetchWithState('/top-sales');



    if (!stateTopSales) return <Preloader />
    return (
        stateTopSales.map(({ price, id, images, title }) => {
            return (
                <div className="col-4" key={id}>
                    <div className="card" >
                        <img src={images[0]}
                            className="card-img-top img-fluid" alt={title} />
                        <div className="card-body">
                            <p className="card-text">{title}</p>
                            <p className="card-text">{price} руб.</p>
                            <Link to={`/catalog/${id}`} className="btn btn-outline-primary">Заказать</Link>
                        </div>
                    </div>
                </div>
            )
        })
    )

}
export default TopSales;