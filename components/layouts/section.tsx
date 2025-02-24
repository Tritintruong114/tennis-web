import React from "react";
import cx from "clsx";
type SectionProps = {
  children: React.ReactNode;
  className?: string; // Cho phép nhận class tùy chỉnh
};

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={cx("sm:py-32 py-24", className)}>{children}</section>
  );
};

export default Section;
