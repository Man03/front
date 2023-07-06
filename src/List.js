import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const List = () => {
  let [details, setDetails] = useState([]);

  useEffect(() => {
    let url = "https://reqres.in/api/users?page=2";
    axios.get(url).then((res) => setDetails(res.data.data));
  }, []);

  return (
    <div>
      {details.length != 0 &&
        details.map((user) => {
          return <Card user={user} />;
        })}
    </div>
  );
};

export default List;