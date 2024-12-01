import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black p-4 text-white">
      <SignUp
        forceRedirectUrl={"/home"}
        fallbackRedirectUrl={"/home"}
        routing="hash"
      />
    </div>
  );
};

export default SignIn;
