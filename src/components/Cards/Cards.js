import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Image9 from "../../assets/images/img-9.jpg";
import Image2 from "../../assets/images/img-2.jpg";
import Image3 from "../../assets/images/img-3.jpg";
import Image4 from "../../assets/images/img-4.jpg";
import Image8 from "../../assets/images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Why should you go to Japan?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Image9}
              text="See the beautiful Cherry Blossom Sakura Tree only in Japan"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Image2}
              text="Taste the Delicious Japanese Foods like Sushi and Ramen"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Image3}
              text="See the beautiful Japan Shrine and Torii Gate"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={Image4}
              text="Climb to the beautiful and high Mountain Fuji"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={Image8}
              text="Wear Japanese traditional Kimono and Yukata"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
