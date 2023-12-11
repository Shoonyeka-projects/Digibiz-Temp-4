import React, { Component } from 'react';
import textContent from '../json/Comp_4.json'; // Import textContent

export default class Component_4 extends Component {
  render() {
    const { articles } = textContent;

    return (
      <div className="wrapper row3">
        <div className="clear posts">
          {articles.map((article, index) => (
            <article className={`one_quarter nospace${index === 0 ? ' first' : ''}`} key={index}>
              <a href="#">
                <img className="btmspace-15" src={article.imageSrc} alt="" />
              </a>
              <div className="inspace-15">
                <h4 className="font-x1">
                  <a href="#">{article.title}</a>
                </h4>
                <p className="nospace">{article.content}</p>
                {article.buttonText && (
                  <footer><a className="btn small" href="#">{article.buttonText}</a></footer>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }
}
