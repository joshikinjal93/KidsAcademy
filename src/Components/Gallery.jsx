import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const galleryData = [
    {
        img: "/assets/images/gallery_01.jpg"
    },
    {
        img: "/assets/images/gallery_02.jpg"
    },
    {
        img: "/assets/images/gallery_03.jpg"
    },
    {
        img: "/assets/images/gallery_04.jpg"
    },
    {
        img: "/assets/images/gallery_05.jpg"
    },
    {
        img: "/assets/images/gallery_06.jpg"
    }
]
function Gallery() {
  return (
    <>
    <section id="Gallery" className='p-110'>
        <Container>
             <Row className='mb-4'>
                <Col lg={7} className='text-center mx-auto'>
                    <h3 className='fw-bold text-purple'>Our School Gallery</h3>
                    <p className='text-gray'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                </Col>
            </Row>
            <div className="text-center gallery-menu mb-5">
                <span className='text-yellow fs-6'>Show all</span>
                <span className='text-red fs-6'>Class</span>
                <span className='text-orange fs-6'>Event</span>
                <span className='text-purple fs-6'>Playing</span>
                <span className='text-lightblue fs-6'>Art</span>
            </div>
            <Row> 
               {
                galleryData.map((item,index)=>{
                    return(
                        <Col lg={4} md={6} className='mb-4' key={index}>
                            <img src={item.img} alt="" className='w-100' />
                        </Col>
                    )
                })
               }
            </Row>
            <div className='text-center mt-5'>
                <Link to="#" className='button-default bg-purple fw-bold'>View More Gallery</Link>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Gallery