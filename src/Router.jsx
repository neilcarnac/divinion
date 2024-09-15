import React from 'react';
import { Route, Routes } from 'react-router';
import { UserProvider, UserContext } from './Context/UserContext'; // Adjust the path as necessary
import { useContext } from 'react';
import HomePage from './Pages/HomePage';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import News from './Pages/News';
import AdminLogin from './Pages/AdminLogin';
import About from './Pages/About';
import Subscribe from './Pages/Subscribe';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';
import ServicesForms from './Pages/ServicesForms';
import ServicesPrivacyPolicy from './Pages/ServicesPrivacyPolicy';

const AppRouter = () => {
    const { currentUser } = useContext(UserContext); // Access current user from context

    return (

        <UserProvider>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about/" element={<About />} />
                <Route path="/admin/" element={<Admin />} />
                <Route path="/login/" element={<Login />} />
                <Route path="/blog/" element={<News />} />
                <Route path="/contact" element={<Subscribe />} />
                <Route path="/services-form" element={<ServicesForms />} />
                <Route path="/services-privacy-policy" element={<ServicesPrivacyPolicy />} />

                {/* <Route path="/careers/" element={<Careers />} /> */}
                {/* <Route path="/contact/" element={<Contact />} /> */}


                <Route path="/adminlogin" element={<AdminLogin />} />
            </Routes>
        </UserProvider>

    );
};

export default AppRouter;