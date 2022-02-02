import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Clubs from './Pages/Clubs';
import Events from './Pages/Events';
import Settings from './Pages/Settings';
import CreateClub from './Pages/CreateClub';
import Admin from './Pages/Admin';
import SettingsClub from './Pages/SettingsClub'
import Dashboards from './Pages/Dashboards';
import Members from './Pages/Members';
import CreateEvent from './Components/CreateEvent';
import PostDetails from './Components/PostDetails';
import NotFound from './Pages/NotFound'
import UsersDash from './Pages/UsersDash';
import ClubsDash from './Pages/ClubsDash';

import UserService from './Services/User/UserService';
import EventBus from './Utils/EventBus';
import EventForm from './Components/EventForm';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route exact path="/home" element={<Home />} />

        <Route exact path="/profile/:nameClub/:state" element={<Profile />} />

        <Route exact path="/clubs" element={<Clubs />} />
        <Route exact path="/postDetails/:idPost/:Ccount" element={<PostDetails/>} />
        <Route exact path="/events" element={<Events />} />

        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/settingsClub" element={<SettingsClub />} />

        <Route exact path="/dashboards" element={<Dashboards />} />
        <Route exact path="/members" element={<Members />} />

        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />

        <Route exact path="/admin" element={<Admin />} />

        <Route exact path="/clubsDash" element={<ClubsDash />} />
        <Route exact path="/usersDash" element={<UsersDash />} />
        
        <Route exact path="/createClub" element={<CreateClub />} />
        <Route exact path="/createEvent/:nameClub/:state" element={<CreateEvent />} />

        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
    
  );
}

export default App;
