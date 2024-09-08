"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";

const SignInPage = () => {
  return (
    <Button onClick={async () => await signIn("github")}>
      Sign In With GitHub
    </Button>
  );
};

export default SignInPage;
