import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"
import { IconContext } from "react-icons"
import { ImStack } from "react-icons/im"
import { MdOutlineMonitor } from "react-icons/md"
import { TbBriefcase } from "react-icons/tb"
import { AiOutlineMessage } from "react-icons/ai"
import * as styles from "./Navigation.module.sass"

const links = [
  {
    name: "skills",
    icon: <ImStack />,
  },
  {
    name: "projects",
    icon: <MdOutlineMonitor />,
  },
  {
    name: "experience",
    icon: <TbBriefcase />,
  },
  {
    name: "contact",
    icon: <AiOutlineMessage />,
  },
]

export default function Navigation() {
  return (
    <Fade left>
      <nav
        className={`d-flex justify-content-evenly align-items-center glass ${styles.nav} 
      `}
      >
        <a href="#hero">
          <StaticImage
            src="../../../images/brand/logo.svg"
            width={30}
            alt="logo"
          />
        </a>
        <IconContext.Provider
          value={{
            size: "1.3em",
          }}
        >
          {links.map((link) => (
            <a
              className="text-center text-decoration-none"
              href={`#${link.name}`}
              key={link.name}
            >
              <span className={styles.navLink}>{link.icon}</span>
              <small
                className="mt-2 icon-label"
                style={{ color: "var(--icons-color)" }}
              >
                {link.name.toUpperCase()}
              </small>
            </a>
          ))}
        </IconContext.Provider>
      </nav>
    </Fade>
  )
}
