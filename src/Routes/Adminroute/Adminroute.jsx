import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";

const Adminroute = ({children}) => {
    const {user,loading} = useAuth()
    const [isAdmin,isAdminLoading] = useAdmin()
   if (loading || isAdminLoading) {
    return <div
    className="radial-progress bg-primary text-primary-content border-primary border-4"
    style={{ "--value": 70 }}
    role="progressbar">
    70%
  </div>
   }
   if (user && isAdmin) {
    return children
   }
   
};

export default Adminroute;