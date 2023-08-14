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
const skills = [
    {id:5,title:"react js",color:'#0ea5e9',percent:80},
    {id:6,title:"next js",color:'#fff',percent:50},
    {id:4,title:"js",color:'#eab308',percent:78},
    {id:1,title:"html",color:'#ea580c',percent:90},
    {id:3,title:"css",color:'#0284c7',percent:75},
    {id:7,title:"bootstrap",color:'#9333ea',percent:85},
    {id:8,title:"tailwind",color:'#38BDF8',percent:95},
    {id:9,title:"mui",color:'#22c55e',percent:70},
]
export {navItem,skills}