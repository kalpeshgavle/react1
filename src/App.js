import { RouterProvider } from "react-router-dom";
import { Navbar } from "./react_Router/SimpleRoutes";

function App() {
  return (
    <>
      <RouterProvider router={Navbar} />
    </>
  )
}

export default App;
