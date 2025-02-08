import Swal from "sweetalert2";
import userCart from "../../hooks/userCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = userCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
        console.log(id);
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
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    return (
        <div className="p-12">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold uppercase">Items: {cart.length}</h2>
                <h2 className="text-2xl font-bold uppercase">Total Price: {totalPrice}</h2>
                <button className="btn text-xl font-bold uppercase">Pay Now</button>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="table">
                    {/* head */}
                    <thead className="text-xl">
                        <tr>
                            <th>##</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1  */}
                        {
                            cart.map((item, idx) => <tr key={item._id}>
                                <th>{idx + 1}</th>
                                <td>{item.image}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><button onClick={() => handleDelete(item._id)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;