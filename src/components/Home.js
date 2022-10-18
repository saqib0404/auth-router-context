import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            This is Home for {user?.email}
        </div>
    );
};

export default Home;