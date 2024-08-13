import React from 'react';

interface TextButtonProps {
  text: string; // The text to display in the button
  link: string; // The URL to navigate to
}

const TextButton: React.FC<TextButtonProps> = ({ text, link }) => {
  return (
    <div className="visibleContent relative animate-cta mt-2 col-start-2 col-span-3 pointer-events-auto">
      <div className="mt-5">
        <a
          href={link}
          className="nuxt-link-prefetched"
          title={`Ontdek ${text}`}
        >
          <button
            className="cursorPlus group !text-white py-4 px-10 rounded-full overflow-hidden w-full lg:w-auto"
            style={{ backgroundColor: '#dc1f5b' }}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col h-auto lg:group-hover:-translate-y-8 transition duration-500 ease-in-out">
                <span className="whitespace-nowrap pt-2">
                  {text}
                </span>
                <span className="left-0 bottom-0 m-auto translate-y-4 text-center w-full whitespace-nowrap">
                  {text}
                </span>
              </div>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default TextButton;
