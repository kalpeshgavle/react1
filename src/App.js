import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import Login from "./pages/Login";
import PrivateRoute from "./componets/PrivateRoute";
import About from "./pages/About";
import CocktailDinks from "./pages/CocktailDinks";
import Counter from "./pages/Counter";
import CounterContext from "./componets/CountContext";


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
          <Route path="login" element={<Login />} />
          <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <PrivateRoute path="about" element={<About />} />
          <PrivateRoute path="cocktail" element={<CocktailDinks />} />
          <PrivateRoute path="counter" element={<Counter />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;
