import HomePage from "./pages/homePage/homePage";
import ListPage from "./pages/listPage/listPage";
import Layout from "./pages/layout/layout";
import ResultPage from "./pages/resultPage/resultPage";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import SinglePage from "./pages/singlePage/singlePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>,
        },
        {
          path: "/search",
          element: <ResultPage/>,
        },
        {
          path:"/:id",
          element: <SinglePage/>
        }

      ]
    }
    
  ]);



  return (
    
    <RouterProvider router={router} />
  );
}

export default App