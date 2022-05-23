import Catalogs from "../../components/Catalogs/Catalogs";
import TopSales from "../../components/TopSales/TopSales";

const Home = () => {



    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <div className="banner">
                        <img src="./img/banner.jpg" className="img-fluid" alt="К весне готовы!" />
                        <h2 className="banner-header">К весне готовы!</h2>
                    </div>
                    <section className="top-sales">
                        <h2 className="text-center">Хиты продаж!</h2>


                        <div className="row"> {<TopSales />} </div>
                    </section>
                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>
                        <Catalogs />
                    </section>
                </div>
            </div>
        </main>
    )
};


export default Home;