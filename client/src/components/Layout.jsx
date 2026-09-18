import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./dashboard-reference.css";
import "./dashboard-extras.css";
import "./applications-reference.css";
export default function Layout({ children }) { const { user, logout } = useAuth(); const navigate = useNavigate(); const leave = () => { logout(); navigate("/"); };
 return <div className="app-shell"><aside className="sidebar"><NavLink className="brand" to="/dashboard"><span className="cap">◆</span> Placement<strong>Track</strong></NavLink><nav><NavLink to="/dashboard"><i>▦</i> Dashboard</NavLink><NavLink to="/applications"><i>▤</i> Applications</NavLink><NavLink to="/profile"><i>♟</i> My Profile</NavLink></nav><div className="side-bottom"><div className="user-name"><span>{user?.name?.[0]?.toUpperCase()}</span><div><strong>{user?.name}</strong><small>Student account</small></div></div><button className="text-button" onClick={leave}>↪ &nbsp; Log out</button></div></aside><main className="main-content"><button className="notification" type="button" aria-label="Notifications">♧</button>{children}</main></div>; }
