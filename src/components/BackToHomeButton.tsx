"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BackToHomeButton() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="text-center mt-6">
      <Link href="/" className="inline-block text-green-600 hover:underline p-4">
        Zurück zur Startseite
      </Link>
    </div>
  );
}
