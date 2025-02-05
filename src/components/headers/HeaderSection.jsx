import React from "react";
import { useTranslations } from "next-intl";

function HeaderSection({ title }) {
  const t = useTranslations("headers");

  return (
    <div>
      <h4 className="text-2xl md:text-3xl text-bsMainPuple font-bold">
        {t(title)}
      </h4>
    </div>
  );
}

export default HeaderSection;
