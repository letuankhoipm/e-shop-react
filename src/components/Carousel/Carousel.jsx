import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.scss';


class CarouselItem extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 tt-carousel-img"
                        src={`${process.env.PUBLIC_URL}/assets/images/a1.jpg`}
                        alt="First slide" />
                    <Carousel.Caption>
                        <h1 className="tt-font-curve">First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 tt-carousel-img"
                        src={`${process.env.PUBLIC_URL}/assets/images/a2.jpg`}
                        alt="Second slide" />

                    <Carousel.Caption>
                        <h1 className="tt-font-curve">Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 tt-carousel-img"
                        src={`${process.env.PUBLIC_URL}/assets/images/a3.jpg`}
                        alt="Third slide" />

                    <Carousel.Caption>
                        <h1 className="tt-font-curve">Third slide label</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselItem