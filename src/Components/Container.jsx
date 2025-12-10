import React from "react";

const Container = ({ children, className, ref }) => {
  return (
    <div
      ref={ref}
      className={`container mx-auto max-w-[1440px] px-3  relative text-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
