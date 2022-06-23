import React from "react";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-dark ms-2" href="https://github.com/liridonloku">
          Liridon Loku
        </a>
      </div>
    </footer>
  );
};

export default Footer;
