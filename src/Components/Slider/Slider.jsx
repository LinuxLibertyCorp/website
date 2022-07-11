import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mountainImg from './mountain.jpg';
import sunImg from './sun.jpg';
// import cityImg from './city.jpg';
import linuxImg from './linux.jpg';

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
          // Make 1920 1080 photo to be full screen
          style={{"height": "100%"}}
          src={linuxImg}
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

