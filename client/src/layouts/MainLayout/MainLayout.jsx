import { Outlet, useLocation } from "react-router-dom"

import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

import "./MainLayout.css"

const MainLayout = () => {
  const location = useLocation()
  const hideFooter = location.pathname === "/find-benefits"

  return (
    <div className="main-layout">
      <Navbar />

      <main className="layout-content">
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </div>
  )
}

export default MainLayout
