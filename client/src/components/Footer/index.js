import React from "react";
import "./index.css";

const Footer = () => (
  <footer className="sitefooter">
    <div class="container">
      <h6>About</h6>
      <p class="text-justify">
        Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help
        the upcoming programmers with the code. Scanfcode focuses on providing
        the most efficient code or snippets as the code wants to be simple. We
        will help programmers build up concepts in different programming
        languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript,
        PHP, Android, SQL and Algorithm.
      </p>
    </div>

    <h6>Quick Links</h6>
    <ul>
      <li id="links">
        <a href="http://scanfcode.com/about/">About Us</a>
      </li>
      <li>
        <a href="http://scanfcode.com/contact/">Contact Us</a>
      </li>
      <li>
        <a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a>
      </li>
      <li>
        <a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a>
      </li>
      <li>
        <a href="http://scanfcode.com/sitemap/">Sitemap</a>
      </li>
    </ul>

    <p id="copyright">Copyright &copy; 2021 All Rights Reserved by LYBL</p>
  </footer>
);

export default Footer;
