import React from "react";

export function Badge (props) {
    const title = props.title;
    const text = props.text; 
      return (
      <div className="badge">
          <h3 className="badge-title">
            {title}
          </h3>
          <p className="badge-text">
            {text}
          </p>
        </div>
      );
  }
