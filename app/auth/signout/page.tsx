"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutPage = () => {
  return <Button onClick={async () => await signOut()}>Sign out</Button>;
};

export default SignOutPage;
