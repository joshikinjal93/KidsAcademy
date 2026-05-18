import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Subscribe() {
  return (
    <>
      <section id="Subscribe">
         <Container>
            <Row    >
                <Col lg={5} sm={12} className='d-flex align-items-center'>
                    <h3 className='text-white fs-2'>Join Our Newsletter</h3>
                </Col>
                <Col lg={7} sm={12}>
                    <form action="/">
                        <input type="text" placeholder='Enter your e-mail here' />
                        <input type="submit" value='Subscribe Now' />
                    </form>
                </Col>
            </Row>
         </Container>
      </section>
    </>
  )
}

export default Subscribe