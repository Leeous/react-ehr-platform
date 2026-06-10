import Icon from "../../ui/Icon/Icon";

interface HeaderProps {
  title: string;
  onOpenSidebar: () => void;
}

function Header({title, onOpenSidebar}: HeaderProps) {
  return(
    <div className="items-center flex flex-row justify-between bg-blue-200 text-blue-800">
      <h1 className="font-bold ml-3">{title}</h1>
      <button className="cursor-pointer p-3" onClick={onOpenSidebar}><Icon name="settings" /></button>
    </div>
  );
}

export default Header;