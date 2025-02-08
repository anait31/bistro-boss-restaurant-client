import { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
// import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import { StarRating } from "react-star-rating-input";
import { AiOutlineComment } from "react-icons/ai";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    // console.log(reviews)
    useEffect(() => {
        fetch('https://bistro-boss-restaurant-server-iota.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className="pb-16 max-w-6xl mx-auto text-center">
            <SectionTitle heading={"TESTIMONIALS"} subHeading={"What Our Clients Say"}></SectionTitle>
            <div>
                {/* {
                   reviews.map(review => <TestimonialCard key={review._id} review={review}></TestimonialCard>) 
                } */}

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="w-10/12 mx-auto">
                                <div className="flex justify-center">
                                    <StarRating value={4} />
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <AiOutlineComment className="flex justify-center w-full text-4xl my-3"></AiOutlineComment>
                                <p>{review.details}</p>
                                <h3 className="text-xl font-bold">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Testimonials;