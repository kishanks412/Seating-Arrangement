import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Head from "./components/Head";
import Footer from "./components/Footer";
import Body from "./components/Body";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import StudentPage from "./components/StudentPage";
import AdminLogin from "./components/AdminLogin";
import AdminSignUp from "./components/AdminSignUp";
import StudentLogin from "./components/StudentLogin";
import StudentSignUp from "./components/StudentSignUp";

const AppLayout = () =>{
  return (
    <div className='flex flex-col min-h-screen'>      
      <Head />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path:"login",
        element:<LogIn />,
        children:[
          {
            path: "adminlogin",
            element: <AdminLogin />,
          },
          {
            path: "studentlogin",
            element: <StudentLogin />,
          },
        ]
      },
      {
        path: "/signup",
        element: <SignUp />,
        children:[
          {
            path: "adminsignup",
            element: <AdminSignUp />,
          },
          {
            path: "studentsignup",
            element: <StudentSignUp />,
          },
          
        ]
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
    ]
  },
  
])
export default appRouter;
