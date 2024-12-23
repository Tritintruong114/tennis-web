import React from "react";
import cx from "clsx";
type ContainerProps = {
  children: React.ReactNode;
  className?: string; // Cho phép nhận class tùy chỉnh
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={cx("container", className)}>{children}</div>;
};

export default Container;
