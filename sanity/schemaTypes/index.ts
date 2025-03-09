import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { heroType } from "./heroType";
import { registerType } from "./registerType";
import pageType from "./pageType";
import textWithIllustrationType from "./textWithIllus";
import { coachesType } from "./coachesType";
import { locationsType } from "./locationsType";
import { faqsType } from "./faqsType";
import { rallyType } from "./rallyType";
import { facilitiesType } from "./facilitiesType";
import { historyType } from "./historyType";
import { socialsType } from "./socialsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    heroType,
    faqsType,
    pageType,
    rallyType,
    authorType,
    socialsType,
    historyType,
    coachesType,
    categoryType,
    registerType,
    locationsType,
    facilitiesType,
    blockContentType,
    textWithIllustrationType,
  ],
};
