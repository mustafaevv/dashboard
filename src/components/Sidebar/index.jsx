import React from "react";

import { Logo } from "../../images/svgLogos";

import classes from "./Sidebar.module.scss";
import links from "../../routes";

const index = () => {
  return (
    <div className={classes["sidebar"]}>
      <div className={classes["sidebar__top"]}>
        <Logo />
        <p className={classes["sidebar__top-logo"]}>Dabang</p>
      </div>
      <ul className={classes["sidebar__list"]}>
        {links.map((item, index) => (
          <li key={index}>
            <a className={classes["sidebar__link"]} href={item.path}>
              {item.icon} {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
