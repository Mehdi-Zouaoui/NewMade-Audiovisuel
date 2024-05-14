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
        checked={theme === "dark"}
        onCheckedChange={() => {
          if (theme === "light") {
            return setTheme("dark");
          }
          return setTheme("light");
        }}
      />
      <Label htmlFor="themeSwitch">
        {theme === "light" ? <Moon /> : <Sun />}
      </Label>
    </div>
  );
}
