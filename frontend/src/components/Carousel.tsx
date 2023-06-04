import Carousel from 'react-bootstrap/Carousel';

export function CarouselFrontPage() {
    return(
    <Carousel>
        <Carousel.Item>
          <img className='w-100 d-inline-block' src="./imgs/pizzaNarrow.jpg"></img>
          <Carousel.Caption>
            <h3>Groceries and Neccessities </h3>
            <p>Order your weekly needs to be delivered right to your door</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='w-100 d-inline-block' src="./imgs/carNarrow.jpg"></img>
          <Carousel.Caption>
            <h3>Automotive </h3>
            <p>Find that missing part or your dream car ready for pickup at your nearest partnered store</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='w-100 d-inline-block' src="./imgs/familyNarrow.jpg"></img>
          <Carousel.Caption>
            <h3>Discover the Perfect Gift </h3>
            <p>Great deals and a wide selection can help you make that great first impression</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}