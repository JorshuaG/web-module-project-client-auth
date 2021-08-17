import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const friendInitialState = {
  id: "",
  name: "",
  age: "",
  email: "",
};

function FriendsList(props) {
  const [state, setState] = useState([]);

  const [newFriend, setNewFriend] = useState(friendInitialState);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setState([...state, ...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/friends", { ...newFriend, id: Date.now() })
      .then((res) => {
        setState([...state, res.data]);
        setNewFriend(friendInitialState);
      });
  };

  return (
    <div>
      {state.map((friend) => {
        return (
          <div>
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        );
      })}
      <form onSubmit={submit}>
        <div>
          <h2>Add Friend Form</h2>
          <label>
            Friend Name:
            <input type="text" name="name" onChange={handleChange}></input>
          </label>
          <label>
            Friend Age:
            <input type="text" name="age" onChange={handleChange}></input>
          </label>
          <label>
            Friend Email:
            <input type="text" name="email" onChange={handleChange}></input>
          </label>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FriendsList;
