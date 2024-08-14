import Chat from "components/Chat/Chat";
import Community from "components/Community/Community";
import Home from "components/Home/Home";
import Profile from "components/Profile/Profile";
import Subscription from "components/Subscription/Subscription";
import { FaHome, FaPeopleArrows, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { useEffect } from "react";
import ExerciseDetail from "components/ExerciseDetail/ExerciseDetail";
import CreatePost from "components/Post/CreatePost";
import UpdateProfile from "components/Profile/UpdateProfile";

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


var userRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: <FaHome/>,
    component:<Home/>,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <FaUser/>,
    component:<Profile/>,
    layout: "/user",
  },
  {
    path: "/community",
    name: "Community",
    icon: <FaPeopleArrows/>,
    component:<Community/>,
    layout: "/user",
  },
  {
    path: "/chats",
    name: "Chats",
    icon: <IoIosChatbubbles />,
    component:<Chat/>,
    layout: "/user",
  },
  {
    path: "/subscription",
    name: "Subscription",
    icon: <MdOutlinePayments />,
    component:<Subscription/>,
    layout: "/user",
  },
  {
    path: "/logoout",
    name: "LogOut",
    icon: <IoLogOut />,
    component:<LogoutComponent/>,
    layout: "/user",
  },
  {
    path: "/exerciseDetail",
    name: "Exercise Detail",
    icon: <IoLogOut />,
    component:<ExerciseDetail/>,
    layout: "/user",
  },
  {
    path: "/createPost",
    name: "Create Post",
    icon: <IoLogOut />,
    component:<CreatePost/>,
    layout: "/user",
  },
  {
    path: "/updateUserProfile",
    name: "Update Profile",
    icon: <IoLogOut />,
    component:<UpdateProfile/>,
    layout: "/user",
  },
]
export default userRoutes;