import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import im1 from '../images/swiperimg/ad.jpg'
import im2 from '../images/swiperimg/5.jpg';
import im3 from '../images/swiperimg/Untitled-1.jpg';
import im4 from '../images/swiperimg/sdf.jpg'

const Swipercomp = () => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide key={im1}><img src={im1} alt='1' /></SwiperSlide>
                <SwiperSlide key={im2}><img src={im2} alt='2' /></SwiperSlide>
                <SwiperSlide key={im3}><img src={im3} alt='3' /></SwiperSlide>
                <SwiperSlide key={im4}><img src={im4} alt='4' /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Swipercomp;