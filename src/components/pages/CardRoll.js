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

  render() {

    return (
      <div className="card">
        <div className="like-wrapper" onClick={() => this.handleLike()}>
          {this.state.liked ? <FaHeart /> : <FaRegHeart />}
        </div>
        <img src={treehouse} alt="treehouse" width={100} />
        <div className="card-inner">
          <div className="like-container">
            <FaStar />
            {this.props.stars ? this.props.stars : 0}
          </div>
          {this.props.name && <h1> {this.props.name}</h1>}
          <section>
            <h2>Facilities</h2>
            {this.props.wifi && (
              <span>
                <FaWifi /> Free Wi-Fi
              </span>
            )}
            {this.props.wifi && (
              <span>
                <FaBell /> Fire alarm
              </span>
            )}
            {this.props.wifi && (
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
      <Card name="Home 1" wifi fireAlarm highSecurity />
      <Card name="Home 2" />
      <Card name="Home 3" />
    </section>
  );
}
