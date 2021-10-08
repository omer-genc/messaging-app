import { MainContext } from "./context";
import { useState, useEffect } from "react";
import Routers from "./components/Routers";

import userslistJSON from "./user-list.json"


function App() {
  const [loginState, setloginState] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
  })

  const [usersList] = useState(userslistJSON.users)
  const [selectedUser, setSelectedUser] = useState(null)
  
  const handleSetSelectedUser = (id) => {
    const user = usersList.find(u => u.id === id)
    if(user)
      setSelectedUser(user)
  }

  useEffect(() => {
    const user = localStorage.getItem("me")

    if(user){
      const userObj = JSON.parse(user)
      console.log(userObj);
      setloginState(userObj)
    }
    
  }, [])


  const getUserName = (e) => {
    setloginState({ ...loginState, user_name: e.target.value })
  }

  const getFirstName = (e) => {
    setloginState({ ...loginState, first_name: e.target.value })
  }

  const getLastName = (e) => {
    setloginState({ ...loginState, last_name: e.target.value })
  }


  const login = (e) => {
    console.log(loginState);
    localStorage.setItem("me", JSON.stringify(loginState))
    
  }

  const logOut = () => {
    localStorage.removeItem("me")
  }

  const handleNewMessage = (message_text) => {
    setSelectedUser({
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        {
          id: loginState.user_name,
          text: message_text,
          sender: loginState.user_name
        }
      ]
    })
  }



  const data = {
    getUserName,
    getFirstName,
    getLastName,
    login,
    logOut,
    usersList,
    selectedUser,
    handleSetSelectedUser,
    handleNewMessage
  }

  return (
    <MainContext.Provider value={data}>
      <Routers></Routers>
    </MainContext.Provider>
  );
}

export default App;
