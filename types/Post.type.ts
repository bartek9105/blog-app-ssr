import { Category } from "./Category.type";
import { Comment } from "./Comment.type";

export type Post = {
  id: number;
  title: string;
  img_url: string;
  categories: Category;
  created_at: string;
  content: string;
  comments?: Comment[];
};
