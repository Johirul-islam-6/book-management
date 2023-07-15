import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
<div className="navbar bg-[#FFFFFF] px-6 fixed top-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={'/'}>Home</Link></li>
        <li>
          <a>All Book</a>
          <ul className="p-2">
            <li><a>About</a></li>
            <li><a>Contact </a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    
      <a className="text-black pl-2 text-[20px] font-bold">Book'<span className="text-[#24A4EA]">Library</span></a>


  </div>
  {/* // Onley Lz */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={'/'}>Home</Link></li>
      <li tabIndex={0}>
        <details>
          <summary className="text-black font-family">Category</summary>
          <ul className="p-2 bg-slate-200 ">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><Link to={'add-book'}>Add Book</Link></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/login'} className="mx-2 text-[16px] pb-[7px] text-white font-bold bg-[#24A4EA] py-[6px] px-4 rounded-md">login</Link>
    <Link to={'/registration'} className="mx-2 text-white text-[16px] pb-[7px] font-bold bg-[#24A4EA] py-[6px] px-3 rounded-md">Registration</Link>
  </div>
</div>
        </>
    );
};

export default Navbar;