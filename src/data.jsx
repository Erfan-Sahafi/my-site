import { AiFillHome } from "react-icons/ai";
import { FaUser,FaFolderOpen, FaCode } from "react-icons/fa";
import {MdEmail} from "react-icons/md";

const navItem = [
    {id:1,title:"خانه",iconName:<AiFillHome className="text-blue-400 text-xl"/>},
    {id:2,title:"درباره من",iconName:<FaUser className="text-blue-400 text-xl"/>},
    {id:3,title:"مهارت ها",iconName:<FaCode className="text-blue-400 text-xl"/>},
    {id:4,title:"پروژه ها",iconName:<FaFolderOpen className="text-blue-400 text-xl"/>},
    {id:5,title:"ارتباط با من",iconName:<MdEmail className="text-blue-400 text-xl"/>},
];

export {navItem}