import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import textContent from '../json/Comp_1.json'; // Import textContent

export default class Component_1 extends Component {
  render() {
    return (
      <div className="wrapper bgded overlay" style={{ backgroundImage: "url('images/demo/backgrounds/01.png')" }}>
        <div id="pageintro" className="hoc clear">
          <article className="introtxt">
            <h2 className="heading">{textContent.heading}</h2>
            <p>{textContent.paragraph}</p>
            <footer>
              <a className="btn medium" href="#">
                {textContent.buttonText}
              </a>
            </footer>
          </article>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}
