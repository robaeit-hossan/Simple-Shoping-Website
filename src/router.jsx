import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Component/Contact/Contact";
import Allpost from "./Pages/Posts/Allpost";
import SinglePost from "./Pages/Posts/SinglePost";
import EditPost from "./Pages/Posts/EditPost";
import DeletePost from "./Pages/Posts/DeletePost";

const router = createBrowserRouter([
  {
      path: "/login",
      element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/posts",
        element: <Allpost />,
      },
      {
        path: "/posts/:id",
        element: <SinglePost />,
      },
      {
        path: "/add-post",
        element: <SinglePost />,
      },
      {
        path: "/edit-post/:id",
        element: <EditPost />,
      },
      {
        path: "/delete-post/:id",
        element: <DeletePost />,
      },
    ],
  },
]);

export default router;
