import "./Banner.css";

const Banner = () => {
  return (
    <div className="container__banner">
      <div className="container__itens">
        <div className="container__logo">
          <img src="./logo-jordan.png" alt="Logo Jordan" />
          <span>JordanShoes</span>
        </div>
        <div>
          <h2>A melhor loja de Jordan</h2>
          <p>
            O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
