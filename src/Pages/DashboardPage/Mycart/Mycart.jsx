import { FaDeleteLeft } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAxiossecure from "../../../hooks/useAxiossecure";

const Mycart = () => {
  const axiosSecure = useAxiossecure()
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  //   console.log(cart);
 const handleDelete = (_id) => {
    axiosSecure.delete(`/cart/delete/${_id}`)
    .then(res => {
        console.log(res.data);
        alert('this is going to  be delte ')
        refetch()
    })
 }
  return (
    <div>
      <div className="flex justify-between">
        <h2>Total card is {cart.length}</h2>
        <h1>Total Price {totalPrice}</h1>
        <button className="btn bg-purple-600"> Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item,index) => (
                <tr key={item._id}>
                  <td>{index+1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>${item?.price}</td>
                  <th>
                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs">
                        <FaDeleteLeft/>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mycart;
