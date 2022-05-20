import { Category } from "./Category.type";

export type Post = {
  id?: number;
  title: string;
  img_url: string;
  categories: Category;
  created_at: Date;
  upvotes_count: number;
  comments_count?: number;
  content: string;
};
