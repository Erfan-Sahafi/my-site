import { AiFillGithub, AiFillHome, AiFillInstagram, AiOutlineInstagram } from "react-icons/ai";
import { FaUser, FaFolderOpen, FaCode, FaTelegram } from "react-icons/fa";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { HiOutlineMail } from 'react-icons/hi'
import { RiJavascriptFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const navItem = [
  {
    id: 1,
    title: "خانه",
    name:"home",
    iconName: <AiFillHome className="text-blue-400 text-xl" />,
  },
  {
    id: 2,
    title: "درباره من",
    name:"aboutme",
    iconName: <FaUser className="text-blue-400 text-xl" />,
  },
  {
    id: 3,
    title: "مهارت ها",
    name:"skill",
    iconName: <FaCode className="text-blue-400 text-xl" />,
  },
  {
    id: 4,
    title: "پروژه ها",
    name:"project",
    iconName: <FaFolderOpen className="text-blue-400 text-xl" />,
  },
];
const social = [
  {id:1,title:'github',href:"https://github.com/Erfan-Sahafi",icon:<AiFillGithub className="text-white"/>},
  {id:2,title:'telegram',href:"https://t.me/erfan_sahafi",icon:<FaTelegram className="text-sky-500"/>},
  {id:3,title:'instagram',href:"http://www.instagram.com/erfan_sl9",icon:<AiOutlineInstagram className="text-pink-600"/>},
  {id:4,title:'email',href:"erfansahafi9@gamil.com",icon:<HiOutlineMail className="text-zinc-300"/>},
]
const skills = [
  { id: 5, title: "react js", color: "#0ea5e9", percent: 80 },
  { id: 6, title: "next js", color: "#fff", percent: 50 },
  { id: 4, title: "js", color: "#eab308", percent: 78 },
  { id: 1, title: "html", color: "#ea580c", percent: 90 },
  { id: 3, title: "css", color: "#0284c7", percent: 75 },
  { id: 7, title: "bootstrap", color: "#9333ea", percent: 85 },
  { id: 8, title: "tailwind", color: "#38BDF8", percent: 95 },
  { id: 9, title: "mui", color: "#22c55e", percent: 70 },
];
const projects = [
  {
    id: 1,
    title: "پروژه فست فودی",
    img: "/images/fastfood.png",
    desc: "این یک پروژه سفارش غذا میباشد که کاملا ریسپانیو شده و با تکنولوژی های زیر زده شده است.",
    technology: [
      {
        id: 3,
        title: "Tailwind",
        icon: <BiLogoTailwindCss className="text-xl text-blue-400" />,
      },
      {
        id: 2,
        title: "java script",
        icon: <RiJavascriptFill className="text-xl text-yellow-300" />,
      },
      {
        id: 1,
        title: "react",
        icon: <BiLogoReact className="text-xl text-blue-300" />,
      },
    ],
    href: "https://fastfoodshope.iran.liara.run/",
  },
];
export { navItem, skills, projects,social };
