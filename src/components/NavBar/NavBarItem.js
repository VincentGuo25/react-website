import React from "react";
import { Link } from "react-router-dom";

export default function NavBarCard(props) {
  return (
    <li className="nav-item">
      <Link to={props.to} className={props.className} onClick={props.onClick}>
        {props.title}
      </Link>
    </li>
  );
}
