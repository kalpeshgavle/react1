import { RouterProvider } from "react-router-dom";
// import { Navbar } from "./simple_routing/SimpleRoutes";
import router from "./nested_routing/RouterComponent";

import './nested_routing/style.css'

function App() {
  return (
    <>

      {/* <RouterProvider router={Navbar} /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App;
