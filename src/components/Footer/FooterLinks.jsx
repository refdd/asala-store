import { Link } from "@/i18n/routing";
import React from "react";

function FooterLinks({ titleLinks, links }) {
  return (
    <div>
      <div className="text-xl text-white font-bold mb-4">{titleLinks}</div>
      <ul className="flex flex-col gap-4">
        {links?.map((item, index) => (
          <li
            className="text-white text-sm font-bold transition-all md:hover:text-bsMainPuple"
            key={index}
          >
            <Link prefetch={true} href={item.link_slug}>
              {item.link_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
