import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-inner">
          {this.props.name && <h1> {this.props.name}</h1>}
          {this.props.wifi && <span> Free Wi-Fi</span>}
          {this.props.wifi && <span> Fire alarm</span>}
          {this.props.wifi && <span> High security</span>}
        </div>
      </div>
    );
  }
}

export function CardRoll() {
  return (
    <section className="card-roll">
      <Card name="Home 1" wifi fireAlarm highSecurity/>
      <Card name="Home 2" />
      <Card name="Home 3" />
    </section>
  );
}
