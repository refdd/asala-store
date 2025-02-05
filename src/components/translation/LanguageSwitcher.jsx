import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Globe } from "lucide-react";
import TranslatedTypography from "../translation/TranslatedTypography";
import { Link, usePathname } from "@/i18n/routing"; // Import usePathname

function LanguageSwitcher() {
  const pathname = usePathname(); // Get the current path name

  const handleLogout = () => {
    // Add your logout logic here
  };

  const handleProfile = () => {
    // Add your profile logic here
  };

  return (
    <div>
      <Popover className={""}>
        <PopoverTrigger asChild>
          <Globe className={"w-6 h-6 text-white cursor-pointer"} />
        </PopoverTrigger>
        <PopoverContent className="w-20 p-0">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="grid grid-cols-1 items-center gap-4">
                <Link href={pathname} locale="ar">
                  {" "}
                  {/* Use the current path name */}
                  <Button
                    onClick={handleProfile}
                    className="w-full flex items-center justify-start gap-2"
                    variant="ghost"
                  >
                    العربية
                  </Button>
                </Link>
                <Link href={pathname} locale="en">
                  {" "}
                  {/* Use the current path name */}
                  <Button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-start gap-2"
                    variant="ghost"
                  >
                    EN
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default LanguageSwitcher;
