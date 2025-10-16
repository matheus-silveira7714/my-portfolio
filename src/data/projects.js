import { BiLogoCss3, BiLogoFirebase, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPhp, BiLogoReact, BiLogoShopify, BiLogoTailwindCss, BiLogoTypescript, BiLogoWordpress } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbBrandPrisma, TbBrandMysql, TbBrandOpenai } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Contractor Marketplace Enhancement",
    image: "./kluje.png",
    icons: [BiLogoWordpress, BiLogoPhp, BiLogoJavascript, TbBrandMysql],
    description: "This application allows users to express their thoughts and experiences through blogs.",
    github: "https://github.com",
    demo: "https://write-ur-blog.vercel.app",
  },
  {
    id: "2",
    name: "Ecommerce website",
    image: "./burnywilds.png",
    icons: [BiLogoWordpress, BiLogoPhp, TbBrandMysql],
    description: "BurnyWilds.com offers vegan, gluten-free sauces and eco-friendly adventure goods.",
    github: "https://github.com/",
    demo: "https://burnywilds.com",
  },
  {
    id: "3",
    name: "Ecommerce Website",
    image: "./happybunch.png",
    icons: [ BiLogoShopify, BiLogoCss3, TbBrandMysql],
    description: "HappyBunch.com.sg delivers fresh flowers and gifts across Singapore daily.",
    github: "https://github.com/",
    demo: "https://www.happybunch.com.sg",
  },
  {
    id: "4",
    name: "Boat Rental Marketplace",
    image: "./sailme.png",
    icons: [ BiLogoReact, BiLogoTypescript, SiExpress, TbApi, BiLogoMongodb],
    description: "Sail.me is a global platform for booking and listing boat rentals and yacht charters.",
    github: "https://github.com",
    demo: "https://sail.me",
  },
  {
    id: "5",
    name: "AI-Powered Data Conversion App",
    image: "./chatdb.png",
    icons: [TbBrandNextjs, TbBrandOpenai, BiLogoFirebase, BiLogoNodejs],
    description: "ChatDB.ai offers online tools to edit, convert, and analyze CSV, JSON, and more.",
    github: "https://github.com/",
    demo: "https://chatdb.ai",
  },
  
  {
    id: "6",
    name: "Real-Time Trading Platform",
    image: "./tradeit.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoNodejs, TbBrandPrisma],
    description: "Tradeit.gg is a fast, secure marketplace to trade, buy, and sell CS2 skins.",
    github: "https://github.com/",
    demo: "https://tradeit.gg",
  },
  
  
];

export default ProjectsData;
