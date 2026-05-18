import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css/autoplay';

const partnerData = [
  { id: 1, image: "./src/assets/images/partner_01.jpg" },
  { id: 2, image: "./src/assets/images/partner_02.jpg" },
  { id: 3, image: "./src/assets/images/partner_03.jpg" },
  { id: 4, image: "./src/assets/images/partner_04.jpg" },
  { id: 5, image: "./src/assets/images/partner_05.jpg" },
  { id: 6, image: "./src/assets/images/partner_01.jpg" },
  { id: 7, image: "./src/assets/images/partner_02.jpg" },
  { id: 8, image: "./src/assets/images/partner_03.jpg" },
  { id: 9, image: "./src/assets/images/partner_04.jpg" },
  { id: 10, image: "./src/assets/images/partner_05.jpg" }
];

function Partner( {removeBg}) {
  return (
    <section id="Partner" className="p-110" style={{ backgroundImage: removeBg ? "none" : "", backgroundColor: removeBg ? "transparent" : ""}}>
      <Container>
        <Row className='mb-5'>
          <Col lg={7} className='text-center mx-auto'>
            <h3 className={removeBg ? "text-purple" : "text-white"}>Our Partners Logo</h3>
            <p className={removeBg ? "text-gray" : "text-white"}>
              Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.
            </p>
          </Col>
        </Row>
        <Swiper
            spaceBetween={20}
            slidesPerView={5}
              modules={[Autoplay]}
              autoplay={{
                delay: 2500, 
                disableOnInteraction: false, 
                pauseOnMouseEnter: true,
              }}
              loop={true}
              breakpoints={{
                  0: { slidesPerView: 1 },
                  540: { slidesPerView: 2 },
                  768: { slidesPerView: 4 },
                  992: { slidesPerView: 5 }
              }}
        >
        {
          partnerData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="text-center">
                <img
                    src={item.image}
                    alt="partner"
                    className="img-fluid w-100"
                  />
                </div>
              </SwiperSlide>
            ))
          }

        </Swiper>

      </Container>
    </section>
  )
}

export default Partner