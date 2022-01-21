import React, { useEffect, useState } from 'react';
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

import UserService from './Services/User/UserService';
import EventBus from './Utils/EventBus';

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
        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/clubs" element={<Clubs />} />
        <Route path="/events" element={<Events />} />

        <Route path="/settings" element={<Settings />} />
        <Route path="/settingsClub" element={<SettingsClub />} />

        <Route path="/dashboards" element={<Dashboards />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/createClub" element={<CreateClub />} />
      </Routes>
    </>
    
  );
}

export default App;
