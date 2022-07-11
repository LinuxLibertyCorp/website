import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import mountainImg from '/home/naddur/Projects/llc/frontend/src/Assets/mountain.jpg';
import sunImg from '/home/naddur/Projects/llc/frontend/src/Assets/sun.jpg';
import cityImg from '/home/naddur/Projects/llc/frontend/src/Assets/city.jpg';

export default class Slider extends Component {
  render() {
    return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mountainImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sunImg}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cityImg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
  }
}

