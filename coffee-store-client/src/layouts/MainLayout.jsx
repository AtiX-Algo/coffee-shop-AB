import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;