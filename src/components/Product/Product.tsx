import { useContext } from "react";
import { IProduct, IPropInfo } from "../../types";
import { AuthContext } from "../../provider/AuthProvider";

const Product = ({ info }: IPropInfo) => {
  const { title, description, price, thumbnail } = info;

  const { cart, setCart } = useContext(AuthContext);

  const handleCart = (data: IProduct) => {
    const newCart = cart.find((pd) => pd.id == data.id);
    if (!newCart) {
      setCart([...cart, data]);
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img style={{ width: "70%" }} src={thumbnail} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">$$ {price}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleCart(info)} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
