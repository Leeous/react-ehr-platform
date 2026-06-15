import { useState, type ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  // Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarOpen = () => setIsSidebarOpen(true);
  const handleSidebarClose = () => setIsSidebarOpen(false);

  return (
    <div className="app-layout bg-blue-100 min-h-screen md:flex md:items-stretch">
      <Sidebar
        isOpen={isSidebarOpen}
        onCloseSidebar={handleSidebarClose}
      />
      <div className="main-area flex-1 min-h-screen">
        <Header title={process.env.PUBLIC_SITE_NAME || "Site Title"} onOpenSidebar={handleSidebarOpen} />
        <main className="content-container">
          {children}
        </main>
      </div>
    </div>
  )
}