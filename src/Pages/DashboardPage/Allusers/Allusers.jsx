import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiossecure from "../../../hooks/useAxiossecure";
import { FaDeleteLeft } from "react-icons/fa6";

const Allusers = () => {
  const axiosSecure = useAxiossecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex justify-between">
        <h2>All users {users.length}</h2>
        {/* <h1>Total Price {totalPrice}</h1> */}
        <button className="btn bg-purple-600"> Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>email</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  {/* <td>{index+1}</td> */}
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{user?.email}</div>  
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  {/* <td>${user?.price}</td> */}
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      <FaDeleteLeft />
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

export default Allusers;
