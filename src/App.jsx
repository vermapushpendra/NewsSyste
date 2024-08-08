import { useState } from "react";
import "./App.css";
import Video from "./components/Video";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";

import { SidebarContext } from "./contexts/SidebarConext";


function App() {

  const [isOpen, setIsOpen] = useState(true)


  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>

      <div className="max-h-screen flex flex-col">
        <Header />

        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />

          <div className="overflow-x-hidden px-8 pb-4 mt-8">
            <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              <Video />
            </div>


          </div>

        </div>
      </div>

    </SidebarContext.Provider>
  );
}

export default App;
