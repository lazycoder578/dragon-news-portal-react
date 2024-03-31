import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
            path: '/',
            element: <Home />
        }
      ] 
    }
])
export default routes;
