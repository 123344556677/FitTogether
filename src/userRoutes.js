import Chat from "components/Chat/Chat";
import Community from "components/Community/Community";
import Home from "components/Home/Home";
import Profile from "components/Profile/Profile";
import Subscription from "components/Subscription/Subscription";
import { FaHome, FaPeopleArrows, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";


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
    component:<Subscription/>,
    layout: "/user",
  },
]
export default userRoutes;