import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'


const OrderSlider = () => {
    return (
        <div className='max-w-6xl mx-auto pb-12'>
            <SectionTitle subHeading="From 11:00am to 10:00pm" heading="ORDER ONLINE"></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-8"
            >
                <SwiperSlide>
                    <div>
                        <img className='opacity-50' src={slide1} alt="" />
                        <h3 className='text-center -mt-12 text-3xl uppercase font-semibold'>Salad</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='opacity-50' src={slide2} alt="" />
                        <h3 className='text-center -mt-12 text-3xl uppercase font-semibold'>Souprs</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='opacity-50' src={slide3} alt="" />
                        <h3 className='text-center -mt-12 text-3xl uppercase font-semibold'>Pizzas</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='opacity-50' src={slide4} alt="" />
                        <h3 className='text-center -mt-12 text-3xl uppercase font-semibold'>Desserts</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='opacity-50' src={slide5} alt="" />
                        <h3 className='text-center -mt-12 text-3xl uppercase font-semibold'>Salad</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderSlider;