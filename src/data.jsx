import { AiFillGithub, AiFillHome , AiOutlineInstagram } from "react-icons/ai";
import { FaUser, FaFolderOpen, FaCode, FaTelegram } from "react-icons/fa";
import { BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs"
import { HiOutlineMail } from 'react-icons/hi'
import { SiNextdotjs } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";


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
  {id:5,title:'linkedin',href:"https://www.linkedin.com/in/erfan-sahafi/",icon:<BsLinkedin className="text-[#0A66C2]"/>},
  {id:3,title:'instagram',href:"https://instagram.com/erfan_sahafi?igshid=NTc4MTIwNjQ2YQ==",icon:<AiOutlineInstagram className="text-pink-600"/>},
  {id:4,title:'email',href:"erfansahafi9@gamil.com",icon:<HiOutlineMail className="text-zinc-300"/>},
]
const skills = [
  { id: 1, title: "react js", color: "#0ea5e9", percent: 80 },
  { id: 2, title: "next js", color: "#fff", percent: 80 },
  { id: 3, title: "Java Script", color: "#eab308", percent: 85 },
  { id: 4, title: "Type Script", color: "#0ea5e9", percent: 75 },
  { id: 5, title: "html", color: "#ea580c", percent: 100 },
  { id: 6, title: "css", color: "#0284c7", percent: 90 },
  { id: 7, title: "bootstrap", color: "#9333ea", percent: 85 },
  { id: 8, title: "tailwind", color: "#38BDF8", percent: 90 },
  { id: 9, title: "mui", color: "#22c55e", percent: 65 },
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
        title: "Java Script",
        icon: <RiJavascriptFill className="text-xl text-yellow-300" />,
      },
      {
        id: 1,
        title: "React Js",
        icon: <BiLogoReact className="text-xl text-blue-300" />,
      },
    ],
    href: "https://fastfoodshope.iran.liara.run/",
  },
  {
    id: 2,
    title: "پروژه پنل ادمین",
    img: "/images/admin.jpeg",
    desc: "این وب سایت نمونه ای از پروژه پنل مدیریت است که از طریق آن می توانیم اطلاعات کسب و کار خود را مشاهده کنیم.لطفا برای مشاهده وبسایت از Vpn استفاده کنید.",
    technology: [
      {
        id: 3,
        title: "Tailwind",
        icon: <BiLogoTailwindCss className="text-xl text-blue-400" />,
      },
      {
        id: 2,
        title: "Type Script",
        icon: <BiLogoTypescript className="text-xl fill-blue-500" />,
      },
      {
        id: 1,
        title: "Next Js",
        icon: <SiNextdotjs className="text-xl" />,
      },
    ],
    href: "https://dashboard-admin-tau.vercel.app/",
  },
];
export { navItem, skills, projects,social };
