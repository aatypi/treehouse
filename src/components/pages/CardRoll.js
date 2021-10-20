import React from "react";
import { FaWifi, FaBell, FaEye } from "react-icons/fa";
import treehouse from "../../images/mateusz-buda-hBZkGJZHEXU-unsplash.jpg"

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img
          src={treehouse}
          alt="treehouse"
          width={100}
        />
        <div className="card-inner">
          {this.props.name && <h1> {this.props.name}</h1>}
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
