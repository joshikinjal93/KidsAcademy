import React from 'react'
import Banner from '../Banner'
import Subscribe from '../Subscribe'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const contactData = [
  {
    icon: faLocationDot,
    title: "Our Location",
    color: "text-yellow",
    info: [
      "218 Sahera Tropical Center Room#7",
      "New Newyork Road 1205"
    ]
  },
  {
    icon: faPhone,
    title: "Phone Number",
    color: "text-red",
    info: [
      "01923-970212, 01776-502993",
      "+2154897369"
    ]
  },
  {
    icon: faEnvelope,
    title: "Email Address",
    color: "text-orange",
    info: [
      "hello@labartisan.com",
      "hello@codexcoder.com"
    ]
  }
]


function Contact() {
  return (
    <>
      <Banner props={{heading:"Our Contact Info", page:"Contact us"}}/>
      <section id="Contact" className='p-110'>
        <Container>
            <Row className='my-5'>
                <Col lg={4} md={6}>
                    {
                        contactData.map((item,index) => {
                            return(
                                <div className="d-flex gap-3 mb-3" key={index}>
                                    <FontAwesomeIcon icon={item.icon} className={`${item.color} fs-3`}/>
                                    <div>
                                        <h4 className={item.color}>{item.title}</h4>
                                        <p className='text-gray'>
                                            {
                                                item.info.map((text, i) => (
                                                <React.Fragment key={i}>
                                                    {text}
                                                    <br />
                                                </React.Fragment>
                                                ))
                                            }
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                   
                </Col>
                <Col lg={8} md={6}>
                    <form className='contact-form'>
                        <div className="row">
                            <div className='col-12 col-lg-6'>
                                <input type="text" name="name" placeholder="Your Name" className='form-control' />
                            </div>
                            <div className='col-12 col-lg-6'>
                                <input type="email" name="email" placeholder="Your Email" className='form-control' />
                            </div>
                        </div>
                        <textarea name="message" rows="5" className="form-control" placeholder="Your Messages"></textarea>
                        <div className='mt-5'>
                            <button type="submit" className='button-default bg-purple fw-bold border-0'>Send Message</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
        <div className='contact-map mb-3'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52918450.40025156!2d-161.85240697328845!3d35.949761324666035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1700546543548!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Subscribe/>
      </section>
    </>
  )
}

export default Contact