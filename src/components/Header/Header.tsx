import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import borderPattern from "../../assets/header-border.png";
import { Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Project", to: "/projects" },
    { label: "Art", to: "/art" },
    { label: "Blog", to: "/blog" },
    { label: "Document", to: "/documentation" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <a href="/" className={styles.logoLink} aria-label="Mari Hirota Home">
          <img src={logo} alt="Mari Hirota logo" className={styles.logo} />
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            
            {navItems.map((item) => (
            <li key={item.to}>
                <NavLink
                to={item.to}
                className={({ isActive }) =>
                    `${styles.navLink} ${
                    isActive ? styles.activeLink : ""
                    }`
                }
                >
                {({ isActive }) => (
                    <>
                    {isActive && (
                        <span className={styles.activeFlower}>
                        ✿
                        </span>
                    )}
                    {item.label}
                    </>
                )}
                </NavLink>
            </li>
            ))}

          </ul>
        </nav>

        <a href="#contact" className={styles.contactButton}>
          <span>Contact</span>
          <Mail size={18} strokeWidth={2.2} />
        </a>
      </div>

      <div
        className={styles.patternStrip}
        style={{ backgroundImage: `url(${borderPattern})` }}
        aria-hidden="true"
      />
    </header>
  );
}