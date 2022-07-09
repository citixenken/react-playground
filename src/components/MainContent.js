import React from "react";

export default function MainContent(props) {
  return (
    <div className="main-content">
      <img src={props.imageUrl} className="main-content-img" />
      <div className="main-content-details">
        <div className="main-content-location">
          <p className="main-content-country">{props.location}</p>
          <a
            href={props.googleMapsUrl}
            className="main-content-url"
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>
        <h4>{props.title}</h4>
        <p className="main-content-duration">
          {props.startDate} - {props.endDate}
        </p>
        <p className="main-content-desc">{props.description}</p>
      </div>
    </div>
  );
}
