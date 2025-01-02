import {  useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiossecure()
    const {user} = useAuth()
  const {refetch,data: cart = []} = useQuery({
    queryKey:['cart',user?.email],
    queryFn:async() => {
        const res = await axiosSecure.get(`/allcarts?email=${user.email}`)
        return res.data
    }
  })
  return [cart,refetch]  
};

export default useCart;