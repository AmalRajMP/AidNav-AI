import { Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout/MainLayout"

import Home from "./pages/Home/Home"
import SchemeFinder from "./pages/SchemeFinder/SchemeFinder"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import NotFound from "./pages/NotFound/NotFound"

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/scheme-finder" element={<SchemeFinder />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
