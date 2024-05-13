"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-3 ml-3 w-10 h-10">
      <Switch
        id="themeSwitch"
        checked={theme === "light"}
        onCheckedChange={() => {
          if (theme === "dark") {
            return setTheme("light");
          }
          return setTheme("dark");
        }}
      />
      <Label htmlFor="themeSwitch">
        {theme === "light" ? <Sun /> : <Moon />}
      </Label>
    </div>
  );
}
