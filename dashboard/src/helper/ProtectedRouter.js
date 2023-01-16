import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({ children }) => {
    const userInfo = localStorage.getItem("adminInfo")
        ? JSON.parse(localStorage.getItem("adminInfo"))
        : null;
    if (!userInfo) {
        return <Navigate to="/login" />;
    } else {
        return children;
    }
}

export default ProtectedRouter