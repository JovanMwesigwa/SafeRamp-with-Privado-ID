"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const SignoutBtn = () => {
  return (
    <div
      className="flex flex-row items-center"
      onClick={async () => await signOut()}
    >
      <LogOut size={16} className="mr-2" />
      Logout
    </div>
  );
};

export default SignoutBtn;
