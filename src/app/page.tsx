"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Check } from "lucide-react";
import colors from "tailwindcss/colors";

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress((old) => old + 20), 500);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-extralight mb-2">Book.me</h1>
      {progress < 100 && (
        <Progress
          value={progress}
          className="w-[20%] transition-all duration-500 ease-in-out"
        />
      )}
      {progress === 100 && (
        <Check
          size={32}
          color={colors.green[500]}
          className="transition-all duration-500 ease-in-out"
        />
      )}
    </main>
  );
}
