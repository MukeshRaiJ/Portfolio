// components/ui/scroll-area.jsx

import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const ScrollArea = ({ children, style, ...props }) => {
  return (
    <Scrollbars style={{ width: '100%', height: '100%', ...style }} {...props}>
      {children}
    </Scrollbars>
  );
};

export default ScrollArea;
