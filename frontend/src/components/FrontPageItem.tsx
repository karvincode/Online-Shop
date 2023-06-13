import { Card } from "react-bootstrap"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import { Link } from "react-router-dom"
import { CategoryContext } from "../context/HomeContext";
import { useContext } from "react";

type FrontPageItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
    discountPrice?: number
}

export function FrontPageItem({ id, name, price, imgUrl, discountPrice }: FrontPageItemProps) {
    const { setSearchTerm } = useContext(CategoryContext);
    const handleSearchTermChange = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    }
    return (

        <Card className="h-100">
            <Link style={{ textDecoration: 'none' }} to='/Store' onClick={() => handleSearchTermChange(name)} className="">
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