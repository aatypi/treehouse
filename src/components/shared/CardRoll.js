import React from "react";
import {
  FaWifi,
  FaBell,
  FaEye,
  FaStar,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import treehouse from "../../images/mateusz-buda-hBZkGJZHEXU-unsplash.jpg";

export class Card extends React.Component {
  // defines the card as in a state of not liked
  state = {
    liked: this.props.liked,
  };

  handleLike() {
    this.setState({ liked: !this.state.liked });
  }
  //getStar creates array, the for loop adds stars until index is bigger than total
  // push adds to array
  getStars(total) {
    let stars = [];

    for (let index = 0; index < total; index++) {
      stars.push(<FaStar />);
    }

    return stars;
  }

  render() {
    const totalStars = this.getStars(5);
    const awardedStars = this.getStars(this.props.stars);

    return (
      <div className="card">
        <div className="like-container" onClick={() => this.handleLike()}>
          {this.state.liked ? <FaHeart /> : <FaRegHeart />}
        </div>
        <img src={treehouse} alt="treehouse" width={100} />
        <div className="card-inner">
          {
            // To show the amount of stars the property has.
            // First creates total max of stars, second real amount of stars. Displayed with css-styling
            // map goes through every star in array, and display it in the DOM
          }
          <div className="stars-container">
            <div className="stars total">
              {totalStars.map((star) => {
                return star;
              })}
            </div>
            <div className="stars real">{awardedStars.map((star) => star)}</div>
          </div>

          <div className="review-container">{this.props.reviews} reviews</div>

          <h1> {this.props.name}</h1>
          {
            //Creates the facilities icons for the property based on the props
          }
          <section>
            <h2>Facilities</h2>
            {this.props.wifi === true && (
              <span>
                <FaWifi /> Free Wi-Fi
              </span>
            )}
            {this.props.wifi === true && (
              <span>
                <FaBell /> Fire alarm
              </span>
            )}
            {this.props.highSecurity === true && (
              <span>
                <FaEye /> High security
              </span>
            )}
          </section>
        </div>
      </div>
    );
  }
}

// Cardroll implements the card prototype, containing the facility and star props
export function CardRoll() {
  return (
    <section className="card-roll">
      <Card
        name="Home 1"
        wifi={true}
        fireAlarm={true}
        highSecurity={true}
        reviews={10}
        stars={5}
      />
      <Card
        name="Home 2"
        wifi={false}
        fireAlarm={false}
        highSecurity={false}
        reviews={0}
        stars={0}
        liked
      />
      <Card
        name="Home 3"
        wifi={false}
        fireAlarm={false}
        highSecurity={true}
        reviews={1}
        stars={1}
      />
    </section>
  );
}
