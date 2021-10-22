import React from "react";

export default function Login({ users, setUser }) {
  const login = async (e, id) => {
    e.preventDefault();
    const user = await fetch(`api/users/${e.username}`);
    setUser(user);
  };
  return (
    <div>
      {users.map(({ username, id }) => (
        <button onClick={(e) => login(e, id)} name={username} key={id}>
          {username}
        </button>
      ))}
    </div>
  );
}
