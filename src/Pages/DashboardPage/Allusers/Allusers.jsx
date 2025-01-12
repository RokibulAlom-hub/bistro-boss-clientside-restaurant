import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiossecure from "../../../hooks/useAxiossecure";
import { FaDeleteLeft, FaUser, FaUsers } from "react-icons/fa6";

const Allusers = () => {
  const axiosSecure = useAxiossecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDelete = (_id) => {
  axiosSecure.delete(`/users/${_id}`)
  .then((res) => {
    console.log(res.data)
    refetch();
  })
  };
  const handleMakeadmin = (id) =>{
    axiosSecure.patch(`/users/admin/${id}`)
    .then(res => {
      console.log(res.data);
      alert('updated')
      refetch()
    })
  }
  return (
    <div className="w-full ml-3">
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
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  {/* <td>{index+1}</td> */}
                  <td>
                    <h2 className="">{user?.email}</h2>
                  </td>
                  <td>
                    <h1 className="">{user?.name}</h1>
                  </td>
                  <td>
                   { user?.role === "admin" ? "Admin" : <button onClick={() =>handleMakeadmin(user?._id)}>
                      
                      <FaUsers className="bg-orange-400 text-2xl"></FaUsers>
                    </button>
                    }
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user._id)}>
                      <FaDeleteLeft></FaDeleteLeft>
                    </button>
                  </td>
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
