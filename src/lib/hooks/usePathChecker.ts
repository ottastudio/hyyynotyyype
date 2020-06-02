import { useRouter } from "next/router";

export const usePathChecker = (path: string[]) => {
  const { pathname } = useRouter();
  return path.includes(pathname);
};
