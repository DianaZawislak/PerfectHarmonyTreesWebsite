type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};
interface Post extends Base {
  slug: Slug;
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  title: string;  // the original title property in Post
  description: string;  // the original description property in Post
  seo: SEO;  // SEO fields are now contained in this separate property
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}

interface MenuItem {
  _key: string;
  link: string;
  title: string;
}

interface Menu {
  logoUrl: string;
  items: {
    [x: string]: any;
    item: MenuItem[];
    
    
  };
}


interface OpenGraph_SEO {
  title: string;
  type: string;
  url: string;
  siteName: string;
}

interface Twitter_SEO {
  card: string;
  site: string;
  creator: string;
  image: Image;
}

interface SEO extends Base {
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  image: Image; // Or a more specific type if you have one
  twitterCard: string;
  metaRobots: string[];
  openGraph: OpenGraph_SEO;
  twitter: Twitter_SEO;
}



interface Hero extends Base {
  title: string;
  slug: Slug;
  CTA_Main: string[];
  backgroundImage: Image;
  ctaText_Subtitle: string[];
  logo: Image;
  ctaBtnTxt:string;
}

interface FooterItem {
  title: string;
  link: string;
}

interface Section extends Base {
  title: string;
  items: FooterItem[];
}

interface Footer extends Base {
  websiteTitle: string;
  title: string;
  slug: Slug;
  logo: Image;
  sections: Section[];
}

interface HeroCardArray extends Base {
  title: string;
  slug: Slug;
  cards: HeroCard[];
}

interface HeroCard extends Base {
  title: string;
  backgroundImage: Image;
  logo:Image;
  cardText: string;
  ctaBtnTxt: string;
  ModalText: Block[];
}


interface PageContent extends Base {
  title: string;
  slug: Slug;
  hero: Hero;
  Menulogo:Image;
  MenuBackground:Image;
  mainContent: Content[];
  portableTextContent: PortableTextCard[];
}

interface contentList extends Base {
  title: string;
  slug: Slug;
  header:string;
  SectionDescription:string
  contentList: HeroCardArray[];
}


interface Rule {
  required: () => Rule;
}
interface FooterV2 extends Base {
  title: string;
  slug: Slug;
  Address: Address;
  CompanyName: string;
  PhoneNumber: string;
  backgroundImageUrl: string;
  Email: string;
  logoUrl: string;
}

interface Address {
  StreetAddress: string;
  City: string;
  State: string;
  Zipcode: number;
}



interface PortableTextCard extends Base {
  title: string;
  slug: Slug;
  mainText: Block[];
  backgroundImage: Image;
  logo: Image;
  ctaBtnTxt: string;
}