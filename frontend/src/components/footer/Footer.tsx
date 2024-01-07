import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          {/* completed at year so it update */}©{new Date().getFullYear()}{" "}
          <span>Created By WIlfy</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;