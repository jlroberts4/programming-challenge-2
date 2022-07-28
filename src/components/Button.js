import React from "react";
import { Link } from "react-router-dom";

function Button({ label, linkTo, disabled }) {
   return <Link to={`/${linkTo}`} className={`button${disabled ? ' disabled-button' : ''}`} disabled={disabled}>{label}</Link>
}

export default Button;