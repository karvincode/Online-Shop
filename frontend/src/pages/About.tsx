import { Accordion, Container } from "react-bootstrap";

export function About() {
    return (
    <>
        <h1>About Us</h1>
        <Container className="p-2">
        <p>We are an online store dedicated to finding you deals at the lowest possible price by enganging with local stores near you in order to find
             the lowest price in any region.</p>
             <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How It's Done</Accordion.Header>
        <Accordion.Body>
          By having close relationships with all sorts of stores accross the country we can find the lowest price offered in order to deliver to you at the lowest possible price in America
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Our Partners</Accordion.Header>
        <Accordion.Body>
          -Walmart <br></br>
          -BestBuy <br></br>
          -Sears <br></br>
          -JC Pennys <br></br>
          -And Many More <br></br>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Our Story</Accordion.Header>
        <Accordion.Body>
          We were founded in 1998 near the start of the .dot come bubble in which we actually started as a shipping company
           as a middle man between suppliers and storefronts. In 2008 we had a complete rehaul of our business model into what
            it has become today using our expertise in shipping to find the cheapest routes possible
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>
    </>
    )

}