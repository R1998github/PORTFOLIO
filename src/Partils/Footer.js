import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="lionimg">
          <img
            src="/wallpaperflare.com_wallpaper.jpg"
            alt=""
            id="right-lion"
          ></img>
        </div>
        <div className="logo">
          <div className="logos"> 
            <a
              href="https://www.linkedin.com/in/rohit-kafle-3b2354260"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <FaLinkedin />
                linkdin
              </p>{" "}
            </a>

            <p>
              <FaInstagram />
              insta{" "}
            </p>

            <p>
              <FaFacebook />
              facebook
            </p>
          </div>
          <div className="text">
            <h6>Contact Us</h6>
            <h6>Our Services</h6>
            <h6>Privacy Policy</h6>
            <h6>Terms & Conditions</h6>
          </div>
          <div className="copyright">
                <p>
                Portfolio Copyright © 2023  All rights reserved || Designed By: Rohit Kafle
                </p>
          </div>
        </div>
        <div className="lionimg">
          <img
            src="/wallpaperflare.com_wallpaper (1).jpg"
            alt=""
            id="left-lion"
          ></img>
        </div>
      </div>
    </>
  );
}
