import { BsGoogle } from "react-icons/bs";
import useAuth from "../useAuth";
import usePublicaxios from "../usePublicaxios";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googlelogin } = useAuth();
  const axiosPublic = usePublicaxios()
  const navigate = useNavigate()
  const handlegoggle = () => {
    googlelogin()
        .then((result) => {
            // console.log(result.user);
           console.log(result.user);
           const userInfo = {
            email: result?.user?.email,
            name : result?.user?.displayName  
           }
           axiosPublic.post(`/users`,userInfo)
           .then(res => {
            console.log(res.data);
            navigate('/')
           })
        })
        .catch((err) => console.log(err.message)
        )
}
  return (
    <div>
      {/* google log in */}
      <div className="mt-6">
        <button
          onClick={handlegoggle}
          className="w-full px-4 py-2 bg-gray-500 text-white 
              rounded-lg flex items-center justify-center gap-2"
        >
          <BsGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
