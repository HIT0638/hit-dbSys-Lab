import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
import Home from '@/pages/Home/Home';
import Forget from "@/pages/Auth/Forget";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forget />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routing;
