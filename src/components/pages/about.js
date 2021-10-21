import React from "react";
import { PropertyInformation } from "../shared/PropertyInformation";

export function About() {
  const title = "hej";
  const text = "japp";

  return (
    <section className="max-width">
      <h1>About </h1>
      <PropertyInformation></PropertyInformation>
    </section>
  );
}
