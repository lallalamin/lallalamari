
import { Link } from "react-router-dom";
import { Mail, ArrowUp } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import styles from "./Footer.module.css";

import layer1 from "../../assets/Layer1Footer.png";
import layer2 from "../../assets/Layer2Footer.png";
import layer3 from "../../assets/Layer3Footer.png";
import layer4 from "../../assets/Layer4Footer.png";
import logo from "../../assets/logo.png";

const siteLinks = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Art", to: "/art" },
  { label: "Blog", to: "/blog" },
  { label: "Docs", to: "/documentation" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Keep the four hills aligned */}
      <div className={styles.landscape} aria-hidden="true">
        <img src={layer1} className={styles.layer1} alt="" />
        <img src={layer2} className={styles.layer2} alt="" />
        <img src={layer3} className={styles.layer3} alt="" />
        <img src={layer4} className={styles.layer4} alt="" />
      </div>

      <div className={styles.content}>
        <div className={styles.mainRow}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" aria-label="Home">
              <img src={logo} alt="Mari Hirota" />
            </Link>
            <p>
              Creative coding, illustrations,
              <br />
              and little things for the web.
            </p>
          </div>

          {/* Navigation */}
          <nav className={styles.navigation} aria-label="Footer navigation">
            <h2>Explore</h2>
            <div className={styles.linkGrid}>
              {siteLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Social media icons */}
          <div className={styles.socialSection}>
            <h2>Find me</h2>
            <div className={styles.socialIcons}>
              <a
                href="https://instagram.com/"
                aria-label="Instagram"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://github.com/"
                aria-label="GitHub"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                aria-label="LinkedIn"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://youtube.com/"
                aria-label="YouTube"
                title="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                title="Email"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} Mari Hirota.
            All rights reserved.
          </span>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Back to top <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
