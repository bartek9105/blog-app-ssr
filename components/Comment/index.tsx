import { formatDistanceToNow } from "date-fns";

type CommentProps = {
  userName?: string;
  createdAt: string;
  content: string;
};

const Comment = ({ userName, createdAt, content }: CommentProps) => {
  const createdAtFormat = formatDistanceToNow(
    new Date(createdAt.split("T")[0]),
    {
      addSuffix: true,
    }
  );
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm">{userName}</span>
        <span className="text-gray-500 text-sm">{createdAtFormat}</span>
      </div>
      <div className="text-gray-300 text-sm">
        <p>{content}</p>
      </div>
    </>
  );
};

export default Comment;
