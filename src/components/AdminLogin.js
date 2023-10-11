import React, { useState } from "react";
import StudentPage from "./StudentPage";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>

        {/* student email */}
        <div className="mb-4 flex items-center">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Registered Email"
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* password */}
        <div className="mb-4 flex items-center">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <button
          // className="                                                "
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 w-full rounded-md focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory for redirection

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);

//   // Use useHistory to handle redirection
//   const history = useHistory();

//   const handleLogin = async () => {
//     // Simulate user authentication logic (replace with actual backend API call).
//     try {
//       // Replace this with your actual authentication logic
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         setLoggedIn(true);
//         // Redirect to the user profile page upon successful login
//         history.push('/user');
//       } else {
//         alert('Invalid credentials. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-4 rounded-md border"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-4 rounded-md border"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           className="bg-blue-500 text-white p-2 rounded-md w-full"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//         {loggedIn && <p className="mt-4 text-green-600">Logged in successfully!</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;
