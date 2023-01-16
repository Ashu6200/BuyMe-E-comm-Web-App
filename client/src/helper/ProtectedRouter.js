import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({ children }) => {
    const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
    if (!userInfo) {
        return <Navigate to="/login" />;
    } else {
        return children;
    }
}

export default ProtectedRouter