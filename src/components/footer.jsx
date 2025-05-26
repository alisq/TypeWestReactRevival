import React, { forwardRef } from 'react';

const Footer = forwardRef((props, ref) => {
  return (
     <section id="footer" ref={ref}>
      {/* your footer content */}
    </section>
  );
});

export default Footer;