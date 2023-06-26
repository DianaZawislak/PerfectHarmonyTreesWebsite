import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import seo from "./seo";
import {footer} from "./footer";
import {hero} from "./hero";
import {menu, menuItem}  from "./menu";
import { heroCard ,heroCardArray} from "./card";
import { pageContent,Content } from "./PageContent";
import {portableTextCard} from "./PortableTextCard"
import { FooterV2 } from "./Footerv2";
import { pageContentV2, selectionSchema } from "./pagecontentv2";
export const schemaTypes = [post, selectionSchema,pageContentV2,FooterV2,portableTextCard,Content,heroCardArray, heroCard,author, category, blockContent, seo, menu, menuItem, footer,hero,pageContent];
