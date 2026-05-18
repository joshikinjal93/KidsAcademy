import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";

function about({ removeBg}) {
  return (
    <>
      <section id="about"  style={{ backgroundImage: removeBg ? "none" : "", backgroundColor: removeBg ? "transparent" : ""}}>
        <div className={removeBg ? "p-110" : "about-bg-color p-110"}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="about-image">
                            <img src="/assets/images/about.png" alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-content">
                            <h3 className={removeBg ? "text-purple" : "text-white"}>About Our KidsAcademy</h3>
                            <p className={removeBg ? "text-gray" : "text-white"}>Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly seize viral schemas through intermandated creative is adiea sources. Enthusiasticay plagiarize clientcentered relationship for the covalent experiences. Distinctively architect 24/365 service for wireless is ebusiness ahosfluorescently Efficiently comunicate coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional.</p>
                            <div className="pt-4">
                                <Link to="#" className="button-default bg-purple fw-bold">Read More</Link>
                                <Link to="#" className="button-default bg-yellow fw-bold">Buy Now</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
      </section>
    </>
  )
}

export default about