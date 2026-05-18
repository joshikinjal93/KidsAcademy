import { faFacebookF, faGooglePlusG, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons/faDribbble'
import { faEnvelope, faHome } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const footerIcons = [
    {
        icon:faHome,
        text:"New Chokoya Road, USA.",
        textColor:"text-yellow"
    },
    {
        icon:faPhone,
        text:"+8801 923 970 212, 0125897",
        textColor:"text-red"
    },
    {
        icon:faEnvelope,
        text:"Contact@admin LabArtisan",
        textColor:"text-orange"
    },
     {
        icon:faGlobe,
        text:" Email@admin LabArtisan",
        textColor:"text-purple"
    }
]
const latestnewsData = [
    {
        img:"/assets/images/footer_post_01.jpg",
        heading:"Corem psum dolor the amectetuer adipiscing...",
        text:"04 February 2021"
    },
    {
        img:"/assets/images/footer_post_02.jpg",
        heading:"Corem psum dolor the amectetuer adipiscing...",
        text:"28 January 2021"
    },
    {
        img:"/assets/images/footer_post_03.jpg",
        heading:"Duis autem iriure dolor in hendrerit esse...",
        text:"03 January 2021"
    }
]
const twiietwidgetData = [
    {
        icon:faTwitter,
        heading:"Raritas etiam processus them dynamicus sequitur mutatem education theme",
        text:"23 seconds ago",
        bgColor:"bg-yellow"
    },
    {
        icon:faTwitter,
        heading:"Duis autem veleum iriu dolor hendrerit in vulputate velit",
        text:"8 seconds ago",
        bgColor:"bg-red"
    },
    {
        icon:faTwitter,
        heading:"@frankdoe amber tempor cum soluta nobis eleifend",
        text:"2 years ago",
        bgColor:"bg-orange"
    }
]
const galleryImage = [
    {
        img: "/assets/images/gallery_01 (1).jpg"
    },
    {
        img: "/assets/images/gallery_02 (1).jpg"
    },
    {
        img: "/assets/images/gallery_03 (1).jpg"
    },
    {
        img: "/assets/images/gallery_04 (1).jpg"
    },
    {
        img: "/assets/images/gallery_05 (1).jpg"
    },
    {
        img: "/assets/images/gallery_06 (1).jpg"
    },
    {
        img: "/assets/images/gallery_07.jpg"
    },
    {
        img: "/assets/images/gallery_08.jpg"
    },
    {
        img: "/assets/images/gallery_09.jpg"
    }
]
const socialmediaIcons = [
    {
        icon:faFacebookF
    },
    {
        icon:faDribbble
    },
    {
        icon:faGooglePlusG
    },
    {
        icon:faTwitter
    },
    {
        icon:faPinterest
    }
]
function Footer() {
  return (
    <>
      <footer>
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col lg={3} md={6} sm={12} className='mb-5'>
                            <div className='mb-4'>
                                <img src="/assets/images/logo.png" alt="" className='img-fluid' />
                            </div>
                            <div className='footer-about mb-4'>
                                <p className='text-gray'>Distily enable team driven services through extensive is a relatonships platforms with interactive content. Enthusiastically scale effective.</p>
                            </div>
                            {
                                footerIcons.map((item,index)=>{
                                    return(
                                        <div className="d-flex gap-3" key={index}>
                                            <div className='home-icon'>
                                                <span className={item.textColor}><FontAwesomeIcon icon={item.icon}/></span>
                                            </div>
                                            <div>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className='mb-4'>
                                <h4 className='text-yellow fs-2'>Latest News</h4>
                            </div>
                            {
                                latestnewsData.map((item,index)=>{
                                    return(
                                        <div className='d-flex gap-2 mb-5' key={index}>
                                            <div>
                                                <img src={item.img} alt="" className='img-fluid w-100 h-100' />
                                            </div>
                                            <div className='footer-content'>
                                                <p className='text-gray'>{item.heading}</p>
                                                <span className='text-yellow'>{item.text}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Col>
                        <Col lg={3} md={6} sm={12} className='mb-3'>
                            <div className='mb-4'>
                                <h4 className='text-red fs-2'>Twitter Widget</h4>
                            </div>
                            {
                                twiietwidgetData.map((item,index)=>{
                                    return(
                                        <div className="d-flex gap-3 mb-5" key={index}>
                                        <div className='twitter-icon'>
                                            <span className={item.bgColor}><FontAwesomeIcon icon={item.icon}/></span>
                                        </div>
                                        <div className="footer-content">
                                            <p className='text-gray'>{item.heading}</p>
                                            <span className='text-red'>{item.text}</span>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                        <div className='mb-4'>
                            <h4 className='text-orange fs-2'>Recent Photos</h4>
                        </div>
                        <div className="d-flex flex-wrap gap-2 mt-5"> 
                            {
                                galleryImage.map((item,index)=>{
                                    return(
                                        <img src={item.img} key={index} alt="gallery" className='img-fluid' style={{ width: "30%"}} />
                                    )
                                })
                            }
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-bottom">
                <Container>
                    <Row>
                        <Col md={6} sm={12}>
                            <p className='text-gray'>© 2021. Designed By 
                                <Link to="#">LabArtisan</Link>
                            </p>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className='social-icon'>
                                <span className='bg-blue'><FontAwesomeIcon icon={faFacebookF}/></span>
                                <span className='bg-pink'><FontAwesomeIcon icon={faDribbble}/></span>
                                <span className='bg-red'><FontAwesomeIcon icon={faGooglePlusG}/></span>
                                <span className='bg-lightblue'><FontAwesomeIcon icon={faTwitter}/></span>
                                <span className='bg-brown'><FontAwesomeIcon icon={faPinterest}/></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
      </footer>
    </>
  )
}

export default Footer