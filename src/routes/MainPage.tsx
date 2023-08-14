import { Link } from "react-router-dom"
import MainLayout from "../components/layouts/MainLayout"

function MainPage() {
  return (
    <MainLayout>
      <Link to="/request-access" className="w-56 py-4 text-center leading-none inline-block bg-red-500 text-white shadow-sm rounded border-[0.5px] border-red-700">Request Access</Link>
      <Link to="/setup-payment" className="w-56 py-4 text-center leading-none inline-block bg-white text-gray-600 shadow-sm rounded border-[0.5px]">Setup Payment</Link>
    </MainLayout>
  )
}

export default MainPage
