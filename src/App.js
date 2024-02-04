import Banner from "./components/Banner/Banner";
import Card from "./components/Cards/Card";
import Topo from "./components/Topo/Topo";
import "./index.css";
import "./components/Cards/Card.css";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="App">
        <Topo />
        <Banner />
        <div className="container__principal">
          <div className="container__principal__title">
            <h2>Os melhores em só lugar</h2>
            <p>
              A marca Jordan na JordanShoes é a escolha certa para os amantes de
              sneakers que buscam estilo e conforto.
            </p>
          </div>
          <div className="container__principal__cards">
            <div className="cards">
              <Card
                img={"./1.png"}
                alt={"Air Jordan 1 Mid Dutch Green"}
                title={"Air Jordan 1 Mid Dutch Green"}
                link={"Tênis Air Jordan"}
                price={"R$ 1.199,99"}
              />
            </div>
            <div className="cards">
              <Card
                img={"./2.png"}
                alt={"Air Jordan 1 High Zoom CMFT Tropical Twist"}
                title={"Air Jordan 1 High Zoom CMFT Tropical Twist"}
                link={"Tênis Air Jordan"}
                price={"R$ 1.049,00"}
              />
            </div>
            <div className="cards">
              <Card
                img={"./3.png"}
                alt={"Air Jordan 1 Mid Dutch Green"}
                title={"Air Jordan 1 Mid Dutch Green"}
                link={"Tênis Air Jordan"}
                price={"R$ 1.350,00"}
              />
            </div>
            <div className="cards">
              <Card
                img={"./4.png"}
                alt={"Air Jordan 1 Mid GS 'Light Smoke Grey'"}
                title={"Air Jordan 1 Mid GS 'Light Smoke Grey'"}
                link={"Tênis Air Jordan"}
                price={"R$ 1.585,00"}
              />
            </div>
            <div className="cards">
              <Card
                img={"./5.png"}
                alt={"Air Jordan 1 Mid SE Bright Citrus"}
                title={"Air Jordan 1 Mid SE Bright Citrus"}
                link={"Tênis Air Jordan"}
                price={"R$ 949,99"}
              />
            </div>
            <div className="cards">
              <Card
                img={"./6.png"}
                alt={"Air Jordan 1 Mid Grey Camo"}
                title={"Air Jordan 1 Mid Grey Camo"}
                link={"Tênis Air Jordan"}
                price={"R$ 999,99"}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
