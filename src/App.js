import "./App.css";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home.js";
import Merch from "./Pages/Merch/Merch";
import Music from "./Pages/Music/Music";
import Streams from "./Pages/Streams/Streams";

import { Helmet } from 'react-helmet';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/streams",
    element: <Streams/>
  },
  {
    path: "/music",
    element: <Music/>
  },
  {
    path: "/merch",
    element: <Merch/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
]);

function App() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
