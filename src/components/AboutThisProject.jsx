import React from "react";
import { Link } from "react-router-dom";

export default function AboutThisProject() {
  return (
    <Link to={"/sobre-este-proyecto"} className="aboutUsLink">
      <button className="aboutUsBtn py-1 px-2">Sobre este proyecto</button>
    </Link>
  );
}
