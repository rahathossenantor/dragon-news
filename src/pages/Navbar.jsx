import { NavLink } from "react-router-dom";

const links = <>
    <NavLink to="/"><li><a className="hover:bg-transparent hover:text-[#FF444A]">Home</a></li></NavLink>
    <NavLink to="/about"><li><a className="hover:bg-transparent hover:text-[#FF444A]">About</a></li></NavLink>
    <NavLink to="/career"><li><a className="hover:bg-transparent hover:text-[#FF444A]">Career</a></li></NavLink>
</>

const Navbar = () => {

    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text bg-[#403F3F] text-white normal-case hover:bg-[#403F3F] rounded-none px-10">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;
