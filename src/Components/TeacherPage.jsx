import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css/autoplay';


const teacher_Details = [
  {
    img:"./src/assets/images/teacher_05.jpg",
    name:"Alex Jhonson",
    role:"Sains Teacher"
  },
  {
    img:"./src/assets/images/teacher_06.jpg",
    name:"Alex bare",
    role:"Art Teacher"
  },
  {
    img:"./src/assets/images/teacher_07.jpg",
    name:"helas Jhonson",
    role:"English Teacher"
  },
  {
    img:"./src/assets/images/teacher_08.jpg",
    name:"Paul Jhonson",
    role:"Math Teacher"
  },
  {
    img:"./src/assets/images/teacher_05.jpg",
    name:"Alex Jhonson",
    role:"Sains Teacher"
  },
  {
    img:"./src/assets/images/teacher_06.jpg",
    name:"Alex Jhonson",
    role:"Art Teacher"
  },
  {
    img:"./src/assets/images/teacher_07.jpg",
    name:"Alex Jhonson",
    role:"English Teacher"
  },
  {
    img:"./src/assets/images/teacher_08.jpg",
    name:"Alex Jhonson",
    role:"Math Teacher"
  },
]
function TeacherPage() {
  return (
    <>
    <section id="TeacherPage">
        <Container>
            <Row className='mb-5'>
                <Col lg={7} className='text-center mx-auto'>
                  <h3 className='fw-bold'>Meet Our Teachers</h3>
                  <p>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                </Col>
            </Row>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
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
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: {slidesPerView: 4},
                }}
            >
            {
                teacher_Details.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='text-center'>
                            <img
                                src={item.img}
                                alt="Teacher Image"
                                className="img-fluid w-100"
                              />
                            <h4 className='mt-3 m-0'>{item.name}</h4>
                            <span>{item.role}</span>
                        </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </Container>
    </section>
    </>
  )
}

export default TeacherPage