import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

const ProtectedLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow ml-64 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;
