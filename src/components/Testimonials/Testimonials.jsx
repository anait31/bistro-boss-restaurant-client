import { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    console.log(reviews)
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className="pb-16">
            <SectionTitle heading={"TESTIMONIALS"} subHeading={"What Our Clients Say"}></SectionTitle>
            <div>
                {/* {
                   reviews.map(review => <TestimonialCard key={review._id} review={review}></TestimonialCard>) 
                } */}
            </div>
        </div>
    );
};

export default Testimonials;