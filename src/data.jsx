import { AiFillGithub, AiFillHome, AiOutlineInstagram } from "react-icons/ai";
import { FaUser, FaFolderOpen, FaCode, FaTelegram } from "react-icons/fa";
import {
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SiNextdotjs } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

const social = [
  {
    id: 1,
    title: "github",
    href: "https://github.com/Erfan-Sahafi",
    icon: <AiFillGithub className="text-white" />,
  },
  {
    id: 5,
    title: "linkedin",
    href: "https://www.linkedin.com/in/erfan-sahafi/",
    icon: <BsLinkedin className="text-[#0A66C2]" />,
  },
  {
    id: 4,
    title: "email",
    href: "erfansahafi9@gamil.com",
    icon: <HiOutlineMail className="text-zinc-300" />,
  },
];
const skills = [
  { id: 1, title: "react js", color: "#0ea5e9", percent: 85 },
  { id: 2, title: "next js", color: "#fff", percent: 70 },
  { id: 3, title: "Java Script", color: "#eab308", percent: 90 },
  { id: 4, title: "Type Script", color: "#0ea5e9", percent: 75 },
  { id: 5, title: "html", color: "#ea580c", percent: 100 },
  { id: 6, title: "css", color: "#0284c7", percent: 100 },
  { id: 7, title: "bootstrap", color: "#9333ea", percent: 100 },
  { id: 8, title: "tailwind", color: "#38BDF8", percent: 100 },
];
const projects = [
  {
    id: 1,
    title: "پروژه فست فودی",
    img: "/images/fastfood.png",
    desc: "این یک پروژه سفارش غذا میباشد که کاملا ریسپانیو شده و با تکنولوژی های زیر زده شده است.",
    technology: [
      {
        id: 4,
        title: "Tailwind",
        icon: <BiLogoTailwindCss className="text-xl text-blue-400" />,
      },
      {
        id: 3,
        title: "Redux",
        icon: <BiLogoRedux className="text-xl text-purple-600" />,
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
    href: "https://akbarfood.liara.run/",
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
export { skills, projects, social };
