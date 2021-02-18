import React, { useState } from "react";
import Context from "./Context";

const Container = (props) => {
  //these are props coming from React
  const [user, setUser] = useState();

  const [goals, setGoals , title,description ] = useState([
    {
      bgcolor: "#FFBE86",
      title: "Game of Chess",
      description: "buy a chess set",
      startDate: "2021-02-25",
      endDate: "2021-02-28",
      progress: "5%"
    },
    {
      bgcolor: "#7DC9E7",
      title: "100 km Jogging",
      description: "finish app",
      startDate: "2021-02-25",
      endDate: "2021-02-28",
      progress: "5%"
    },
  ]);

  {
    /* 
              <Scroll bgcolor="#FFBE86" title="Game Of Chess" month="Sep - Nov" animation="bounceInLeft" />
              <Scroll bgcolor="#7DC9E7" title="100 Km Jogging" month="Jan - Feb" animation="bounceInLeft" />
              <Scroll bgcolor="#FFBE86" title="Netflix and " month="March - April" animation="bounceInLeft" />
              <Scroll bgcolor="#7DC9E7" title="Video Games" month="Aug - Sep" animation="bounceInLeft" /> */
  }

  //any state that you create here, you need to pass it as a value to Context

  const fetchSetGoal = (newGoal) => {
    // const newGoal = { bgcolor: "#FFBE88", title: "Testing Context", month: "Sep - Nov", animation: "bounceInLeft" };
    setGoals([...goals, newGoal]);
    console.log("added new goal");
  };

  const fetchDataTest = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todosFromApi) => {
        console.log("Is this working or what?", todosFromApi);
        setTodos(todosFromApi);
      })
      .catch((err) => {
        console.log("Something went wrong: ", err);
      });
  };

  const fetchSignUp = (data) => {
    fetch("https://sheltered-lowlands-56814.herokuapp.com/users", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.error) {
          console.log(user);
          setUser(user);
        } else {
          console.log("Let's see what the error is", user.error);
        }
      })
      .catch((err) => {
        console.log("Something went wrong: ", err); //this only catches an error when there's a network error
      });
  };

  //fetch login
  const fetchLogin = (data) => {
    fetch("https://sheltered-lowlands-56814.herokuapp.com/users/login", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.error) {
          console.log(user);
          setUser(user);
        } else {
          console.log("Let's see what the error is", user.error);
        }
      })
      .catch((err) => {
        console.log("Something went wrong: ", err); //this only catches an error when there's a network error
      });
  };

  // logOut funcition

  const LogoutScreen = () => {
    setUser(undefined);
  };

  //fetch login 
  const fetchSaveSettings = (data) => {
    fetch("https://easygoals-backend.herokuapp.com/users", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.error) {
          console.log(user);
          setUser(user);
        } else {
          console.log("Let's see what the error is", user.error);
        }
      })
      .catch((err) => {
        console.log("Something went wrong: ", err); //this only catches an error when there's a network error
      });
  };


  return (
    <Context.Provider
      value={{
        user,
        setUser,
        fetchSignUp,
        fetchLogin,
        LogoutScreen,
        goals,
        setGoals,
        fetchSetGoal,
        fetchSaveSettings,
        title,
        description ,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Container;
