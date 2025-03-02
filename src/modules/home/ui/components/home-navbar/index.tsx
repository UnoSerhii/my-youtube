import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchInput from "./search-input";
import AuthButton from "@/modules/auth/ui/auth-button";

const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 r-0 z-50 bg-white flex items-center px-2 pr-5 h-16 w-full">
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center flex-shrink-0 gap-2">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex items-center gap-1">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} className="mr-2" />
              <p className="text-xxl font-semibold tracking-tight">My YouTube</p>
            </div>
          </Link>
        </div>

        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>
        <div className="flex-shrink-0 items-center flex gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
