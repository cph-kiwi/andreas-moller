import React from "react";
import "./styles.css";
import { GithubIcon, MailIcon, TwitterIcon, LinkedInIcon } from "./Icons";
import { GuestBook } from "./GuestBook";

export default function App() {
  return (
    <div className="App">
      <a href="#top" id="top" />
      <div className="intro-section">
        <div className="intro-subsection-1">
          <img
            src="https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/andreas-intro-pic.jpg"
            alt="A laptop in darkness with a colored screen lit up, semi closed."
          />{" "}
          <div className="intro-subsection-2">
            <h1 className="intro-h1">Hi, I'm Andreas</h1>
            <h2 className="intro-h2">
              My wife is totally awesome.{" "}
              <a href="https://cph.kiwi/">Hire her!</a>
            </h2>
            <a className="intro-link-to-guest-book" href="#guest-book">
              Say Hello
            </a>
          </div>
        </div>
      </div>
      <header className="main-header">
        <div className="main-header-logo">
          <a href="#top" className="hide">
            A.
          </a>
        </div>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a href="#guest-book">Guest book</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="https://youtu.be/dQw4w9WgXcQ">Rick</a>
            </li>
          </ul>
        </nav>
      </header>
      <GuestBook />
      <div className="contact-section" id="contact">
        <div className="contact-subsection-1">
          <h1 className="contact-h1">Andreas Møller</h1>
          <div className="contact-subsection-2">
            <a href="mailto:andreas.moller@gmail.com">
              <MailIcon />
            </a>
            <a href="https://github.com/cullophid">
              <GithubIcon />
            </a>
            <a href="https://twitter.com/cullophid?lang=en">
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com/in/andreas-m%C3%B8ller-bbb1a14/?originalSubdomain=dk">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="footer-p">
          Handcrafted with care by <a href="https://cph.kiwi/">Beth Jackson</a>.
        </p>
      </div>
    </div>
  );
}
