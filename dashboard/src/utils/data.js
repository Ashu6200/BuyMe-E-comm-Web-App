import { MdOutlineDashboardCustomize, MdSupervisedUserCircle, MdProductionQuantityLimits } from "react-icons/md";
import { SiBlogger } from "react-icons/si"
import { ImBlog } from "react-icons/im"
import { IoBagAddOutline } from "react-icons/io5"
import { AiOutlineUnorderedList } from "react-icons/ai"


export const menuItems = [
    {
        link:"/",
        icon: <MdOutlineDashboardCustomize />,
        name: "Dashboard"
    }, {
        link:"/users",
        icon: <MdSupervisedUserCircle />,
        name: "All Users"
    }, {
        link:"/products",
        icon: <MdProductionQuantityLimits />,
        name: "All Products"
    },
    {
        link:"/addproducts",
        icon: <IoBagAddOutline />,
        name: "Add Product"
    }, {
        link:"/posts",
        icon: <SiBlogger />,
        name: "All Blogs"
    }, {
        link:"/addblogs",
        icon: <ImBlog />,
        name: "Add Blogs",

    }, {
        link:"/orders",
        icon: <AiOutlineUnorderedList />,
        name: "Orders"
    }
]