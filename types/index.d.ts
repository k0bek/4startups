import { Session } from "next-auth";

declare type Locale = "en" | "pl";
declare type Headings =
  | "Growth Prediction"
  | "Market Analysis"
  | "Strategic Planning";
export declare type Animation = <T>(
  target: string,
  animationProps: T,
  scrollProps?: T
) => void;

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  meta?: MetaFields;
  excerpt: string;
}

interface SessionT {
  session: Session | null;
}
