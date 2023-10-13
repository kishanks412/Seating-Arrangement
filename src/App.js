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
import SetArrangement from "./components/SetArrangement";
import AddClass from "./components/AddClass";
import DelClass from "./components/DelClass";
import GetAllClass from "./components/GetAllClass";
import AddExam from "./components/AddExam";
import DelExam from "./components/DelExam";
import GetAllExam from "./components/GetAllExam";
import GetAllStudent from "./components/GetAllStudent";
import GetAllStudentsBySem from "./components/GetAllStudentsBySem";
import GetArrange from "./components/GetArrange";


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
          {
            path:"setarrangement",
            element: <SetArrangement/>
          },
          {
            path:"getarrangement",
            element: <GetArrange />
          },
          {
            path:"addclass",
            element: <AddClass/>
          },
          {
            path:"delclass",
            element: <DelClass/>
          },
          {
            path:"getallclass",
            element: <GetAllClass/>
          },
          {
            path:"addexam",
            element: <AddExam/>
          },
          {
            path:"delexam",
            element: <DelExam/>
          },
          {
            path:"getallexam",
            element: <GetAllExam/>
          },
          {
            path:"addexam",
            element: <AddExam/>
          },
          {
            path:"getallstudents",
            element: <GetAllStudent/>
          },
          {
            path:"getallstudentsbysem",
            element: <GetAllStudentsBySem/>
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
