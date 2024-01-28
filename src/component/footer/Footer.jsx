"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <p className="footerText">&copy;thanthan2024</p>
      <Link href="https://en-gb.facebook.com/" replace prefetch={false}>
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link href="https://www.instagram.com/" replace prefetch={false}>
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
    </div>
  );
};

export default Footer;
