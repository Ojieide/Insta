import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}

export function timeAgo(dateString: string): string {
  const now: Date = new Date();
  const date: Date = new Date(dateString);

  const seconds: number = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);

  if (days > 1) {
    return `${days} days ago`;
  } else if (days === 1) {
    return '1 day ago';
  } else if (hours > 1) {
    return `${hours} hours ago`;
  } else if (hours === 1) {
    return '1 hour ago';
  } else if (minutes > 1) {
    return `${minutes} minutes ago`;
  } else if (minutes === 1) {
    return '1 minute ago';
  } else {
    return 'just now';
  }
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};