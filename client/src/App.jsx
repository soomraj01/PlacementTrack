import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import ApplicationForm from "./pages/ApplicationForm";
import Profile from "./pages/Profile";
const Protected = ({ children }) => useAuth().user ? <Layout>{children}</Layout> : <Navigate to="/login" replace />;
export default function App() { return <Routes>
  <Route path="/" element={<Landing />} /><Route path="/login" element={<Login />} /><Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} /><Route path="/applications" element={<Protected><Applications /></Protected>} />
  <Route path="/applications/new" element={<Protected><ApplicationForm /></Protected>} /><Route path="/applications/:id/edit" element={<Protected><ApplicationForm /></Protected>} />
  <Route path="/profile" element={<Protected><Profile /></Protected>} /><Route path="*" element={<Navigate to="/" replace />} />
</Routes>; }
