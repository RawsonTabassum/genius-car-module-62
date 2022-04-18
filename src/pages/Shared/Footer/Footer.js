import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center my-5'>
            <p><small>copyright @{(new Date().getFullYear())}</small></p>
        </footer>
    );
};

export default Footer;