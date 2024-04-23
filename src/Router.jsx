import React from 'react';
import { Route, Routes } from 'react-router';

import HomePage from './Pages/HomePage';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import News from './Pages/News';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />        
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/blog" element={<News />} />



        </Routes>
    );
};

export default AppRouter;