
const RecomentItemCard = ({image, recipe, name}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className="w-full h-[300px] object-cover"
                    src={image}
                    alt="Recipe" />
            </figure>
            <div className="card-body text-center">
                <h2 className="text-2xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-2 uppercase">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default RecomentItemCard;