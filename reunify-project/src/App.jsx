import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// Pages here
import Chatroom from "./pages/Chatroom";
import Login from "./pages/Login";
// Components here
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

const LoginHeader = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  // Dashboard for Chatroom
  {
    path: "/chatroom",
    element: <Dashboard />,
    children: [
      {
        path: "/chatroom",
        element: <Chatroom />,
      },
    ],
  },
  // Header for Login Page
  {
    path: "/",
    element: <LoginHeader />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  // Routes
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/chatroom",
    element: <Chatroom />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
