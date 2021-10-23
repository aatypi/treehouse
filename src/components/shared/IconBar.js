import React from "react";
import icon from "../../images/BIGBEN.svg";

class IconCircle extends React.Component {
  render() {
    return (
      <a href={"/destinations#"+this.props.label}>
      <div className="icon">
        <img src={icon} alt="" width={75} height={75} />
        {this.props.label}
      </div>
      </a>
    );
  }
}

const IconBar = () => {
  return (
    <div className="icon-stripe">
      <div className="max-width icon-container">
        <IconCircle label="London" />
        <IconCircle label="Paris" />
        <IconCircle label="Phuket" />
        <IconCircle label="Moscow" />
        <IconCircle label="Los Angeles" />
        <IconCircle label="Pattaya" />
        <IconCircle label="Athen" />
      </div>
    </div>
  );
};

export default IconBar;
