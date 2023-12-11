import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import textContent from '../json/Comp_2.json'; // Import textContent

export default class Component_2 extends Component {
  render() {
    const { title, subtitle, content, buttonText } = textContent.section1;
    const sections = textContent.section2;

    return (
      <div className="wrapper row3">
        <main className="hoc container clear">
          <article className="one_third first">
            <header>
              <p className="nospace btmspace-10 font-xs uppercase">{title}</p>
              <h2 className="font-x2">{subtitle}</h2>
            </header>
            <p className="btmspace-30">{content}</p>
            <footer>
              <Link to="/your-link-here" className="btn small">
                {buttonText}
              </Link>
            </footer>
          </article>
          <div className="two_third">
            <ul className="nospace group services">
              {sections.map((section, index) => (
                <li className={`one_half ${index % 2 === 0 ? 'first' : ''} btmspace-30`} key={index}>
                  <article>
                    <Link to="/your-link-here"><i className={`fa ${section.icon}`}></i></Link>
                    <h6 className="heading">{section.heading}</h6>
                    <p>{section.content}</p>
                    <footer>
                      <Link to={section.detailsLink}>View Details &raquo;</Link>
                    </footer>
                  </article>
                </li>
              ))}
            </ul>
          </div>
          <div className="clear"></div>
        </main>
      </div>
    );
  }
}
