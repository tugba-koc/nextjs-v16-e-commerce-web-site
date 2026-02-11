"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { Github } from "lucide-react";
import React from "react";

const LoginWithGithub = () => {
  const signInBtn = async () => {
    await signIn.social({
      provider: "github",
    });
  };
  return (
    <div>
      {" "}
      <Button className="p-3" variant={"default"} onClick={signInBtn}>
        <Github className="w-4 h-4 mr-2" />
        Sign in Github
      </Button>
    </div>
  );
};

export default LoginWithGithub;
