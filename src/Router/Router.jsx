import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
// import About from "../Page/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default Router;
