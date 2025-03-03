"use client";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import React from "react";
import { UserButton, SignInButton, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant={"outline"}
            className="rounded-full px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-500 border-blue-500/2 shadow-none [&_svg]:size-5"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default AuthButton;
