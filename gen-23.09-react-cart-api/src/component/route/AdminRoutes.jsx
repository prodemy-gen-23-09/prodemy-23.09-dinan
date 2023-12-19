import { useSelector } from "react-redux"
import { Navigate, Outlet, useNavigate } from "react-router-dom"

export default function AdminRoutes() {
  const isAdmin = useSelector((state) => state.auth.user.role === "admin")

  if (isAdmin) {
    return <Outlet />
  }
  alert("tidak bisa akses, karena anda bukan admin")
  return <Navigate to={"/home"} />
}
