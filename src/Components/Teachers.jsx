import { faFacebookF, faPinterest, faTwitter, faVimeoV } from '@fortawesome/free-brands-svg-icons'
import { faRss } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const teacher_Details = [
  {
    img:"/assets/images/teacher_01.jpg",
    name:"Broklyn Doel",
    role:"Sains Teacher",
    bgColor:"bg-purple",
  },
  {
    img:"/assets/images/teacher_02.jpg",
    name:"Alex Jhonson",
    role:"Art Teacher",
    bgColor:"bg-red",
  },
  {
    img:"/assets/images/teacher_03.jpg",
    name:"Robot Jhonson",
    role:"Math Teacher",
    bgColor:"bg-orange",
  },
  {
    img:"/assets/images/teacher_04.jpg",
    name:"Janaton Doe",
    role:"English Teacher",
    bgColor:"bg-lightblue",
  }
]
function Teachers() {
  return (
    <>
    <section id="Teachers">
        <Container>
            <Row className='mb-4'>
                <Col lg={7} className='text-center mx-auto'>
                  <h3 className='fw-bold'>Meet Our Teachers</h3>
                  <p>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                </Col>
            </Row>
            <Row>
               {
                teacher_Details.map((item,index)=>{
                  return(
                    <Col lg={6} className='py-3 px-4' key={index}>
                        <div>
                          <Row>
                              <Col sm={4} className='p-0'>
                                <img src={item.img} alt="#" className='img-fluid w-100 h-100' />
                              </Col>
                              <Col sm={8} className={`p-3 ${item.bgColor}`}>
                                <h4>{item.name} <span>{item.role}</span></h4>
                                <div className="teacher-social-icon">
                                    <span><FontAwesomeIcon icon={faFacebookF}/></span>
                                    <span><FontAwesomeIcon icon={faVimeoV}/></span>
                                    <span><FontAwesomeIcon icon={faTwitter}/></span>
                                    <span><FontAwesomeIcon icon={faPinterest}/></span>
                                    <span><FontAwesomeIcon icon={faRss}/></span>
                                </div>
                                <p className='my-3'>Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                                <Link to="Teachers" className='fw-semibold text-white'>View Portfolio</Link>
                              </Col>
                          </Row>
                        </div>
                    </Col>
                  )
                })
               }
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Teachers