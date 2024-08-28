import React from 'react';
import Navbar from './navbar';
import './headerandnav.css'

const Header: React.FC  = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[9999] pointer-events-none">
      <header className="container mx-auto pt-12 flex items-center justify-between duration-300 ease-in-out scrolled">
        <a href="/" className="pointer-events-auto " id="logo-wrapper">
          <div className="kracht-logo">
            <div className="kracht-eye ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="203"
              height="67"
              fill="none"
              viewBox="20 15 203 67"
              
            >
              <g id="frame logo">
                <path fill="#none" d="M0 0H203V67H0z"></path>
                <g id="logo text" fill="#000">
                  <path
                    id="ch-t"
                    fill="white"
                    d="M153.438 24.182l-.753 4.545h-13.153l.767-4.545h13.139zm-9.304-5.227h6.051l-3.38 20.34c-.095.56-.081.995.042 1.307.123.303.327.516.611.64.294.123.644.184 1.051.184.284 0 .573-.023.867-.07.293-.058.516-.1.667-.129l.227 4.503c-.34.104-.8.218-1.377.341a11.67 11.67 0 01-2.017.227c-1.478.057-2.728-.137-3.75-.582-1.023-.455-1.757-1.15-2.202-2.088-.445-.938-.54-2.117-.284-3.537l3.494-21.137z"
                  ></path>
                  <path
                    id="ch-c"
                    fill="white"
                    d="M122.121 46.426c-2.244 0-4.091-.473-5.54-1.42-1.439-.957-2.448-2.282-3.025-3.978-.568-1.695-.668-3.645-.298-5.852.359-2.235 1.112-4.195 2.258-5.88 1.146-1.696 2.599-3.017 4.361-3.964 1.771-.956 3.759-1.434 5.966-1.434 1.903 0 3.513.345 4.829 1.037 1.317.69 2.282 1.662 2.898 2.912.616 1.25.824 2.717.625 4.403h-5.696c.009-1.08-.27-1.956-.838-2.628-.568-.672-1.402-1.008-2.5-1.008a4.74 4.74 0 00-2.614.767c-.786.502-1.453 1.235-2.003 2.201-.539.966-.918 2.136-1.136 3.509-.227 1.392-.232 2.576-.014 3.551.218.975.634 1.719 1.25 2.23.615.511 1.392.767 2.329.767.701 0 1.35-.142 1.946-.426a4.63 4.63 0 001.591-1.236c.455-.549.805-1.207 1.052-1.974h5.71c-.389 1.676-1.094 3.144-2.117 4.403-1.013 1.26-2.287 2.245-3.821 2.955-1.534.71-3.272 1.065-5.213 1.065z"
                  ></path>
                  <path
                    id="ch-a"
                    fill="white"
                    d="M92.882 46.412c-1.383 0-2.58-.242-3.594-.724-1.004-.493-1.742-1.222-2.216-2.188-.474-.966-.592-2.164-.355-3.594.208-1.212.601-2.225 1.179-3.04a7.033 7.033 0 012.145-1.988 10.665 10.665 0 012.798-1.15 19.579 19.579 0 013.196-.54 65.72 65.72 0 003.097-.384c.805-.123 1.406-.298 1.804-.526a1.48 1.48 0 00.724-1.05v-.086c.142-.89-.024-1.581-.497-2.074-.464-.502-1.207-.753-2.23-.753-1.08 0-1.998.237-2.756.71-.748.474-1.283 1.075-1.605 1.805l-5.511-.455a9.187 9.187 0 012.23-3.438c1.004-.975 2.21-1.723 3.622-2.244 1.41-.53 2.992-.795 4.744-.795 1.212 0 2.344.142 3.395.426 1.061.284 1.975.724 2.742 1.32a4.994 4.994 0 011.676 2.302c.35.928.421 2.04.213 3.338L105.225 46h-5.738l.511-3.026h-.17a7.886 7.886 0 01-1.705 1.804 8.024 8.024 0 01-2.315 1.208c-.871.284-1.847.426-2.926.426zm2.429-4.176c.88 0 1.69-.175 2.429-.526a5.203 5.203 0 001.846-1.449 4.406 4.406 0 00.938-2.06l.369-2.315c-.189.123-.464.232-.824.327-.35.095-.734.185-1.15.27-.408.076-.82.147-1.236.213-.417.057-.79.114-1.122.17a8.72 8.72 0 00-1.96.498c-.578.227-1.047.535-1.407.923-.36.379-.582.852-.667 1.42-.133.824.061 1.454.582 1.89.53.426 1.264.639 2.202.639z"
                  ></path>
                  <path
                    id="ch-r"
                    fill="white"
                    d="M68.575 46l3.636-21.818h5.867l-.64 3.807h.228c.625-1.355 1.463-2.377 2.514-3.069 1.06-.7 2.201-1.05 3.423-1.05.303 0 .62.018.952.056.34.029.644.076.909.142l-.91 5.384c-.264-.095-.643-.17-1.136-.228-.483-.066-.942-.099-1.377-.099-.881 0-1.7.194-2.458.582a5.457 5.457 0 00-1.917 1.591 5.5 5.5 0 00-1.009 2.358L74.626 46h-6.051z"
                  ></path>
                  <path
                    id="ch-k"
                    fill="white"
                    d="M38.71 46l4.83-29.09h6.15l-2.116 12.826h.383l12.586-12.827h7.372L55.003 29.935 63.213 46h-7.358l-5.937-11.96-3.665 3.721L44.86 46h-6.15z"
                  ></path>
                </g>
              </g>
            </svg>
            </div>
          </div>
        </a>
        <div className="fixed bottom-0 right-0 z-[9999] pb-7 pr-8 xl:pb-14 xl:pr-16 pointer-events-none">
          <a href="#" className="pointer-events-auto button-border group">
            <span className="label button-label">Request Access</span>
            <span className="button-border__arrow-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 30 10"
                fill="white"
                className="button-border__arrow"
              >
                <path
                  d="M29.81 5.36a.53.53 0 0 1-.14.19l-4.05 4.06a.63.63 0 0 1-.88 0 .63.63 0 0 1 0-.88l2.95-2.95H.63a.62.62 0 1 1 0-1.25h27.06l-2.95-2.95a.63.63 0 0 1 0-.88.62.62 0 0 1 .88 0l4.05 4.05c.05.05.09.12.12.19a.62.62 0 0 1 .02.25.58.58 0 0 1-.02.24z"
                  fill="white"
                />
              </svg>
            </span>
          </a>
        </div>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
