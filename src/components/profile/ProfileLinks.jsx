"use client";
import { useRouter } from "@/i18n/routing";
import { LogIn } from "lucide-react";
import { signOut } from "next-auth/react";

function ProfileLinks({ links, activeLink, handleLinkClick }) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Sign out without redirecting
    router.push("/"); // Redirect to the home page
  };

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
        <li
          onClick={handleLogout}
          className="flex items-center gap-2  py-3 px-2 rounded-xl cursor-pointer"
        >
          <LogIn />
          <span className="text-lg font-bold">تسجيل الخروج</span>
        </li>
      </ul>
    </div>
  );
}

export default ProfileLinks;
