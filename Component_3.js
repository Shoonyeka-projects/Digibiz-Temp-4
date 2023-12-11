import React, { Component } from 'react';
import textContent from '../json/Comp_3.json'; // Import textContent

export default class Component_3 extends Component {
  render() {
    const { articles, boxContent } = textContent;

    return (
      <div className="wrapper">
        <div className="split clear" style={{ backgroundImage: "url('images/demo/backgrounds/01.png')" }}>
          <div className="box">
            <div className="group right">
              {articles.map((article, index) => (
                <article className="btmspace-50" key={index}>
                  <h4 className="font-x1"><a href="#">{article.title}</a></h4>
                  <p className="nospace">{article.content}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="box transparent">
            <article className="inspace-50">
              <h4 className="font-x3">{boxContent.mainTitle}</h4>
              <p className="btmspace-30">{boxContent.mainContent}</p>
              <footer><a className="btn medium" href="#">{boxContent.buttonText}</a></footer>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
