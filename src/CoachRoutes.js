import Chat from "components/Chat/Chat";
import Community from "components/Community/Community";
import Home from "components/Home/Home";
import Profile from "components/Profile/Profile";
import { FaHome, FaPeopleArrows, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { useEffect } from "react";
import Subscriber from "views/Coach/Subscriber/Subscriber";
import Dashboard from "views/Coach/Dashboard/Dashboard";
import UpdateProfile from "views/Coach/Profile/UpdateProfile";

const LogoutComponent = () => {
  useEffect(() => {
    // Clear any authentication tokens or user data here
    // localStorage.removeItem("token"); // Example
    // Redirect to login page
    window.location.href = "/";
    localStorage.clear();
  }, []);

  return null;
};


var coachRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome/>,
    component:<Dashboard/>,
    layout: "/coach",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <FaUser/>,
    component:<Profile/>,
    layout: "/coach",
  },
  {
    path: "/community",
    name: "Community",
    icon: <FaPeopleArrows/>,
    component:<Community/>,
    layout: "/coach",
  },
  {
    path: "/chats",
    name: "Chats",
    icon: <IoIosChatbubbles />,
    component:<Chat/>,
    layout: "/coach",
  },
  {
    path: "/subscribers",
    name: "Subscribers",
    icon: <MdOutlinePayments />,
    component:<Subscriber/>,
    layout: "/coach",
  },
  {
    path: "/updateCoachProfile",
    name: "Coach Profile",
    icon: <MdOutlinePayments />,
    component:<UpdateProfile/>,
    layout: "/coach",
  },
  {
    path: "/logoout",
    name: "LogOut",
    icon: <IoLogOut />,
    component:<LogoutComponent/>,
    layout: "/coach",
  },
]
export default coachRoutes;