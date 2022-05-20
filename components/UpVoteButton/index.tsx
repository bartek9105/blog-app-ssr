import Button from "../Button";
import { ArrowUp } from "react-feather";

type UpVoteButtonProps = {
  upVotesCount: number;
};

const UpVoteButton = ({ upVotesCount }: UpVoteButtonProps) => {
  return (
    <Button className="flex items-center text-gray-300 rounded border-2 px-3 py-1 border-gray-500">
      <ArrowUp size={20} />
      <span className="ml-2 text-xs">{upVotesCount}</span>
    </Button>
  );
};

export default UpVoteButton;
