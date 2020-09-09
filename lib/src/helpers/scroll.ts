import React from 'react';

export const scrollToRef = (ref: React.RefObject<any>) => window.scrollTo(0, ref.current.offsetTop);