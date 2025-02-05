import { LogIn } from "lucide-react";

function ProfileLinks({ links, activeLink, handleLinkClick }) {
  return (
    <div className="pt-6">
      <ul className="flex flex-col">
        {links.map((link) => (
          <li
            key={link.value}
            className={`flex items-center gap-2 py-3 px-2 rounded-xl cursor-pointer ${
              activeLink === link.value ? "bg-white" : ""
            }`}
            onClick={() => handleLinkClick(link.value)}
          >
            {link.icon}
            <span className="text-lg font-bold">{link.label}</span>
          </li>
        ))}
        <li className="flex items-center gap-2  py-3 px-2 rounded-xl">
          <LogIn />
          <span className="text-lg font-bold">تسجيل الخروج</span>
        </li>
      </ul>
    </div>
  );
}

export default ProfileLinks;
