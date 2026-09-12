import { BASE_URL, DEFAULT_LOCALE } from "@src/configs/config";

export function getUrl(path: string) {
   if (BASE_URL === "/") {
      return path;
   }
   return `${BASE_URL}${path}`;
}

export function getAbsolute(currentLocale: string, path: string) {
   if (currentLocale === DEFAULT_LOCALE) return getUrl(path);
   return getUrl(`/${currentLocale}${path}`);
}
