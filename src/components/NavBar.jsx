import React from "react";
import ActiveTab from "./ActiveTab";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  // extracting path
  const { pathname } = useLocation();
  return (
    <ul className="mx-10 w-full">
      <li
        className={`relative border-b-2 border-[#7570d4] py-4 text-lg ${
          pathname.includes("ProfileDetail")
            ? "font-semibold text-white"
            : "text-[#a6a5e4]"
        }
        }`}
      >
        <span className="cursor-pointer">
          <a href="/Homepage/ProfileDetail">Profile</a>
        </span>
        {pathname.includes("ProfileDetail") && <ActiveTab />}
      </li>
      <li
        className={`relative border-b-2 border-[#7570d4] py-4 text-lg ${
          pathname.includes("Posts")
            ? "font-semibold text-white"
            : "text-[#a6a5e4]"
        }
        }`}
      >
        <span className="cursor-pointer">
          <a href="/Homepage/Posts">Posts</a>
        </span>
        {pathname.includes("Posts") && <ActiveTab />}
      </li>
      <li
        className={`relative border-b-2 border-[#7570d4] py-4 text-lg ${
          pathname.includes("Gallery")
            ? "font-semibold text-white"
            : "text-[#a6a5e4]"
        }
        }`}
      >
        <span className="cursor-pointer">
          {" "}
          <a href="/Homepage/Gallery">Gallery</a>
        </span>
        {pathname.includes("Gallery") && <ActiveTab />}
      </li>
      <li
        className={`relative py-4 text-lg ${
          pathname.includes("ToDos")
            ? "font-semibold text-white"
            : "text-[#a6a5e4]"
        }
        }`}
      >
        <span className="cursor-pointer">
          <a href="/Homepage/ToDos">ToDo</a>
        </span>
        {pathname.includes("ToDos") && <ActiveTab />}
      </li>
    </ul>
  );
};

export default NavBar;
