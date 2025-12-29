"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/auth", {
      method: "DELETE",
    });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <Button onClick={handleLogout} variant="outline">
      <LogOut className="mr-2 h-4 w-4" />
      Logout
    </Button>
  );
}


