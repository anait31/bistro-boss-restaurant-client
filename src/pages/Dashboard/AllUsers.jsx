import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdAutoDelete } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleUpdateUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user?._id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                title: "Success!",
                                text: "Your user has admin now.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user?._id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

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
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1  */}
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{
                                    user.role === 'admin' ? 'Admin' : <button onClick={() => handleUpdateUser(user)} className="text-2xl"><FaUsersCog></FaUsersCog></button>
                                    }</td>
                                <td><button onClick={() => handleDeleteUser(user)} className="text-2xl"><MdAutoDelete></MdAutoDelete></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;