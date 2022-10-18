import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to="/" className="btn btn-ghost normal-case text-xl">MyWeb</Link>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to="/orders" className="btn btn-ghost normal-case text-xl">Orders</Link>
                <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
                {user?.email &&
                    <div className='ml-auto'>
                        <span>Welcome {user?.email}</span>
                        <button onClick={handleSignOut} className="btn btn-sm ml-2">Sign out</button>
                    </div>
                }
            </div>

        </div>
    );
};

export default Header;