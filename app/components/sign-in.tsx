import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import SigninButton from "./Buttons/signin-button";

export default function SignIn() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/3 h-1/2 border rounded-md p-4 ">
        <h1 className="text-xl font-medium">Welcome to SafeRamp.</h1>
        <p className="text-xs">
          Authenticate and validate your Identity privately
        </p>

        <div className="my-4">
          <p className="text-xs my-2">Email/Phone number</p>
          <Input type="email" placeholder="example@gmail.com" />
        </div>
        <div className="flex flex-row items-center my-5">
          <Checkbox />{" "}
          <p className="text-xs mx-2">
            By creating account. I agree to the privacy
          </p>
        </div>

        <SigninButton />
      </div>
    </div>
  );
}
