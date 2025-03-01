"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSignIn = (provider) => {
    signIn(provider);
  };

  return (
    <div>
      <Button
        onClick={() => handleSignIn("github")}
        
      >
        Sign in with GitHub
      </Button>
    </div>
  );
}
