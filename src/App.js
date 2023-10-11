import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import techEvents from "./Pages/TechEvents/TechEvents"
function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/events",
          element:<techEvents />
        }
       
      ]
    },
  ]);
  return (
    <div className="App">
     <RouterProvider router={router} />  
    </div>
  );
}

export default App;
