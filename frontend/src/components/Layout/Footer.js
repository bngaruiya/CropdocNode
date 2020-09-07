import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='left'>
          <div className='inlineBlock'>
            <a
              href='https://www.linkedin.com/in/bngaruiya/?ref=mkr-footer'
              className='block purple-text'
              target='_blank'
              rel='noopener noreferrer'
            >
              About Me
            </a>
          </div>
        </div>
        <div className='right'>
          &copy; {1900 + new Date().getYear()}, by{" "}
          <a
            href='https://www.linkedin.com/in/bngaruiya/?ref=mkr-footer'
            className='purple-text'
            target='_blank'
            rel='noopener noreferrer'
          >
            Cropdoc
          </a>
        </div>
      </div>
    </div>
  );
}
