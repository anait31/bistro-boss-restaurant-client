import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-iota.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;