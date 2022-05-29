import { LogOut } from "react-feather";

type UserDropdownProps = {
  onLogout: () => void;
};

const UserDropdown = ({ onLogout }: UserDropdownProps) => {
  return (
    <ul className="text-white bg-zinc-700 px-6 py-4 rounded">
      <li className="cursor-pointer flex items-center gap-2" onClick={onLogout}>
        <LogOut size={16} />
        Logout
      </li>
    </ul>
  );
};

export default UserDropdown;
