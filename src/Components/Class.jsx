import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const classData = [
    {
        img:"/src/assets/images/class_01.jpg",
        title: "Imagination Classes",
        textColor:"text-yellow",
        bgColor:"bg-yellow"
    },
    {
        img:"/src/assets/images/class_02.jpg",
        title: "Drawing Classes",
        textColor:"text-red",
        bgColor:"bg-red"
    },
    {
        img:"/src/assets/images/class_03.jpg",
        title: "Learning Classes",
        textColor:"text-orange",
        bgColor:"bg-orange"
    },
    {
        img:"/src/assets/images/class_04.jpg",
        title: "Imagination Classes",
        textColor:"text-purple",
        bgColor:"bg-purple"
    },
    {
        img:"/src/assets/images/class_05.jpg",
        title: "Drawing Classes",
        textColor:"text-lightblue",
        bgColor:"bg-lightblue"
    },
    {
        img:"/src/assets/images/class_06.jpg",
        title: "Learning Classes",
        textColor:"text-darkblue",
        bgColor:"bg-darkblue"
    },
    {
        img:"/src/assets/images/class_07.jpg",
        title: "Imagination Classes",
        textColor:"text-pink",
        bgColor:"bg-pink"
    },
    {
        img:"/src/assets/images/class_08.jpg",
        title: "Drawing Classes",
        textColor:"text-darkgreen",
        bgColor:"bg-darkgreen"
    },
    {
        img:"/src/assets/images/class_09.jpg",
        title: "Learning Classes",
        textColor:"text-darkred",
        bgColor:"bg-darkred"
    }
]

function Class() {
  return (
    <>
        <section id="classes" className="p-110">
            <Container>
                <Row>
                    {
                        classData.map((item,index)=>{
                            return(
                                <Col lg={4} sm={6} xs={12} key={index}>
                                    <div className='mb-5 item'>
                                        <div className="class-img">
                                            <img src={item.img} alt="class image" className="img-fluid"/>
                                        </div>
                                        <div className="d-flex gap-1">
                                            <div className='bg-purple text-white text-center fw-bold flex-fill schedule'>
                                                <span>Class Size</span><br />
                                                <span>30 - 40</span>
                                            </div>
                                            <div className='bg-red text-white text-center fw-bold flex-fill schedule'>
                                                <span>Years Old</span><br />
                                                <span>5-6</span>
                                            </div>
                                            <div className='bg-orange text-white text-center fw-bold flex-fill schedule'>
                                                <span>Tution Fee</span><br />
                                                <span>$1500</span>
                                            </div>                                
                                        </div>
                                        <div className="content">
                                            <h4 className={`fw-bold ${item.textColor}`}>{item.title}</h4>
                                            <p className='text-gray mb-2'>
                                                <span className='text-red'>Class Time</span>
                                                : 08:00 am - 10:00 am
                                            </p>
                                            <p className='text-gray m-0'>Draticaly novate fuly rarched an plications awesome theme education</p>
                                        </div>
                                        <div className={`text-white d-flex gap-1 align-items-center address ${item.bgColor}`}>
                                            <FontAwesomeIcon icon={faHome}/>
                                            <span>218 New Newyork Road, USA- 1205</span>
                                        </div>
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

export default Class