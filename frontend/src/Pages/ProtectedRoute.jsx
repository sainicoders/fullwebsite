import React from 'react';
import { Route,Navigate } from 'react-router-dom';

const ProtectedRoute=({element})=>{
    const isAuthenticated = !!localStorage.getItem('token');
    return isAuthenticated ? (
        <Route element={element}/>
    ):(

        <Navigate to="/Signin" replace/>
    )


}
export default ProtectedRoute;

