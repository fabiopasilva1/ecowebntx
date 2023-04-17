import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function MainSidebar() {
  const { user } = useContext(AuthContext);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link href="/dashboard" className="brand-link">
        <Image
          width={170}
          height={33}
          src="/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: "0.8" }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <Image
              width={160}
              height={160}
              src="/dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <Link href="#" className="d-block">
              {user && user.username}
            </Link>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
          >
            <li className="nav-item menu-open">
              <Link href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Starter Pages
                  <i className="right fas fa-angle-left"></i>
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link href="#" className="nav-link active">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Active Page</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Inactive Page</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>
                  Simple Link
                  <span className="right badge badge-danger">New</span>
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
