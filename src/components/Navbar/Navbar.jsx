import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const user = false;
  const links = (
    <>
      <li className=" text-sm md:text-lg lg:text-base font-medium">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " text-[#1A1E4A] underline font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-sm md:text-lg lg:text-base font-medium">
        <NavLink
          to={"/addbook"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " text-[#1A1E4A] underline font-bold"
              : ""
          }
        >
          Add Book
        </NavLink>
      </li>
      <li className=" text-sm md:text-lg lg:text-base font-medium">
        <NavLink
          to={"/allbooks"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " text-[#1A1E4A] underline font-bold"
              : ""
          }
        >
          All Books
        </NavLink>
      </li>
      <li className=" text-sm md:text-lg lg:text-base font-medium">
        <NavLink
          to={"/borrowedbooks"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " text-[#1A1E4A] underline font-bold"
              : ""
          }
        >
          Borrowed Books
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-lg p-4 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <img className=" w-[200px]" src={logo} alt="logoImage" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-Secondary btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm btn-Secondary">
                  {user.displayName}
                </button>
              </li>
              <li>
                <button
                  onClick={logOut}
                  className="btn btn-sm text-white bg-[#0B99FF]"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-outline">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
