import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const user = props.user;
  return (
    <Link to={`/user/${user.id}`}>
      <div className="wrapper" key={user.id}>
        <div className="image">
          <img src={user.avatar} />
        </div>
        <div className="details">
          <p>Email: {user.email}</p>
          <p>
            First Name: {user.first_name} {user.last_name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;