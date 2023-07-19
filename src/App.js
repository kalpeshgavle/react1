import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import Login from "./pages/Login";
import About from "./pages/About";
import CocktailDinks from "./pages/CocktailDinks";
import Counter from "./pages/Counter";
import PrivateRoute from "./componets/PrivateRoute";
// import CounterContext from "./componets/CountContext";


export const UserContext = createContext(null)

function App() {

  const [user, setUser] = useState("")
  const [login, setLogin] = useState(false)
  const [drinkList, setDrinkList] = useState([])

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser, login, setLogin, drinkList, setDrinkList }}>
        <Navbar />
        <Routes>
          <PrivateRoute path="/" element={<Home />} />
          <PrivateRoute path="about" element={<About />} />
          <PrivateRoute path="cocktail" element={<CocktailDinks />} />
          <PrivateRoute path="counter" element={<Counter />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;
