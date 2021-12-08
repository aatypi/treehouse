import React from "react";
import { Card } from "../shared/CardRoll";
import icon from "../../images/BIGBEN.svg";

export function Help() {
  return (
    <>
      <section className="max-width-about" id="Help">
        <h1 className="help-h1">Help guide</h1>
        <h2 className="help-h2">Step 1</h2>
        <div className="help-info">
          <div>hej</div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, neque pariatur exercitationem quaerat atque nostrum
            tempore mollitia ratione voluptates laborum.
          </p>
        </div>
      </section>
      <section className="help" id="London">
        <h2 className="help-h2">Step 2</h2>
        <div className="help-info">
          <div>hej</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius
            distinctio aliquam adipisci autem excepturi, placeat ipsum id maxime
            repellat, explicabo nam voluptates dignissimos? In reprehenderit
            pariatur dolore esse numquam.
          </p>
        </div>
      </section>
    </>
  );
}
