import {
  faBuildingColumns,
  faMicrophone,
  faHouse,
  faUser,
  faShareNodes,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Features() {

  const leftFeatures = [
    {
      title: "Expert Teachers",
      color: "yellow",
      icon: faUser
    },
    {
      title: "Multimedia Class",
      color: "orange",
      icon: faBuildingColumns
    },
    {
      title: "Music And Art Class",
      color: "lightblue",
      icon: faMicrophone
    }
  ]

  const rightFeatures = [
    {
      title: "Expert Teachers",
      color: "red",
      icon: faHouse
    },
    {
      title: "Multimedia Class",
      color: "purple",
      icon: faShareNodes
    },
    {
      title: "Music And Art Class",
      color: "pink",
      icon: faLocationDot
    }
  ]

  return (
    <>
      <section id="Features" className='p-110'>
        <Container>

          {/* Heading */}
          <Row className='mb-5'>
            <Col lg={7} className='text-center mx-auto'>
              <h3 className='fw-bold text-purple'>
                Why Choose KidsAcademy
              </h3>

              <p className='text-gray'>
                Rapidiously expedite granular imperatives before economically
                sound web services. Credibly actualize pandemic strategic
                themeplatform.
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={4} xs={12}>
              {
                leftFeatures.map((item, index) => (
                  <div
                    className='d-flex flex-column flex-lg-row align-items-start gap-3 left mb-2 justify-content-end'
                    key={index}
                  >
                    
                    <div className='feature-item order-lg-1 order-2'>
                      <h4 className={`text-${item.color}`}>
                        {item.title}
                      </h4>

                      <p className='text-gray'>
                        Distinctively enhance empowered and alignments
                        without leveraged architectures professionally.
                      </p>
                    </div>

                    <div className={`feature-icon bg-${item.color} order-lg-2 order-1`}>
                        <FontAwesomeIcon icon={item.icon} className='fs-3' />
                    </div>
                  </div>
                ))
              }
            </Col>

            <Col lg={4} xs={12} className='text-center mb-4 mb-lg-0'>
              <img
                src="/assets/images/feature.jpg"
                alt="Feature Image"
                className='img-fluid w-100'
              />
            </Col>

            <Col lg={4} xs={12}>
              {
                rightFeatures.map((item, index) => (
                    <div
                        className='d-flex flex-column flex-lg-row  align-items-start gap-3 right mb-2' key={index}>
                    
                    <div className={`feature-icon bg-${item.color}`}>
                        <FontAwesomeIcon icon={item.icon} className='fs-3' />
                    </div>
                   
                    <div className='feature-item'>
                      <h4 className={`text-${item.color}`}>
                        {item.title}
                      </h4>

                      <p className='text-gray'>
                        Distinctively enhance empowered and alignments
                        without leveraged architectures professionally.
                      </p>
                    </div>

                  </div>
                ))
              }
            </Col>

          </Row>

        </Container>
      </section>
    </>
  )
}

export default Features