import React, { useEffect, useState } from 'react';

import NavbarAuth from '../Components/NavbarAuth'
import Feed from '../Components/Feed'
import Recommendations from '../Components/Recommendations'
import Widgets from '../Components/Widgets'
import Admin from './Admin'
import UserService from '../Services/User/UserService'
import EventBus from '../Utils/EventBus'
import User from './User';

const Home = () => {
    
  const user = UserService.getCurrentUser();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const logOut = () => {
    UserService.logout();
    setShowAdminBoard(false);
    setShowUserBoard(false);
    setCurrentUser(undefined);
  }

  useEffect(() => {
    
    if (user) {
      setCurrentUser(user);
      console.log(user);
      setShowUserBoard(user.roles.includes("ROLE_USER_INTERNAL"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    })
    
    return () => {
      EventBus.remove("logout");
    }

  }, []);
    return (
        <div>
          <User> </User>
           {console.log("admin " + showAdminBoard)}
           {console.log("user " + showUserBoard)}
           {
            showUserBoard && (
             <div>
                <User> </User>
             </div> 
           )} 

            { showAdminBoard && (
             <div>
                <Admin> </Admin>
             </div> 
             )} 
        </div>
        
    )
}


export default Home