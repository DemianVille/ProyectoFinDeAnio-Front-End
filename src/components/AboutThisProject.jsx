import React from "react";
import { Link } from "react-router-dom";

export default function AboutThisProject() {
  return (
    <button className="aboutUsBtn py-1 px-2">
      <Link to={"/sobre-este-proyecto"} className="aboutUsLink">
        Sobre este proyecto
      </Link>
    </button>
  );
}
