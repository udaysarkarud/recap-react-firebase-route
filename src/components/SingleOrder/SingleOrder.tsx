import React, { useContext } from "react";
import { IPropInfo } from "../../types";
import { AuthContext } from "../../provider/AuthProvider";

const SingleOrder = ({ info }: IPropInfo) => {
  const { title, description, price, thumbnail } = info;

  const { cart, setCart } = useContext(AuthContext);
  const handleAction = (id: number) => {
    const newCart = cart.filter((pd) => pd.id !== id);
    setCart([...newCart]);
  };
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{description.slice(0, 20)}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{price}</span>
      </td>
      <th>
        <button
          onClick={() => handleAction(info.id)}
          className="btn btn-ghost btn-xs"
        >
          Remove
        </button>
      </th>
    </tr>
  );
};

export default SingleOrder;
