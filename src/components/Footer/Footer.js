import "./footer.css";
import Github from "../images/github.svg";
import Twitter from "../images/twitter.svg";
import LinkedIn from "../images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="byline"><a href="https://omkararora.netlify.app/" className="link" target="_blank" rel="noreferrer">Omkar Arora</a></div>
      <ul className="list-non-bullet">
        <li className="list-item-inline">
          <a href="https://www.github.com/OmkarArora" className="link" target="_blank" rel="noreferrer">
            <img src={Github} className="social-icon" alt="github link" />
          </a>
        </li>
        <li className="list-item-inline">
          <a href="https://www.twitter.com/OmkarArora" className="link" target="_blank" rel="noreferrer">
            <img src={Twitter} className="social-icon" alt="twitter link"/>
          </a>
        </li>
        <li className="list-item-inline">
          <a
            href="https://www.linkedin.com/in/omkar-arora-0ab08375/"
            className="link" target="_blank" rel="noreferrer"
          >
            <img src={LinkedIn} className="social-icon" alt="linkedin link"/>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
