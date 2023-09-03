import React from "react";
import "../footer/footer.css";
import facebook from "../assests/facebook.png";
import twitter from "../assests/twitter.png";
import instagram from "../assests/instagram.png";
import linkedin from "../assests/linkedin.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding"></div>
      <div className="sb_footer-links">
        <div className="sb_footer-links-div">
          <h4>Contact us</h4>
          <a href="thestaggedgigs@gmail.com">gmail </a>
          <a href="https://www.axisbank.com/careers">carriers page </a>
          <a href="landline">landline</a>
        </div>
        <div className="sb_footer-links-div " style={{ fontSize: "60" }}>
          <h4>Know us More on</h4>
          <div
            className="Social media"
            style={{
              display: "flex",
              flexDirection: "row",
              mixBlendMode: "color-dodge",
            }}
          >
            <p>
              <img
                src={facebook}
                href="https://www.facebook.com/"
                style={{ height: "40px", margin: "10px" }}
                alt="facebook"
              />
            </p>
            <p>
              <img
                src={twitter}
                style={{ height: "40px", margin: "10px" }}
                alt=""
              />
            </p>
            <p>
              <img
                src={instagram}
                style={{ height: "40px", margin: "10px" }}
                alt=""
              />
            </p>
            <p>
              <img
                src={linkedin}
                style={{ height: "40px", margin: "10px" }}
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
