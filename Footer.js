import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="wrapper row4">
          <footer id="footer" class="hoc clear">
            <div class="one_quarter first">
              <h6 class="title">Phasellus aenean</h6>
              <address class="btmspace-15">
                Company Name<br />
                Street Name &amp; Number<br />
                Town<br />
                Postcode/Zip
              </address>
              <ul class="nospace">
                <li><i class="fa fa-phone"></i> +00 (123) 456 7890</li>
                <li><i class="fa fa-envelope-o"></i> info@domain.com</li>
              </ul>
            </div>
            <div class="one_quarter">
              <h6 class="title">Imperdiet aliquam</h6>
              <article>
                <h2 class="nospace font-x1"><Link to="#">Neque porta elit</Link></h2>
                <time class="font-xs" dateTime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
                <p>Dignissim tellus vitae posuere laoreet dui nulla pulvinar dolor at ultricies lectus orci aliquam ipsum vestibulum at.</p>
              </article>
            </div>
            <div class="one_quarter">
              <h6 class="title">Iaculis mauris</h6>
              <ul class="nospace linklist">
                <li><Link to="#">Consectetur commodo orci</Link></li>
                <li><Link to="#">Vitae tempus maecenas</Link></li>
                <li><Link to="#">Feugiat eget nisi vel</Link></li>
                <li><Link to="#">Scelerisque fusce suscipit</Link></li>
                <li><Link to="#">At sodales facilisis vivamus</Link></li>
              </ul>
            </div>
            <div class="one_quarter">
              <h6 class="title">Quis auctor nulla</h6>
              <p>Risus vivamus consectetur neque augue eu tincidunt urna varius nec phasellus.</p>
              <p>Dapibus rutrum interdum nullam commodo lacus sed neque porttitor.</p>
            </div>
          </footer>
        </div>
        <div class="wrapper row5">
          <div id="copyright" class="hoc clear">
            <p class="fl_left">Copyright &copy; 2015 - All Rights Reserved - <Link to="#">Domain Name</Link></p>
            <p class="fl_right">Template by <a target="_blank" href="http://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
          </div>
        </div>
        <a id="backtotop" href="#top"><i class="fa fa-chevron-up"></i></a>
      </div>
    );
  }
}
