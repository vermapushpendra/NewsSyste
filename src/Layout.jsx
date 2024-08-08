import { Outlet } from "react-router-dom";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import { SidebarContext } from "./contexts/SidebarConext";
import { useState } from "react";


function Layout() {

  const [isOpen, setIsOpen] = useState(true);


  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="max-h-screen flex flex-col">
        <Header />

        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />

          <main className="overflow-auto">
            <div className="overflow-x-hidden px-8 pb-4 mt-8">
              <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                <Outlet />
              </div>
            </div>
          </main>

        </div>
      </div>

    </SidebarContext.Provider>
  );
}

export default Layout;
