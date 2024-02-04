import "./Card.css";
const Card = ({img, alt, title, link, price}) => {
  return (
    <main className="container__principal">
      <div className="container__principal__cards">
        <div className="cards">
          <img src={img} alt={alt} />
          <h3>{title}</h3>
          <a href="#jordan">{link}</a>
          <span>{price}</span>
        </div>
      </div>
    </main>
  );
};

export default Card;
