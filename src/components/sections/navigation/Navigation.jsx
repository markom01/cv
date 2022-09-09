import React from "react";
import Fade from "react-reveal/Fade";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Navigation.module.sass";
import Icon from "../../blocks/myBlocks/Icon";

const links = [
  {
    name: "skills",
    class: "stack",
  },
  {
    name: "projects",
    class: "display-fill",
  },
  {
    name: "experience",
    class: "briefcase-fill",
  },
  {
    name: "contact",
    class: "chat-dots-fill",
  },
];

export default function Navigation() {
  return (
    <nav
      className={`d-flex justify-content-evenly align-items-center glass ${styles.nav}  
      `}
      id="nav"
    >
      <a
        className={`text-center text-decoration-none py-1 px-2 w-100`}
        href={`#hero`}
      >
        <span
          className={`d-flex align-items-center justify-content-center`}
          style={{ color: "var(--icons-color)" }}
        >
          <StaticImage
            src="../../../images/brand/Logo.svg"
            style={{ width: "2rem", marginBlockStart: "0.5rem" }}
            alt="logo"
            className={styles.logo}
          />
        </span>
      </a>
      {links.map((link) => (
        <a
          className={`text-center text-decoration-none py-1 px-2 w-100`}
          href={`#${link.name}`}
          key={link.name}
        >
          <span
            className={`d-flex align-items-center justify-content-center`}
            style={{ color: "var(--icons-color)" }}
          >
            <Icon name={link.class} />
          </span>
          <small
            className="d-none d-sm-block my-2 icon-label"
            style={{ color: "var(--icons-color)" }}
          >
            {link.name.toUpperCase()}
          </small>
        </a>
      ))}
    </nav>
  );
}
