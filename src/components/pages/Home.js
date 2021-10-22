import React from "react";
import { CardRoll } from "../shared/CardRoll";
import SearchBar from "../shared/SearchBar";

export function Home() {
  return (
    <>
      <SearchBar />
      <section className="white-stripe">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni fuga
        quas aliquid veniam quis doloribus blanditiis eligendi voluptate
        consequuntur natus.
      </section>

      <section className="max-width">
        <h2>Our most popular choices</h2>

        <CardRoll />
      </section>
    </>
  );
}
