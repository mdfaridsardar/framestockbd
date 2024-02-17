import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteName = (value: string) => {
  let result;
  const name = "ramadan baazar";

  switch (value) {
    case "upp":
      result = name.toUpperCase();
      break;

    case "low":
      result = name.toLowerCase();
      break;

    default:
      result = name.charAt(0).toUpperCase() + name.slice(1);
      break;
  }

  return result;
};

export const addHyphen = (value: string | undefined) => {
  if (value === undefined) {
    return "";
  }
  const cleanedString = value
    .replace(/,/g, "")
    .replace(/:/g, "")
    .replace(/%/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return cleanedString;
};

export const removeHyphen = (value: string | undefined) => {
  if (value === undefined) {
    return "";
  }
  const decodedString = decodeURIComponent(value);
  return decodedString.replace(/-/g, " ").toLowerCase();
};
