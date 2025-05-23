import React, { useEffect } from 'react';

function LoadFonts(font) {
useEffect(() => {
  const style = document.createElement('style');
  style.setAttribute('data-font', font.font.title); // Helpful for debugging or future cleanup
  style.textContent = `
    @font-face {
      font-family: '${font.font.title}';
      src: url('/fonts/${font.font.path.split("/")[4]}') format('${font.font.mime.split("/")[1]}');
    }

    .${font.author} {
      font-family: '${font.font.title}';
    }
  `;

  document.head.appendChild(style);

  return () => {
    document.head.removeChild(style);
  };
}, []);



  return null; // This component just injects styles
}

export default LoadFonts;



