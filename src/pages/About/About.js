import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';
import MyLocations from '../MyLocations/MyLocations'

const About = () => {
    return (
        <div>
            
            <PageTitle title="About"></PageTitle>
            <h3>this is about us</h3>
            <MyLocations></MyLocations>
        </div>
    );
};

export default About;