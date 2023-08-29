import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import im1 from '../Components/images/swiperimg/k4.jpg'
import im2 from '../Components/images/swiperimg/k1.jpg';
import im3 from '../Components/images/swiperimg/k2.jpg';
import im4 from '../Components/images/swiperimg/k3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Kidscloth.css'
import { Card, Placeholder } from 'react-bootstrap';
import Products from '../Components/Products/Products';


function Kidscloth() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/item/kids')
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [])
  return (
    <div className='mensw'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide key={im1}><img src={im1} alt='1' /></SwiperSlide>
        <SwiperSlide key={im2}><img src={im2} alt='2' /></SwiperSlide>
        <SwiperSlide key={im3}><img src={im3} alt='3' /></SwiperSlide>
        <SwiperSlide key={im4}><img src={im4} alt='4' /></SwiperSlide>

      </Swiper>
      {/*Item Grid */}
      <div className='menlist'>
        <div className='newarrival'>
          <div className='minnerdiv'>Scroll down to shopping</div>
        </div>
        {
          items.length > 0 ?
            <Products products={items} />
            :
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                  <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
              </Card.Body>
            </Card>

        }
      </div>
    </div>
  )
}

export default Kidscloth