import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-40 h-30 rounded-full bg-zinc-100 items-center justify-center flex font-bold shadow-lg">
        <p className="blue-gradient_text">TANMAY TIWARI</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black-500'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black-500'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar