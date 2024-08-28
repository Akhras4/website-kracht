import React from 'react';
import './textbutton.css'
interface TextButtonProps {
  text: string; 
  link: string;
  type?:'submit'
}

const TextButton: React.FC<TextButtonProps> = ({ text, link,type }) => {
  return (
    <div className="button-container">
    <a href={link} className="button-link" title={`Ontdek ${text}`}>
      <button className="custom-button" type={type}>
        <div className="button-content-wrapper">
          <div className="button-text-wrapper">
            <span className="button-text">{text}</span>
            <span className="button-text button-text-secondary">{text}</span>
          </div>
        </div>
      </button>
    </a>
  </div>
  );
};

export default TextButton;
