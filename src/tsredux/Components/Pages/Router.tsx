
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import UserList from './UserList';
import Attractions from './Attractions';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="user" element={<UserList />} />
        <Route path="attractions" element={<Attractions />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default Router;
