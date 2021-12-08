import React from "react";
import treehouse from "../../images/mateusz-buda-hBZkGJZHEXU-unsplash.jpg";
import {
  FaWifi,
  FaBell,
  FaEye,
  FaStar,
  FaHeart,
  FaUserFriends,
} from "react-icons/fa";

import DatePickers from "../shared/DatePicker";
import BookBox from "../shared/BookBox";

function getStars(total) {
  let stars = [];

  for (let index = 0; index < total; index++) {
    stars.push(<FaStar />);
  }

  return stars;
}

export function Hotel() {
  const totalStars = getStars(5);
  const awardedStars = getStars(5);

  return (
    <>
      <div className="title-container">
        <h1>Hotel Destination 1 </h1>
        <div>
          <div className="stars-container">
            <div className="stars total">
              {totalStars.map((star) => {
                return star;
              })}
            </div>
            <div className="stars real">{awardedStars.map((star) => star)}</div>
          </div>
          <div className="review-container">100 reviews</div>
        </div>
      </div>
      <div className="image-stripe"></div>
      <section className="hotel-description">
        <div className="description-box">
          <h2> A beautiful hotel</h2>
          <FaHeart /> Mark as favorite
          <div className="searchbar">
            <div className="searchbar-inner">
              <span>
                <FaWifi /> Free Wi-Fi
              </span>
              <span>
                <FaBell /> Fire alarm
              </span>
              <span>
                <FaEye /> High security
              </span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
            culpa beatae. Et tenetur iusto earum incidunt rerum voluptatum
            molestias ipsam reprehenderit neque saepe necessitatibus soluta
            porro eligendi, eveniet officiis dolore impedit, tempore rem
            consequuntur cumque. Necessitatibus repellat laborum voluptatem
            nobis, et voluptates officiis dignissimos. Quasi eligendi sapiente
            beatae nostrum cupiditate omnis rerum laboriosam praesentium et
            nihil! Deserunt nobis et nihil voluptas laboriosam. Quo ducimus
            necessitatibus a nam, reiciendis quam iusto porro! Aliquam alias,
            ducimus qui dicta illum iste quia dolor vero provident laborum
            repudiandae neque distinctio consequatur nobis quam fugiat repellat
            quasi fugit. Assumenda nisi vitae, asperiores ut doloribus enim?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            nostrum quos odit blanditiis dolore rerum! Accusamus et cumque quos!
            Itaque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            id maxime fugiat eligendi cum, nulla ducimus amet provident repellat
            consectetur fugit ipsum excepturi ratione. Tempora dolor ducimus
            officiis error ab, sapiente doloremque hic nobis? Aspernatur alias
            distinctio ratione quae earum sed quo repellat nihil adipisci
            voluptatem sit accusamus magni consequuntur aperiam soluta eius
            saepe repellendus deserunt nam, quas nobis veritatis ab, rem
            architecto? Exercitationem velit vel distinctio dicta repellendus
            reprehenderit, ab fugiat consequuntur veritatis soluta eaque a nihil
            tempore doloremque.
          </p>
        </div>

        <BookBox />
      </section>
    </>
  );
}
