import "./App.css";
import Video from "./components/Video/Video";
import Header from "./Layout/Header/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";


function App() {

  return (
    <>
      <div className="max-h-screen flex flex-col">
        <Header />

        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />

          <div className="overflow-x-hidden px-8 pb-4 mt-8">
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              <Video />
            </div>


          </div>

        </div>
      </div>

    </>
  );
}

export default App;
