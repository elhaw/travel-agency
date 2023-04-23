import { FontFamilies, FontWight, FontSizes } from "./../../global.d";
type HeadingTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;
FontFamilies;
declare namespace ITypography {
  interface IProps {
    fontSize: FontSizes;
    htmlTag: HeadingTag;
    children: string;
    className?: string;
    fontWeight: FontWight;
    fontFamily: FontFamilies;
  }
}

export { ITypography };
