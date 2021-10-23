import React from "react";
import IconBar from "../shared/IconBar";

export function Destinations() {
  return (
    <>
      <section className="max-width">
        <h1>Destinations</h1>
      </section>
      <IconBar />

      <section className="destination" id="Paris">
        <h1>PARIS</h1>
      </section>

      <section className="destination" id="London">
        <h1>LONDON</h1>
      </section>
    </>
  );
}
