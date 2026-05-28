import React from 'react';

function Footer() {
  return (
    <div className="text-center w-full py-10 border-t border-gray-100 bg-gray-50">
      <p className="text-gray-500 text-sm">
        Designed & built by{' '}
        <a
          className="text-indigo-600 hover:underline font-medium"
          href="https://www.linkedin.com/in/lia-yoonseo-jang-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lia Yoonseo Jang
        </a>
      </p>
      <p className="text-gray-400 text-xs mt-1">lia010911@gmail.com</p>
    </div>
  );
}

export default Footer;
