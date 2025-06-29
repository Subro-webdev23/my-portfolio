import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Shared/Header/Navber';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
    return (
        <>
            <Navber></Navber>
            <main className='bg-[#0a192f]'>
                <div className='max-w-6xl mx-auto'>
                    <Outlet></Outlet>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Root;