import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/homepage';
import DonatePage from '../pages/donate';
import Privacy from '../pages/privacy';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/donate",
    element: <DonatePage />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);
