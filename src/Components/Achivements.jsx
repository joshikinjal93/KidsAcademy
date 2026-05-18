import { faBuilding, faPerson, faBus, faPeopleArrows } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const achivementsData = [
    {
        icon:faPerson,
        count:"0+",
        name:"Total Students"
    },
    {
        icon:faBuilding,
        count:"0",
        name:"Class Rooms"
    },
    {
        icon:faBus,
        count:"0",
        name:"Schools bus"
    },
    {
        icon:faPeopleArrows,
        count:"0",
        name:"Total Teachers"
    }
]
function Achivements() {
  return (
    <>
        <section id="Achivements">
            <Container>
                <Row>
                    {
                        achivementsData.map((item,index)=>{
                            return(
                                <Col md={3} sm={3} key={index}>
                                    <div className='achivements-item'>
                                        <span className='icon mb-3'><FontAwesomeIcon icon={item.icon}/></span>
                                        <span>{item.count}</span>
                                        <p>{item.name}</p>
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

export default Achivements