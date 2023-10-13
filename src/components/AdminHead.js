import React from "react";
import { Link } from "react-router-dom";

const AdminHead = () => {
  return (
    <div className="flex-grow">
      <div className="p-4 bg-red-400">
        <ul className="nav-items flex flex-wrap">
          {/* <li className="px-2 pb-3   hover:text-2xl">
            <Link to="/login/adminlogin/adminfunctionality/byclass">
              By Classroom
            </Link>
          </li>
          <li className="px-2 pb-3 hover:text-2xl">
            <Link to="/login/adminlogin/adminfunctionality/bybranchsem">
              By Branch & Sem
            </Link>
          </li> */}
          <li className="px-2 pb-3 hover:text-2xl">
            <Link to="/login/adminlogin/adminfunctionality/setarrangement">
              Set Arrangement
            </Link>
          </li>
          <li className="px-2 pb-3 hover:text-2xl">
            <Link to="/login/adminlogin/adminfunctionality/getarrangement">
              Get Arrangement
            </Link>
          </li>
          <li className="px-2 pb-3 hover:text-2xl">
            <Link to="/login/adminlogin/adminfunctionality/addclass">
              Add Classroom
            </Link>
          </li>
          <li className="px-2 pb-3 hover:text-2xl">
            <Link to="/login/adminlogin/adminfunctionality/delclass">
              Del Classroom
            </Link>
          </li>
          <li className="px-2 pb-3 hover:text-2xl">
            <Link to="/login/adminlogin/adminfunctionality/getallclass">
              Get All Classroom
            </Link>
          </li>
          <li className="px-2 pb-3 hover:text-2xl">
            <Link to="/login/adminlogin/adminfunctionality/addexam">
              Add Exam
            </Link>
          </li>
          <li className="px-2 pb-3 hover:text-2xl">
            <Link to="/login/adminlogin/adminfunctionality/delexam">
              Del Exam
            </Link>
          </li>
          <li className="px-2 pb-3 hover:text-2xl">
            <Link to="/login/adminlogin/adminfunctionality/getallexam">
              Get All Exam
            </Link>
          </li>
          <li className="px-2 pb-3  hover:text-2xl">
            <Link to="/login/adminlogin/adminfunctionality/getallstudents">
              <button>
                All Students
              </button>
            </Link>
          </li>
          <li className="px-2 pb-3 hover:text-2xl">
            <Link to="/login/adminlogin/adminfunctionality/getallstudentsbysem">
              Get All students by sem
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHead;
