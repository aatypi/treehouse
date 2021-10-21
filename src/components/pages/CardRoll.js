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

class Card extends React.Component {
  state = {
    liked: false,
  };

  handleLike() {
    this.setState({ liked: !this.state.liked });
  }

  getStars(total) {
    let stars = [];

    for (let index = 0; index < total; index++) {
      stars.push(<FaStar />);
    }

    return stars;
  }

  render() {

    const totalStars = this.getStars(5)
    const awardedStars = this.getStars(this.props.stars);

    return (
      <div className="card">
        <div className="like-container" onClick={() => this.handleLike()}>
          {this.state.liked ? <FaHeart /> : <FaRegHeart />}
        </div>
        <img src={treehouse} alt="treehouse" width={100} />
        <div className="card-inner">
          <div className="stars-container">
            <div className="stars total">
              {totalStars.map((star) => star)}
            </div>
            <div className="stars real">
              {awardedStars.map((star) => star)}
            </div>
          </div>
          {this.props.name && <h1> {this.props.name}</h1>}
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

export function CardRoll() {
  return (
    <section className="card-roll">
      <Card
        name="Home 1"
        wifi={true}
        fireAlarm={true}
        highSecurity={true}
        stars={5}
      />
      <Card
        name="Home 2"
        wifi={false}
        fireAlarm={false}
        highSecurity={false}
        stars={0}
      />
      <Card
        name="Home 3"
        wifi={false}
        fireAlarm={false}
        highSecurity={true}
        stars={1}
      />
    </section>
  );
}
