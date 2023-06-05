import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import allItems from "../data/items.json"
import categoryOptions from "../data/categoryOptions.json"
import { useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"


export function Store() {
    const location  = useLocation();
    const [category, setCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const filteredItems = useMemo(() => {

        return allItems.filter((item) => {
            
            if (category === "All") {
                return true
            } else{
            return item.category === category
            }
        }).filter((item)=> {
            if (searchTerm === "") {
                return true
            } else {
                const searchFields =
                    item.name.toLowerCase()
                    return searchFields.includes(searchTerm.toLowerCase());
            }
        });
    }, [category, searchTerm]);
// Useful code if I do not want categorical search
    // useEffect(() => {
    //     if (searchTerm !== "") {
    //         setCategory("All");
    //     }
    // }, [searchTerm]);

    return (
        <>
            <h1>Store</h1><>
                <select
                    value={category}
                    onChange={(e) => 
                        setCategory(e.target.value)}
                    // call this to a different function 
                >
                    {categoryOptions.map((category, i) => {
                        return (
                            <option value={category} key={i}>
                                {category}
                            </option>
                        );
                    })}
                </select>
                <input
                    className="border p-1 px-3 my-3"
                    name="searchItem"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    //make go to a function like the other on change
                />

                <Row md={2} xs={1} lg={3} className="g-3">
                    {filteredItems.map(item => (
                        <Col key={item.id}>
                            <StoreItem {...item} />
                        </Col>
                    ))}
                </Row>
            </></>
    )



}