import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SingleOrder from "../SingleOrder/SingleOrder";

const Order = () => {
  const { cart } = useContext(AuthContext);
  return (
    <div className="overflow-x-auto">
      {cart.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((_cart) => (
              <SingleOrder key={_cart.id} info={_cart} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      ) : (
        <h1 className="text-center">Please add buy some product</h1>
      )}
    </div>
  );
};

export default Order;
