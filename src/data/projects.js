// Each project is a "frame" on the reel. Timecodes are cosmetic —
// they encode reel position, standing in for the 01/02/03 index.

import Ecommerce from "../assets/Ecommerce.png";
import FoodRecipe from "../assets/FoodRecipe.png";
import Login from "../assets/Login.png";
import TicToeTic from "../assets/TicToeTic.png";
import VideoGallery from "../assets/VideoGallery.png";
import YouTube from "../assets/YouTube.png";

const projects = [
  {
    title: 'Ecommerce Shopping Cart',
    image: Ecommerce,
    blurb:
      'Developed a responsive e-commerce application using React.js, Redux, Custome CSS, and JSON Server with product listing, product details, and shopping cart functionality.',
    tags: ['React', 'Custome CSS', 'Vite', 'JSON-Server Fake API', 'Redux', 'Axios', 'React Router'],
    link: "https://ecommerce-app-wheat-three.vercel.app/",
    
  },
  {
    title: 'Food Recipe Finder',
    image: FoodRecipe,
    blurb:
      'Developed a Food Recipe Finder application using React.js with recipe search, API integration, state management, and a responsive user interface.',
    tags: ['React', 'Tailwind CSS', 'themealdb API', 'Axios', 'React Router'],
    link: "https://food-recipe-finding-website.vercel.app/",
  },
  {
    title: 'YouTube Clone',
    image: YouTube,
    blurb:
      'Developed a responsive YouTube Clone using React.js, Tailwind CSS, and YouTube Data API v3, featuring video search, playback, channel details, and related video recommendations with a modern, user-friendly interface.',
    tags: ['React', 'JavaScript (ES6)', 'React Router', 'Tailwind CSS', 'YouTube Data API v3','Axios'],
    link: "https://youtube-clone-gamma-jet.vercel.app/",
  },
  {
    title: 'Login Validation',
    image: Login,
    blurb:
      'Developed a responsive Login Form Validation application using React.js with real-time input validation, password strength indicator, confirm password verification, email validation, show/hide password functionality, and instant user feedback for a secure and user-friendly registration experience.',
    tags: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'React Hooks (useState)', 'Vite'],
    link: "https://login-validation-sandy.vercel.app/",
  },
  {
    title: 'Video Popup Gallery',
    image: VideoGallery,
    blurb:
      'Developed a responsive Video Gallery application using React.js, featuring category-based filtering, hover video previews, lazy loading, loading indicators, and a full-screen video player with keyboard navigation for an engaging viewing experience.',
    tags: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'React Hooks (useState, useEffect, useMemo, useRef)'],
    link: "https://popup-videos.vercel.app/",
  },
  {
    title: 'Tic-tac-toe',
    image: TicToeTic,
    blurb:
      'A 2-player Tic Tac Toe game that detects wins/draws after each move, highlights the winning line, and tracks scores across rounds with a reset button.',
    tags: ['React', 'CSS', 'React hooks(useState)'],
    link: "https://tic-tac-toe-game-omega-eosin.vercel.app/",
  },
]

export default projects
