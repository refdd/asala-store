import React from "react";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { User, LogOut } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

function ProfilNavIcon({ userData }) {
  const handleLogout = async () => {
    await signOut({ redirect: false }); // Sign out without redirecting
    window.location.reload(); // Reload the page to reflect the logged-out state
  };

  const handleProfile = () => {
    // Add your profile logic here
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          {/* Display user image or default icon */}
          {userData ? (
            <Link href={"/dashboard/profile"}>
              <div className="">
                {userData.image ? (
                  <div className="w-6 h-6 rounded-full overflow-hidden cursor-pointer">
                    <Image
                      src={userData.image}
                      alt={userData.name || "User"}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                )}
              </div>
            </Link>
          ) : (
            <Link href={"/auth/login"}>
              <User
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => {}}
              />
            </Link>
          )}
        </PopoverTrigger>
        {/* <PopoverContent className="w-40">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="grid grid-cols-1 items-center gap-4">
                {userData && (
                  <div className="text-sm font-medium text-center">
                    {userData.name || "User"}
                  </div>
                )}

                {userData ? (
                  <>
                    <Link href={"/dashboard/profile"}>
                      <Button
                        onClick={handleProfile}
                        className="w-full flex items-center justify-start gap-2"
                        variant="ghost"
                      >
                        <User className="w-4 h-4" />
                        Profile
                      </Button>
                    </Link>
                    <Button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-start gap-2"
                      variant="ghost"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <Link href={"/auth/login"}>
                    <Button
                      className="w-full flex items-center justify-start gap-2"
                      variant="ghost"
                    >
                      <User className="w-4 h-4" />
                      Login
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </PopoverContent> */}
      </Popover>
    </div>
  );
}

export default ProfilNavIcon;
