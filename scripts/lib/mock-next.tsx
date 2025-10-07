import React from 'react';

// Mock Next.js Link для серверного рендеринга
export const Link = ({ href, children, className, title, ...props }: any) => {
  return (
    <a href={href} className={className} title={title} {...props}>
      {children}
    </a>
  );
};

// Mock Next.js Image (если понадобится)
export const Image = ({ src, alt, ...props }: any) => {
  return <img src={src} alt={alt} {...props} />;
};

// Регистрируем моки
if (typeof window === 'undefined') {
  // @ts-ignore
  global.Link = Link;
}
