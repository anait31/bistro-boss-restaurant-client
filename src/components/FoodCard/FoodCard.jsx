import Swal from "sweetalert2";
import useAuth from "../../hooks/useMenu/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
    const { image, recipe, name, price } = item;
    const { user } = useAuth();
    const navigate = useNavigate()

    const handleAddToCart = item => {
        if (user && user.email) {
            console.log(item)
        }
        else {
            Swal.fire({
                title: "You want to order this item?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className="w-full h-[300px] object-cover"
                    src={image}
                    alt="Recipe" />
                <p className="absolute right-0 top-0 mt-4 mr-4 bg-black text-white px-4 py-2 rounded-md">${price}</p>
            </figure>
            <div className="card-body text-center">
                <h2 className="text-2xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-2 uppercase">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;