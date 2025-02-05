import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function UserAvatar() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="flex flex-col items-center justify-center">
      {session?.user?.image ? (
        <div className="relative w-[100px] h-[100px] rounded-full">
          <Image
            alt={"avatar"}
            title={"avatar"}
            src={session?.user?.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            loading="lazy"
            className="object-cover rounded-full"
          />
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-col gap-2">
        <p className="name text-lg font-bold mt-4 text-center">
          {session?.user?.name}
        </p>
        <div className="mail heading6 font-normal normal-case text-[#696c70] text-center mt-1">
          {session?.user?.email}
        </div>
      </div>
    </div>
  );
}

export default UserAvatar;
