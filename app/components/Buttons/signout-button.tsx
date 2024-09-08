import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import SigninButton from "./signin-button";
import SignoutBtn from "./signout-btn";

const SignoutButton = async () => {
  const session = await auth();

  if (!session) {
    return <SigninButton />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="size-8 bg-neutral-300 items-center justify-center relative rounded-full">
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt="user"
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem className="font-semibold flex-row flex items-center ">
          <SignoutBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SignoutButton;
