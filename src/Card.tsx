import React from "react";

interface Props {}

const Card: React.FC<Props> = () => {
  return (
    <div className="card m-3 shadow-sm">
      <img
        src="https://miro.medium.com/max/1400/1*t_G1kZwKv0p2arQCgYG7IQ.gif"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
