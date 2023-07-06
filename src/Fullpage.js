import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Fullpage = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => setUser(res.data.data));
  }, []);
  return (
    user && (
      <div className="wrapper">
        <div className="image">
          <img src={user.avatar} />
        </div>
        <div className="details">
          <p>Email: {user.email}</p>
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name}</p>
          <div className="div">
            <button>Download</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Fullpage;