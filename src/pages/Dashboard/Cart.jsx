import userCart from "../../hooks/userCart";

const Cart = () => {
    const [cart] = userCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

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
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, idx) => <tr>
                                <th>{idx + 1}</th>
                                <td>{item?.image}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>Details</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;