import useAxiosSecure from "../../../hooks/useAxiossecure";
import useMenudata from "../../../hooks/useMenudata";


const ManageItems = () => {
  const [menu ]= useMenudata()
  const axiosSecure = useAxiosSecure()
  const handleEdit = (id) => {
    console.log(`Edit item with id: ${id}`);
    
    
  };

  const handleDelete = async (id) => {
    console.log(`Delete item with id: ${id}`);
    const res = await axiosSecure.delete(`/allmenus/${id}`)
    console.log(res.data);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      {/* Page Header */}
      <div className="mb-6">
        <h3 className="text-center text-yellow-600 text-xl font-semibold">
          ---Hurry Up!---
        </h3>
        <h2 className="text-center text-gray-800 text-3xl font-bold">
          MANAGE ALL ITEMS
        </h2>
      </div>

      {/* Total Items */}
      <div className="mb-4">
        <h4 className="text-lg font-bold">
          Total items: <span className="text-yellow-600">{menu.length}</span>
        </h4>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white rounded-md shadow-md">
          <thead className="bg-yellow-500 text-white">
            <tr>
              <th className="px-4 py-2">ITEM IMAGE</th>
              <th className="px-4 py-2">ITEM NAME</th>
              <th className="px-4 py-2">PRICE</th>
              <th className="px-4 py-2">EDIT</th>
              <th className="px-4 py-2">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr
                key={item._id}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200`}
              >
                <td className="px-4 py-2 text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-md"><img src={item.image} alt="" /></div>
                </td>
                <td className="px-4 py-2 text-center">{item.name}</td>
                <td className="px-4 py-2 text-center">{item.price}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleEdit(item._id)}
                    className="bg-yellow-500 text-white px-3 py-2 rounded-md hover:bg-yellow-600 transition"
                  >
                    ✏️ Edit
                  </button>
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
