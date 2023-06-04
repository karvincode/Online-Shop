import { Card } from "react-bootstrap"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import { Link } from "react-router-dom"

type FrontPageItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
    discountPrice?: number
}

export function FrontPageItem({ id, name, price, imgUrl, discountPrice }: FrontPageItemProps) {
    return (

        <Card className="h-100">
            <Link to='/Store'state= {{data: name}} className="">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="100px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex flex-column justify-content-between align-items-baseline mb-4">
                    <span className="as-4">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>

            </Card.Body>
            </Link>
        </Card>
    )
}