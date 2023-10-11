import React, { useState } from "react";
import StudentPage from "./StudentPage";
import { Link } from "react-router-dom";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);


  const handleLogin = async () => {
    // Simulate user authentication logic (replace with actual backend API call).
    // In a real application, you would send a POST request to your server.
    try {
      // Replace this with your actual authentication logic
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setLoggedIn(true);
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Student Login</h2>

        {/* student email */}
        <div className="mb-4 flex items-center">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your Registered Email"
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* password */}
        <div className="mb-4 flex items-center">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          // className="                                                "
          className ="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 w-full rounded-md focus:outline-none focus:shadow-outline"
          onClick={handleLogin}
        >
          Login
        </button>

        

        {loggedIn && (
          <Link to="/hi">
            <StudentPage/>
          </Link>
          
        )}
      </div>
    </div>
  );
};

export default StudentLogin;

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
