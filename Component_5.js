import React, { Component } from 'react';
import textContent from '../json/Comp_5.json'; // Import textContent

export default class Component_5 extends Component {
  render() {
    const { sectionTitle, articles, viewMoreText } = textContent;

    return (
      <div className="wrapper">
        <div className="split clear light" style={{ backgroundImage: "url('images/demo/backgrounds/01.png')" }}>
          <section className="box center">
            <h2 className="btmspace-50">{sectionTitle}</h2>
            <ul className="nospace">
              {articles.map((article, index) => (
                <li className="btmspace-30" key={index}>
                  <article>
                    <h4 className="font-x1 nospace">
                      <a href="#">{article.title}</a>
                    </h4>
                    <time className="font-xs" dateTime="2045-04-06">{article.date}</time>
                  </article>
                </li>
              ))}
            </ul>
            <p className="nospace">
              <a href="#">{viewMoreText}</a>
            </p>
          </section>
        </div>
      </div>
    );
  }
}
