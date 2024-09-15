import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Components/Firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Hard-coded admin credentials
  const adminEmail = 'admin@company.com';
  const adminPassword = 'admin123';

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Check against hard-coded credentials
    if (email === adminEmail && password === adminPassword) {
      // Proceed with Firebase authentication
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('Admin logged in:', user);
          navigate('/admin');
          // You can redirect the user or perform any other actions upon successful login
        })
        .catch((error) => {
          setError('Failed to log in. Please check your credentials.');
          console.error('Login error:', error);
        });
    } else {
      setError('Invalid admin credentials.');
    }
  };

  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <p className="text-5xl">Admin</p>
        </a>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in as Admin
            </h1>
            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 "
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 "
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-black/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>

              {error && <span className="flex items-center text-red-500">{error}</span>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
