import React, { useState } from "react";
import { Link } from "react-router-dom";


const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
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
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>

        {/* admin email */}
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
            placeholder="Enter Your Password"
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Link to="/login/adminlogin/adminfunctionality">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 w-full rounded-md focus:outline-none focus:shadow-outline"
            onClick={handleLogin}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// const AdminLogin = () => {
//   const history = useHistory();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       // Replace this with your actual authentication logic
//       const response = await fetch("/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         // Successfully authenticated, redirect to the desired route
//         history.push("/login/adminlogin/adminfunctionality");
//       } else {
//         alert("Invalid credentials. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="flex-grow flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>

//         <div className="mb-4 flex items-center">
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             placeholder="Enter your Registered Email"
//             className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-4 flex items-center">
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter Your Password"
//             className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 w-full rounded-md focus:outline-none focus:shadow-outline"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;
