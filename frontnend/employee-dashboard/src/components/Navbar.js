import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const location = useLocation();

  // remove focus highlight when route changes
  useEffect(() => {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <span className="dot" /> Verto Employee Manager
        </div>

        <div className="nav-actions">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-btn" + (isActive ? " active" : "")
            }
          >
            📊 Stats
          </NavLink>

          <NavLink
            to="/employees"
            end
            className={({ isActive }) =>
              "nav-btn" + (isActive ? " active" : "")
            }
          >
            👀 View Employees
          </NavLink>

          <NavLink
            to="/employees/add"
            end
            className={({ isActive }) =>
              "nav-btn" + (isActive ? " active" : "")
            }
          >
            ➕ Add Employee
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
