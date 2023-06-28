import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },

];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Student, Sister Nivedita University",
    tenure: "Aug 2019 - Jul 2022",
    role: "Student",
    detail:
      "Completed Honours degree in Journalism and Mass Communication obtained good marks. I have learned a lot through the teachings of SNU. I’m grateful for their guidance and support.",
  },
  {
    place: "Reuters Journalism Certificate",
    tenure: "Aug 2021",
    role: "Certification",
    detail:
      "This online training introduces participants to best practices in digital journalism. Using compelling images, and hands-on how-to guides.",
  },
  {
    place: "Subham Nari Shakti Mahila Kalyan Samiti",
    tenure: "Aug 2021-June2022",
    role: "Intern",
    detail:
      'I was assigned for 6 days weekly with daily affairs of the day and headlines of the day by our HOD . I was selected for the best performer during the month of December.'
  },
];

export const comments = [
  {
    name: "Feroz ",
    post: "Creative Manager",
    comment:
      "your Blogs help me to get in touch with current news in detail",
    img: "./people2.png",
  },
  {
    name: "Anjali",
    post: "Creative Manager",
    comment:
      "Your Blogs are really interesting",
    img: "./people1.png",
  },
  {
    name: "Arjun",
    post: "Creative Manager",
    comment:
      "Thanks for helping me with your amazing knowledge",
    img: "./people2.png",
  },
  {
    name: "Priya",
    post: "Creative Manager",
    comment:
      "She help me to get over my stage fear",
    img: "./people1.png",
  },

];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
