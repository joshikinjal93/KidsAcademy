import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import event1 from "/assets/images/event_01.jpg";
import event2 from "/assets/images/event_02.jpg";
import event3 from "/assets/images/event_03.jpg";

const events = [
  {
    id: 1,
    title: "Imagination Classes",
    image: event1,
    date: "24",
    month: "March",
    color: "yellow",
    layout: "horizontal",
  },
  {
    id: 2,
    title: "Imagination Classes",
    image: event2,
    date: "24",
    month: "March",
    color: "orange",
    layout: "vertical",
  },
  {
    id: 3,
    title: "Imagination Classes",
    image: event3,
    date: "24",
    month: "March",
    color: "red",
    layout: "horizontal reverse",
  },
];

const EventCard = ({ event }) => {
  const isReverse = event.layout.includes("reverse");

  return (
    <div
      className={`event-card ${
        event.layout.includes("horizontal") ? "horizontal-card" : "vertical-card"
      } ${isReverse ? "flex-reverse" : ""}`}
    >
      <div className="event-img position-relative">
        <img src={event.image} alt={event.title} className="img-fluid w-100" />

        <div className={`date bg-${event.color} text-white`}>
          <span className="fw-bold fs-4">{event.date}</span>
          <p>{event.month}</p>
        </div>
      </div>

      <div className="event-content">
        <h4 className={`text-${event.color}`}>{event.title}</h4>

        <FontAwesomeIcon icon={faClock} className="text-red" />
        <span className="text-gray ms-2">08:00 am - 10:00 am</span>
        <br />

        <FontAwesomeIcon icon={faHome} className="text-orange" />
        <span className="text-gray ms-2">
          218 New Newyork Road Newyork
        </span>

        <p className="text-gray mt-3 mb-4">
          Dratcaly novate fuly rarched and plications awesome theme education athat plications creative theme education
        </p>

        <Link
          to="#"
          className={`join-btn-style bg-${event.color} mb-3`}
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

function Events() {
  return (
    <section id="Events" className="p-110">
      <Container>
        <Row className="mb-5">
          <Col lg={7} className="mx-auto text-center">
            <h3 className="text-purple fw-bold">
              Don't Miss Our Event
            </h3>
            <p className="text-gray">
              Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.
            </p>
          </Col>
        </Row>

        <Row className="g-0">
          <Col lg={8} md={6}>
            <EventCard event={events[0]} />
            <EventCard event={events[2]} />
          </Col>

          <Col lg={4} md={6}>
            <EventCard event={events[1]} />
          </Col>
        </Row>
        
      </Container>
    </section>
  );
}

export default Events