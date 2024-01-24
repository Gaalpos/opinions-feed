import React from "react";
import '../styles/Opinion.css';


function Opinion(props) {
  return (
    <div className="container-opinion">
      <img
        className="image-opinion"
        src={require(`../imgs/${props.img}.jpg`)}
        // src={require(`../imgs/bender.jpg`)}
        alt="Bender from Futurama" />
      <div className="container-text-opinion">
        <p className="name-opinion">{props.name}</p>
        <p className="job-opinion"> {props.job} at {props.place}</p>
        <p className="text-opinion">{props.phrase} </p>
      </div>
    </div>
  );
}

export default Opinion;