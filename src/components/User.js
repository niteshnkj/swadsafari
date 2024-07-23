import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    userData();
    // Here we write api calls and do manual DOM manipulation Like ComponentDidMount .
    //also if i write set user here then it will render infinite times .
    return () => {
      // here we write cleanup function like conponentDidUnmount .
    };
  }, []);
  // In dependency array we need to write those things that we used to write in componentDidUpdate .

  const userData = async () => {
    const data = await fetch("https://api.github.com/users/niteshnkj");
    const json = await data.json();
    setUser(json);
  };
  if (!user) return <h1>Loading</h1>;
  const { name, location, avatar_url } = user;
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <img src={avatar_url} />
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @nitesjnkj</h4>
    </div>
  );
};

export default User;
