import config from "../tailwind.config";

type ThemeConfig = (typeof config)["theme"];
export type FontWight = keyof ThemeConfig["fontWeight"];
export type FontFamilies = keyof ThemeConfig["fontFamily"];
export type FontSizes = keyof ThemeConfig["fontSize"];
