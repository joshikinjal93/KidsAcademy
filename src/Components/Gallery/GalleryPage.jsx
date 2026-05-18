import React from 'react'
import Banner from '../Banner'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Subscribe from '../Subscribe'


const galleryData = [
    {
        img: "./src/assets/images/gallery_01.jpg"
    },
    {
        img: "./src/assets/images/gallery_02.jpg"
    },
    {
        img: "./src/assets/images/gallery_03.jpg"
    },
    {
        img: "./src/assets/images/gallery_04.jpg"
    },
    {
        img: "./src/assets/images/gallery_05.jpg"
    },
    {
        img: "./src/assets/images/gallery_06.jpg"
    }
]
function GalleryPage() {
  return (
    <>
        <Banner props={{heading:"About Our KidsAcademy", page:"About us"}}/>
         <section id="Gallery" className='p-110'>
        <Container>
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
    <Subscribe/>
    </>
  )
}

export default GalleryPage