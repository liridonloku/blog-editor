import React from "react";
import Card from "./Card";

interface Props {}

const Cards: React.FC<Props> = () => {
  const renderSampleCards = () => {
    const cards = [];
    for (let i = 0; i < 5; i++) {
      cards.push(<Card key={i} />);
    }
    return cards;
  };
  return (
    <main>
      <div className="container">
        <div className="card-group">{renderSampleCards()}</div>
      </div>
    </main>
  );
};

export default Cards;
