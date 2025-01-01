import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const TestimonialCard = ({ review }) => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            </Swiper>
        </div>
    );
};

export default TestimonialCard;