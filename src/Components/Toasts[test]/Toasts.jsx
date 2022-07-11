import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';
import './Toasts.css';

export default class Toasts extends Component {
  render() {
    return (
      <Toast>
        <Toast.Header closeButton={false}>
    <strong className="me-auto">Bootstrap</strong>
  </Toast.Header>
  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
    )
  }
}


