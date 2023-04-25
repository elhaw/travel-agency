import { FontFamilies, FontWight, FontSizes } from "./../../global.d";
type HeadingTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;
FontFamilies;
declare namespace ITypography {
  interface IProps {
    fontSize: FontSizes;
    htmlTag: HeadingTag;
    children: string;
    fontWeight: FontWight;
    fontFamily: FontFamilies;
    varient?: "sectionTitle" | "subSectionTitle" | "cardTitle" | "cardTag";
  }
}

export { ITypography };
