import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import './style.css'
import Help from "./pages/Help";
import FAQ from "./pages/Faq";
import Contact, { contactAction } from "./pages/Contact";
import Product, { loaderFunction } from "./pages/Product";
import ProductDetails, { loadDetailsFunction } from "./pages/ProductDetails";
import ErrorComponent from "./components/ErrorComponent";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />} >
      <Route element={<PrivateRoute />}>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} >
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} action={contactAction} />
          <Route />
        </Route>

        <Route path="product" errorElement={<ErrorComponent />} >
          <Route
            index
            element={<Product />}
            loader={loaderFunction}
          />
          <Route
            path=":id"
            element={<ProductDetails />}
            loader={loadDetailsFunction}
          />
        </Route>
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
