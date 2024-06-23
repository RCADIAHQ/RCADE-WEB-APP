import React from 'react';
import { CgProfile } from "react-icons/cg";
import { CgGames } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineHome } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { CiTrophy } from "react-icons/ci";
import { FaHandshake } from "react-icons/fa6";
import { RiContactsBookLine } from "react-icons/ri";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <MdOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/Profile',
    icon: <CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'The Rcade',
    path: '/TheRcade',
    icon: <CgGames />,
    cName: 'nav-text'
  },
  {
    title: 'MarketPlace',
    path: '/MarketPlace',
    icon: <MdOutlineShoppingCart />,
    cName: 'nav-text'
  },
  {
    title: 'Guilds',
    path: '/Guilds',
    icon: <FaPeopleRoof />,
    cName: 'nav-text'
  },
  {
    title: 'Leader Boards',
    path: '/LeaderBoards',
    icon: <CiTrophy />,
    cName: 'nav-text'
  },
  {
    title: 'Partners',
    path: '/Partners',
    icon: <FaHandshake />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/Contact',
    icon: <RiContactsBookLine />,
    cName: 'nav-text'
  },
  
  


]


