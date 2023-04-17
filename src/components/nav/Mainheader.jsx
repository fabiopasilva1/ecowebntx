import Link from "next/link";
import { useEffect } from "react";
import { api } from "../../data/api";

export function MainHeader() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            href={"#"}
            className="nav-link"
            data-widget="pushmenu"
            role="button"
          >
            <i className="fas fa-bars"></i>
          </Link>
        </li>
        <li className="nav-item d-done d-sm-inline-block">
          <Link href={"/dashboard"} className="nav-link">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
