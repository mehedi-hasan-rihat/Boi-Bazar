"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <div>
      <h1>Sign Out</h1>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}
