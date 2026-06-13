import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onCloseSidebar: () => void;
}

function Sidebar({isOpen, onCloseSidebar}: SidebarProps) {
  const baseLinkStyle = "block p-2 rounded";
  const activeLinkStyle = "bg-blue-600 text-white font-semibold cursor-default";
  const hoverLinkStyle = "text-gray-300 hover:bg-slate-800";


  return(
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onCloseSidebar}
        />
      )}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white p-4 transform transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:z-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{process.env.PUBLIC_SITE_NAME || "Site Title"}</h2>
          <button
            onClick={onCloseSidebar}
            className="p-2 hover:bg-slate-800 rounded md:hidden cursor-pointer"
            aria-label="Close sidebar"
          >X</button>
        </div>

        <nav className="space-y-2">
          <NavLink 
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive
                  ? activeLinkStyle
                  : hoverLinkStyle
              }`
            }
            to="/dashboard">
              Dashboard
          </NavLink>
          <NavLink 
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive
                  ? activeLinkStyle
                  : hoverLinkStyle
              }`
            }
            to="/patients">
              Patients
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive
                  ? activeLinkStyle
                  : hoverLinkStyle
              }`
            }
            to="/settings" >
              Settings
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
export default Sidebar;