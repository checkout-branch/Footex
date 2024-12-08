import styles from './card.module.scss';

const ProductCard = ({ Productlist }) => {
  console.log(Productlist)
  return (
    <div className={styles.topComponent}>
      {Productlist?.map((e) => {
        return (
          <div key={e.id} className={styles.cardContainer}>
            <img src={""} alt="" />
            <h3>{e.name}</h3>
            <p>{e.description}</p>
            <p>Price: ${e.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;


