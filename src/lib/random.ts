import type { Icons } from "@/types";
import * as svgs from "lucide-react";

const iconNames = Object.keys(svgs.icons);

export function randomIconName(): Icons {
  return iconNames[Math.floor(Math.random() * iconNames.length)] as Icons;
}

export function randomIconColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}