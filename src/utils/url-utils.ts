import { BASE_URL } from "@src/configs/config";

export function getUrl(path: string) {
   if (BASE_URL === "/") {
      return path;
   }

   return `${BASE_URL}${path}`;
}
