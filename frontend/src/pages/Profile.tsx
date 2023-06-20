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
        </MainBox>
      </Col>
    </Row>

  )
}