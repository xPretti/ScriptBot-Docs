export class ColorUtils {
  private constructor() {}

  public static invertHexColor(hex: string) {
    hex = hex.replace("#", "");

    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    }

    if (hex.length !== 6) return "#000000";

    const r = (255 - parseInt(hex.slice(0, 2), 16))
      .toString(16)
      .padStart(2, "0");
    const g = (255 - parseInt(hex.slice(2, 4), 16))
      .toString(16)
      .padStart(2, "0");
    const b = (255 - parseInt(hex.slice(4, 6), 16))
      .toString(16)
      .padStart(2, "0");

    return `#${r}${g}${b}`;
  }

  public static hexToBlackOrWhite(hex: string): string {
    hex = hex.replace("#", "");

    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    }

    if (hex.length !== 6) return "#000000";

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    return luminance > 128 ? "#ffffff" : "#000000";
  }
}
