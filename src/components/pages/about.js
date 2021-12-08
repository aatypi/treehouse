import React from "react";
import { CardRoll } from "../shared/CardRoll";
import IconBar from "../shared/IconBar";
import { PropertyInformation } from "../shared/PropertyInformation";

export function About() {
  const title = "hej";
  const text = "japp";

  return (
    <>
      <section className="max-width">
        <h1>About </h1>
        <CardRoll />
      </section>
      <IconBar />
      <PropertyInformation></PropertyInformation>
    </>
  );
}
