import tour1Img from "./assets/images/tour-1.jpeg"
import tour2Img from "./assets/images/tour-2.jpeg"
import tour3Img from "./assets/images/tour-3.jpeg"
import tour4Img from "./assets/images/tour-4.jpeg"

const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];
const socialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    icon: "fab fa-squarespace",
  },
];
const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];
const tours = [
  {
    id: 1,
    img:tour1Img,
    date:"august 26th, 2020",
    title:"Tibet Adventure",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location:"china",
    days:6,
    startingPrice:2100

  },
  {
    id: 2,
    img:tour2Img,
    date:"october 1th, 2020",
    title:"best of java",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location:"indonesia",
    days:11,
    startingPrice:1400,
    },
  {
    id: 3,
    img:tour3Img,
    date:"september 15th, 2020",
    title:"explore hong kong",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location:"hong kong",
    days:8,
    startingPrice:5000,
    },
  {
    id: 4,
    img:tour4Img,
    date:"december 5th, 2019",
    title:"kenya highlights",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location:"kenya",
    days:20,
    startingPrice:3300,
    },
];

export { pageLinks, socialLinks, services, tours };
