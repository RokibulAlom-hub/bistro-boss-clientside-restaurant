import React, { useContext } from 'react';
import { Authcontext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const location = useLocation();
    const { user ,laoding} = useContext(Authcontext);
    if(laoding){
        return <div
        className="radial-progress bg-primary text-primary-content border-primary border-4"
        style={{ "--value": 70 }}
        role="progressbar">
        70%
      </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default Privateroute;