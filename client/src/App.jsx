import { Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout/MainLayout"

import Home from "./pages/Home/Home"
import BenefitsFinder from "./pages/BenefitsFinder/BenefitsFinder"
import NotFound from "./pages/NotFound/NotFound"

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/find-benefits" element={<BenefitsFinder />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
