import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    text: "Professionally predominate that timely infrastructures tops line methodologies. Collaboratively seize scalable channels before longterm high impact",
    name: "Joly Smith",
    role: "ui/ux Designer",
    img: "/assets/images/testimonial_01.jpg",
    icon: "/assets/images/testimonial_icon_01.jpg",
    color:"#ffc000"
  },
  {
    id: 2,
    text: "Professionally predominate that timely infrastructures tops line methodologies. Collaboratively seize scalable channels before longterm high impact",
    name: "Joly Smith",
    role: "ui/ux Designer",
    img: "/assets/images/testimonial_02.jpg",
    icon: "/assets/images/testimonial_icon_02.jpg",
    color:"#e84b3a"
  },
  {
    id: 3,
    text: "Professionally predominate that timely infrastructures tops line methodologies. Collaboratively seize scalable channels before longterm high impact",
    name: "Joly Smith",
    role: "ui/ux Designer",
    img: "/assets/images/testimonial_03.jpg",
    icon: "/assets/images/testimonial_icon_03.jpg",
    color:"#fc7f0c"
  },
  {
    id: 4,
    text: "Professionally predominate that timely infrastructures tops line methodologies. Collaboratively seize scalable channels before longterm high impact",
    name: "Joly Smith",
    role: "ui/ux Designer",
    img: "/assets/images/testimonial_01.jpg",
    icon: "/assets/images/testimonial_icon_01.jpg",
    color:"#ffc000"
  },
  {
    id: 5,
    text: "Professionally predominate that timely infrastructures tops line methodologies. Collaboratively seize scalable channels before longterm high impact",
    name: "Joly Smith",
    role: "ui/ux Designer",
    img: "/assets/images/testimonial_02.jpg",
    icon: "/assets/images/testimonial_icon_02.jpg",
    color:"#e84b3a"
  },
  {
    id: 6,
    text: "Professionally predominate that timely infrastructures tops line methodologies. Collaboratively seize scalable channels before longterm high impact",
    name: "Joly Smith",
    role: "ui/ux Designer",
    img: "/assets/images/testimonial_03.jpg",
    icon: "/assets/images/testimonial_icon_03.jpg",
    color:"#fc7f0c"
  }
]

function Testimonials( {desktopSlides = 3 }) {
  return (
    <section id="Testimonials" className="p-110">
      <Container>
        <Row>
          <Col lg={7} className="text-center mx-auto mb-5">
            <h3 className="text-purple">What Parents Say</h3>
            <p className="text-gray">
              Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.
            </p>
          </Col>
        </Row>    
        <Swiper
          slidesPerView={desktopSlides}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: desktopSlides }
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className='testimonial-item'>
              <div className="testimonial-details" style={{ border: `2px solid ${item.color}`, color: item.color}}>
              
                  <p className='text-gray'>{item.text}</p>
                  <h4 className='text-red fw-bold'>
                    {item.name}
                     <span className='text-gray ms-2'>{item.role}</span>
                  </h4>
                  <img src={item.icon} alt="testimonial icon" className="img-fluid"></img>
               </div>

                <div className="testimonials-img"style={{ borderColor: item.color }}>
                  <img src={item.img} alt={item.name} className='img-fluid' />
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default Testimonials