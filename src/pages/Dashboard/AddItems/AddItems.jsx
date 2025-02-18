import { useForm } from "react-hook-form";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddItems = () => {
    const image_api_key = import.meta.env.VITE_image_api_key;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_api_key}`
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const UploadedImage = {
            image: data.image[0]
        }
        const res = await axiosPublic.post(image_hosting_api, UploadedImage, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(res.data)
    }
    return (
        <div className="max-w-5xl mx-auto mt-8">
            <SectionTitle subHeading={"What's New"} heading={"Add An Item"}></SectionTitle>
            <div>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-8">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <select defaultValue={'default'} {...register("category")} className="select select-bordered">
                                <option disabled value={'default'}>Please Select Category</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soups</option>
                                <option>Desserts</option>
                                <option>Drinks</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input {...register("price")} type="number" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Upload Image</span>
                        </div>
                        <input {...register("image")} type="file" className="file-input" />
                    </label>
                    <button className="flex items-center btn btn-neutral">Add Item <FaUtensils className="ml-2"></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;