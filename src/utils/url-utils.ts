import { BASE_URL, DEFAULT_LOCALE } from "@src/configs/config";

export function getUrl(path: string) {
   if (BASE_URL === "/") {
      return path;
   }
   return `${BASE_URL}${path}`;
}

export function getAbsolute(currentLocale: string | undefined, path: string) {
   if (!currentLocale) return getUrl(path);
   if (currentLocale === DEFAULT_LOCALE) return getUrl(path);
   return getUrl(`/${currentLocale}${path}`);
}
