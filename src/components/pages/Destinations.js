import React from "react";
import IconBar from "../shared/IconBar";
import { Card } from "../shared/CardRoll";
import icon from "../../images/BIGBEN.svg";

export function Destinations() {
  return (
    <>
      <section className="max-width">
        <h1>Destinations</h1>
      </section>
      <IconBar />

      <section className="destination" id="Paris">
        <div className="destination-info">
          <h1>PARIS</h1>
          <div className="icon">
            <img src={icon} alt="" width={75} height={75} />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, neque pariatur exercitationem quaerat atque nostrum
            tempore mollitia ratione voluptates laborum.
          </p>
        </div>
        <div className="destination-cards">
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
            name="Home 1"
            wifi={true}
            fireAlarm={true}
            highSecurity={true}
            reviews={10}
            stars={5}
            liked
          />
        </div>
      </section>

      <section className="destination" id="London">
        <div className="destination-info">
          <h1>London</h1>
          <div className="icon">
            <img src={icon} alt="" width={75} height={75} />
          </div>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius distinctio aliquam adipisci autem excepturi, placeat ipsum id maxime repellat, explicabo nam voluptates dignissimos? In reprehenderit pariatur dolore esse numquam.
          </p>
        </div>
        <div className="destination-cards">
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
            name="Home 1"
            wifi={true}
            fireAlarm={true}
            highSecurity={true}
            reviews={10}
            stars={5}
            liked
          />
        </div>
      </section>
    </>
  );
}
