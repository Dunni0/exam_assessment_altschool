import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function SharedComp(){
    return (
      <div>
        <nav>
          <NavLink to="/">
            <button className="nav_button"> Counter With Custom-Hook </button>
          </NavLink>
          <NavLink to="usereducer/counter">
            <button className="nav_button"> Counter With useReducer </button>
          </NavLink>
          <NavLink to="errorboundary">
            <button className="nav_button"> Test ErrorBoundary </button>
          </NavLink>
        </nav>
        <Outlet />
      </div>
    );
}
