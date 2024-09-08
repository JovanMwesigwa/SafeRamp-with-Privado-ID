"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";

const SigninButton = () => {
  return (
    <Button
      onClick={async () => await signIn("github")}
      variant="ghost"
      className="flex flex-row mt-8 border items-center justify-center w-full  p-2 rounded-md"
    >
      Sign in with GitHub
    </Button>
  );
};

export default SigninButton;
