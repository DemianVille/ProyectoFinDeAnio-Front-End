import React from "react";
import { Link } from "react-router-dom";

export default function AboutThisProject() {
  return (
    <Link to={"/sobre-este-proyecto"} className="aboutUsLink">
      <button className="aboutUsBtn py-2 px-3">Sobre este proyecto</button>
    </Link>
  );
}
