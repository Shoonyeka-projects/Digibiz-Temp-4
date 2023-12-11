import React, { Component } from 'react';
import textContent from '../json/Comp_6.json'; // Import textContent

export default class Component_6 extends Component {
  render() {
    const { wrapperClassName, logos, moreButton } = textContent;

    return (
      <div className={`wrapper ${wrapperClassName}`}>
        <div className="hoc clear">
          <figure id="logos">
            <ul className="nospace group">
              {logos.map((logo, index) => (
                <li key={index}>
                  {/* Replace the "#" with the desired URL */}
                  <a href={logo.url}>
                    <img src={logo.imageSrc} alt="" />
                  </a>
                </li>
              ))}
            </ul>
            <figcaption className="hidden">
              {/* Replace the "#" with the desired URL */}
              <a className="btn small" href={moreButton.url}>
                {moreButton.text}
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}
