import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import UserProfilePage from "./pages/UserProfile";
import ShowMore from "./pages/ShowMore";
import AddFood from "./pages/AddFood";
import Layout1 from "./layouts/Layout1";
import Search from "./pages/search";
import FoodDetails from "./pages/FoodDetails";
import UpdateFood from "./pages/Update";
import UpdateUser from "./pages/UpdateProfile";
//import Details from "./components/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      path: "/",
      element: <Layout1 />,
      children: [
        { path: "/profile", element: <UserProfilePage /> },
        { path: "/showmore", element: <ShowMore /> },
        { path: "/add", element: <AddFood /> },
        { path: "/search", element: <Search /> },
        { path: "/details/:id", element: <FoodDetails /> },
        { path: "/update/:id", element: <UpdateFood /> },
        { path: "/updateuser/:id", element: <UpdateUser /> },
      ],
    },
    { path: "/login", element: <SignUp /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
