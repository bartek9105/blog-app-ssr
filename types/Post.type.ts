import { Category } from "./Category.type";
import { Comment } from "./Comment.type";

export type Post = {
  id?: number;
  title: string;
  img_url: string;
  categories: Category;
  created_at: string;
  upvotes_count: number;
  comments_count?: number;
  content: string;
  comments: Comment[];
};
