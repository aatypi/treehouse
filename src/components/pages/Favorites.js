import React from "react";
import { Card } from "../shared/CardRoll";

export function Favorites() {
  return (
    <section className="max-width">
      <h1>Favorites </h1>
      <section className="card-roll">
        <Card
          name="Home 1"
          wifi={true}
          fireAlarm={true}
          highSecurity={true}
          reviews={10}
          stars={5}
          liked
        />
        <Card
          name="Home wedw"
          wifi={true}
          fireAlarm={true}
          highSecurity={true}
          reviews={10}
          stars={5}
          liked
        />
        <Card
          name="Homcfd"
          wifi={true}
          fireAlarm={true}
          highSecurity={true}
          reviews={10}
          stars={5}
          liked
        />
      </section>
    </section>
  );
}
