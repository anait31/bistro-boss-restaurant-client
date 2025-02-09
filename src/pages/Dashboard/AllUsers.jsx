import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    return (
        <div>
            <div className="flex justify-around text-2xl mt-5 font-semibold">
                <h2>Manage All Users</h2>
                <h2>Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto mt-4 max-w-6xl mx-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-xl">
                        <tr>
                            <th>##</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1  */}
                        {
                            users.map((item, idx) => <tr key={item._id}>
                                <th>{idx + 1}</th>
                                <td>{item.name}</td>
                                <td><button>Update</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;