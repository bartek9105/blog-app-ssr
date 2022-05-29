import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPost } from "../../api/posts/posts.api";
import CategoryHint from "../../components/CategoryHint";
import Comment from "../../components/Comment";
import parse from "html-react-parser";
import NewCommentForm from "../../components/NewCommentForm";
import { addComment } from "../../api/comments/comments.api";
import supabase from "../../config/supabase.config";
import { Bookmark, MessageCircle } from "react-feather";
import Layout from "../../components/Layout";
import "./Post.module.css";
import Head from "next/head";

const PostDetailsPage = () => {
  const {
    query: { id },
  } = useRouter();
  const postId = Number(id);

  const { data: post, refetch: refetchPost } = useQuery(
    ["post", postId],
    async () => getPost(postId)
  );

  const user = supabase.auth.user();

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <Layout>
        {post ? (
          <>
            <div className="flex justify-between items-center">
              <CategoryHint
                imgUrl={post.categories.img_url}
                categoryName={post.categories.name}
              />
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <h2 className="mt-4 mb-6 text-2xl">{post.title}</h2>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center text-gray-300 text-sm">
                <div className="flex">
                  <MessageCircle size={20} className="mr-2" />
                  {post?.comments?.length}
                </div>
                <Bookmark size={20} className="ml-6" />
              </div>
            </div>
            <article className="text-gray-400 text-sm tracking-wider mt-4 post">
              {parse(post?.content)}
            </article>
            <h6 className="font-bold mt-24 mb-2">Comments</h6>
            {user ? (
              <NewCommentForm
                onSubmit={async ({ content }) => {
                  await addComment({
                    post_id: postId,
                    content,
                    user: user?.id,
                  }),
                    await refetchPost();
                }}
              />
            ) : null}
            <ul className="mt-12">
              {post?.comments?.map(({ id, content, user, created_at }) => (
                <li key={id} className="mb-8">
                  <Comment
                    content={content}
                    userName={user.name}
                    createdAt={created_at}
                  />
                </li>
              ))}
            </ul>
            {post?.comments?.length === 0 ? (
              <h2 className="text-gray-500 text-center pb-8">
                No comments yet.
              </h2>
            ) : null}
          </>
        ) : null}
      </Layout>
    </>
  );
};

export default PostDetailsPage;
