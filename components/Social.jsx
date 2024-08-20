import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
// Import LeetCode icon 
//import LeetCodeIcon from "./LeetCodeIcon"; // Replace with your LeetCode icon import path

const socials = [
  { icon: <FaGithub />, path: "https://github.com/SARVESH-31" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sarveshkadam3110" },
  //{ icon: <LeetCodeIcon />, path: "https://leetcode.com/SARVESH-31/" }, // Replace with your LeetCode profile URL
  //{ icon: <FaYoutube />, path: "" },
  //{ icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
