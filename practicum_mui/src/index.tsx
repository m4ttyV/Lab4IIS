import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './main/main';
import List from "./list/List";
import ListAll from "./list/ListAll";
import Chart from "./chart/Chart"


const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
  },
  {
    path: "/list/:id",
    element: <List />,
  },
  {
    path: "/list/",
    element: <ListAll />,
  },
  {
    path: "/chart",
    element: <Chart />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
