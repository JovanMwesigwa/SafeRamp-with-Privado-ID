import { auth } from "@/auth";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import SelectCountry from "./components/Buttons/select-country";
import SignoutButton from "./components/Buttons/signout-button";
import SignIn from "./components/sign-in";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return <SignIn />;
  }

  return (
    <div className="flex flex-col min-h-screen p-8 ">
      <div className="flex flex-row w-full items-center justify-between mb-10">
        <h1 className="text-lg">
          Welcome, <span className="font-semibold">{session?.user?.name}</span>
        </h1>

        <SignoutButton />
      </div>

      <div className="w-1/2 mx-auto flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-2xl">Account Verification</h1>
          <p className="text-xs">Powered by PrivadoID</p>
        </div>

        <div className="flex flex-row items-center gap-x-4 my-5 justify-between w-full">
          <div className="flex flex-col w-full ">
            <p className="text-sm my-2">First name</p>
            <Input type="text" placeholder="" className="w-full" />
          </div>

          <div className="flex flex-col w-full ">
            <p className="text-sm my-2">Last name</p>
            <Input type="text" placeholder="" className="w-full" />
          </div>
        </div>

        <div className="flex flex-row items-center gap-x-4 justify-between w-full">
          <div className="flex flex-col w-full ">
            <p className="text-sm my-2">Country</p>
            {/* <Input type="text" placeholder="" className="w-full" /> */}
            <SelectCountry />
          </div>
        </div>

        <div className="flex flex-col w-full mt-5 ">
          <p className="text-sm my-2">National ID number (NIN)</p>
          <Input type="text" placeholder="" className="w-full" />
        </div>

        <div className="flex flex-row items-center gap-x-4 my-5 justify-between w-full">
          <div className="flex flex-col w-full ">
            <p className="text-sm my-2">Year of birth</p>
            <Input type="number" placeholder="1980" className="w-full" />
          </div>

          <div className="flex flex-col w-full ">
            <p className="text-sm my-2">Month</p>
            <Input type="number" placeholder="Oct" className="w-full" />
          </div>

          <div className="flex flex-col w-full ">
            <p className="text-sm my-2">Day</p>
            <Input type="number" placeholder="26" className="w-full" />
          </div>
        </div>
      </div>

      <a href="https://issuer-ui.polygonid.me/credentials/scan-link/388a646e-f9e6-4b25-8289-35bac3a52c92">
        <div className="w-1/2 mx-auto my-5 flex flex-row items-center justify-center bg-black text-white p-2 rounded-md">
          Verify Account
          <ArrowRight size={16} className="ml-2" />
        </div>
      </a>
    </div>
  );
}
