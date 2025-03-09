"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSignIn = (provider) => {
    signIn(provider);
  };

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => handleSignIn("github")}
      >
        Sign in with GitHub
      </Button>

      <Button
        onClick={() => handleSignIn("google")}
      >
        Sign in with Google
      </Button>
    </div>
  );
}
