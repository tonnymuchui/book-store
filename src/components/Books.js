import React, { Component } from 'react';
import './Books.css';
import Forms from './Forms';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="card">
          <div className="main-area">
            <span>Alchemist</span>
            <h1>The Soul of the Universe</h1>
            <p>Destiny</p>
            <ul>
              <li>Corn</li>
              <li>Corn</li>
              <li>Corn</li>
            </ul>
          </div>

          <div className="main-area2">
            <h4>10%</h4>
          </div>
          <div className="main-area3">
            <h4>Current Chapter</h4>
            <h5>Chapter 2</h5>
            <button type="button">UPDATE CHAPTER</button>
          </div>
        </div>
        <Forms />
      </>
    );
  }
}
export default Books;
