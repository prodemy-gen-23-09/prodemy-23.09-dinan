import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export default function GuestRoutes() {
  const isLogin = useSelector((state) => state.auth.token !== "")
  const role = useSelector((state) => state.auth.user.role)

  if (isLogin) {
    if (role === "admin") {
      return <Navigate to="/adminPage" />
    } else if (role === "customer") {
      return <Navigate to="/home" />
    }
  }

  return <Outlet />
}
