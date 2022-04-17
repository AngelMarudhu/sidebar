import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SummarizeIcon from "@mui/icons-material/Summarize";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export const SidebarData = [
  {
    title: "Overview",
    path: "/overview",
    icon: <HomeIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: "Users",
        path: "/overview/uers",
        icon: <AccountCircleIcon />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <AccountCircleIcon />,
      },
    ],
  },
  //.......................................

  {
    title: "Reports",
    path: "/reports",
    icon: <SummarizeIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: "ReportsOne",
        path: "/reports/reportsone",
        icon: <AccountCircleIcon />,
      },
      {
        title: "ReportsTwo",
        path: "/reports/reportstwo",
        icon: <AccountCircleIcon />,
      },
    ],
  },
  //.......................................

  {
    title: "Products",
    path: "/products",
    icon: <Inventory2Icon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: "Chennai",
        path: "/reports/chennai",
        icon: <AccountCircleIcon />,
      },
      {
        title: "Madurai",
        path: "/reports/Madurai",
        icon: <AccountCircleIcon />,
      },
    ],
  },
  //-----------------------------------------
  {
    title: "Team",
    path: "/team",
    icon: <PeopleOutlineIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: "TeamOne",
        path: "/reports/teamOne",
        icon: <AccountCircleIcon />,
      },
      {
        title: "TeamTwo",
        path: "/reports/teamTwo",
        icon: <AccountCircleIcon />,
      },
    ],
  },
  //---------------------------------

  {
    title: "Support",
    path: "/support ",
    icon: <SupportAgentIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
  },
];
