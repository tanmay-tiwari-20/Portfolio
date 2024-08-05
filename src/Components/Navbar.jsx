import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-40 h-30 rounded-lg bg-gray-100 items-center justify-center flex font-bold shadow-lg">
        <p className="blue-gradient_text">TANMAY TIWARI</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) =>
            `hover:text-blue-400 transition-colors ${isActive ? 'text-blue-500' : 'text-gray-100'}`
          }>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) =>
            `hover:text-blue-400 transition-colors ${isActive ? 'text-blue-500' : 'text-gray-100'}`
          }>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar