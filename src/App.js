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
import StudentData from "./components/StudentData";
import AdminFucntion from "./components/AdminFucntion";
import ByClass from "./components/ByClass";
import ByBranchSem from "./components/ByBranchSem";


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
        path:"/login",
        element:<LogIn />,
      },
      {
        path: "/login/adminlogin",
        element: <AdminLogin />,
      },

      {
        path: "/login/adminlogin/adminfunctionality",
        element: <AdminFucntion />,
        children:[
          {
            path:"byclass",
            element: <ByClass/>
          },
          {
            path:"bybranchsem",
            element: <ByBranchSem/>
          },
        ]
      },



      {
        path: "/login/studentlogin",
        element: <StudentLogin />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signup/adminsignup",
        element: <AdminSignUp />,
      },
      {
        path: "/signup/studentsignup",
        element: <StudentSignUp />,
      },
      {
        path:"/login/studentlogin/student",
        element: <StudentData />
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
