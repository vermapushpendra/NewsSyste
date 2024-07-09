import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
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

      <main className="flex-grow">
        <div className={`flex-1 p-4 ml-${isSidebar ? "24" : "64"} `}>

          <Outlet />

        </div>
      </main>
    </div>
  );
}

export default Layout;
