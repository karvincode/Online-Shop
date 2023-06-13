import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import MainBox from "../components/Mainbox"
import Sidebar from "../components/Sidebar"

export function Profile() {
  return (
    <Row>
      <Col xs={3}>
        <Sidebar />
      </Col>
      <Col xs={9}>
        <MainBox>
          <p>This is additional content within the Main Box.</p>
        </MainBox>
      </Col>
    </Row>

  )
}