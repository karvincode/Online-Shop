import {ListGroup,ListGroupItem} from "react-bootstrap"

export function Profile() {
    return(
        <>
        <ListGroup>
            <ListGroupItem>Profile</ListGroupItem>
            <ListGroupItem>Security</ListGroupItem>
            <ListGroupItem>Payment Information</ListGroupItem>
            <ListGroupItem>Your Orders</ListGroupItem>
        </ListGroup>
        <ul className="list-group">
            <li className="list-group-item active">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        </>
    )
}