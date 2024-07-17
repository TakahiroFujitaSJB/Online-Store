import HomePage from "./pages/homePage/homePage";
import ListPage from "./pages/listPage/listPage";
import Layout from "./pages/layout/layout";
import ResultPage from "./pages/resultPage/resultPage";
import SinglePage from "./pages/singlePage/singlePage";
import LoginPage from "./pages/loginPage/loginPage";
import SignUpPage from "./pages/signUnPage/signUpPage";
import { loginData } from './lib/data';

import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";


function App() {
  const [users, setUsers] = useState(loginData)

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
    console.log(users);
  };



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
        },
        {
          path:"/login",
          element: <LoginPage users={users} />
        },
        {
          path:"/signup",
          element: <SignUpPage addUser={addUser}/>
        },
      ]
    }
    
  ]);


  return (
    
    <RouterProvider router={router} />
  );
}

export default App