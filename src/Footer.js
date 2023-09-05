import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <footer>
        Coded by:
        <a
          href="https://www.linkedin.com/in/philisizwe-kuzwayo-3116541a8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Philisizwe Kuzwayo
        </a>
        and is
        <a
          href="https://github.com/PKuzi01/sc-react-weather-app-ppk"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
        and
        <a
          href="https://sc-react-weather-app-ppk.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default Footer;