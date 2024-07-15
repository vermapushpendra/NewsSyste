import Header from "./Layout/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Layout/Sidebar/Sidebar";
import { useState } from "react";

function Layout() {

  // toggle button in header and control for sidebar so 
  const [isSidebar, setIsSidebar] = useState(false);
  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  }

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarCollapsed={isSidebar} />

      <main className="">

        <Outlet />

      </main>
    </div>
  );
}

export default Layout;
