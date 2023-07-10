import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import { IResponse } from "../../types";

const Products = () => {
  const { products } = useLoaderData() as IResponse;
  return (
    <div className="flex justify-center py-5">
      <div className="grid grid-cols-3 gap-4">
        {products.map((pd) => {
          return <Product key={pd.id} info={pd} />;
        })}
      </div>
    </div>
  );
};

export default Products;
