import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL: "http://localhost:7000",
});

const useAxiosSecure = () => {
    const { userLogout} = useAuth();
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem("access-token");
            // console.log("Request intercepted with token:", token);
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },
        function (error) {
            // Handle the request error
            return Promise.reject(error);
        }
    );
    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },async (error) => {
        const status = error.response?.status;
        // console.log('status  error in the interceptors',status);
        if (status === 401 || status === 403) {
            await userLogout()
            navigate('/login')
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      });

    // Return the axios instance
    return axiosSecure;
};

export default useAxiosSecure;
