import React from 'react';
import './textbutton.css'
import { Link } from 'react-router-dom';
interface TextButtonProps {
  text: string; 
  link: string;
  type?:'submit'
}

const TextButton: React.FC<TextButtonProps> = ({ text, link,type }) => {
  return (
    <div className="button-container">
    <Link to={link} className="button-link" title={`Ontdek ${text}`}>
      <button className="custom-button" type={type}>
        <div className="button-content-wrapper">
          <div className="button-text-wrapper">
            <span className="button-text">{text}</span>
            <span className="button-text button-text-secondary">{text}</span>
          </div>
        </div>
      </button>
    </Link>
  </div>
  );
};

export default TextButton;
