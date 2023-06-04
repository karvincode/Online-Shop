
import allItems from "../data/items.json"
import { Col, Row, Container, Card, Nav } from "react-bootstrap"
import { FrontPageItem } from '../components/FrontPageItem';
import { useEffect, useMemo, useState } from 'react';
import categoryOptions from "../data/categoryOptions.json"
import { CarouselFrontPage } from "../components/Carousel";
import { Link } from "react-router-dom";
import React from "react";

export function Home() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  useEffect(()=> {
    setNum(Math.floor(Math.random() * 6))
  }, [])
  if(num2 === num){
    const randomnum = (Math.floor(Math.random() * 6))
    setNum2(randomnum)
  }
  const category = categoryOptions[num+1]
  const category2 = categoryOptions[num2+1]
  const firstFilteredItems= allItems.filter((item) => { 
    return item.category === category
  })
  const secondFilteredItems= allItems.filter((item) => { 
    return item.category === category2
  })
  return (
    <>

      <CarouselFrontPage />
      <Container>
        <div className="d-flex justify-content-between mb-2 mt-4">
        <h2>{category}..</h2>
        <Link to='/Store'state= {{data: category}} className="link">see more</Link>


        </div>
        <Row md={5} xs={3} lg={5} className="g-3 mb-4">
          {firstFilteredItems.slice(0, 5).map(item => (
            <Col key={item.id}>
              <FrontPageItem {...item} />
            </Col>
          ))}
        </Row>

        <div className="d-flex justify-content-between mb-2 mt-4">
        <h2>{category2}..</h2>
        <Link to='/Store'state= {{data: category}} className="link">see more</Link>


        </div>
        <Row md={5} xs={3} lg={5} className="g-3 mb-4">
          {secondFilteredItems.slice(0, 5).map(item => (
            <Col key={item.id}>
              <FrontPageItem {...item} />
            </Col>
          ))}
        </Row>

        <Card /*onClick*/>
          <Nav.Link href="#Discounts">See All Discounts</Nav.Link>
        </Card>
      </Container>
    </>
  );
}

//Home page href to the store ? item.name in store page get query parameter or (item.name) and useEffect setSearchTerm to the query parameter