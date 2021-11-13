import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import ProductSection from '../ProductSection/ProductSection';
import ReviewSection from '../ReviewSection/ReviewSection';
import Specialty from '../Specialty/Specialty';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <ProductSection></ProductSection>

            <Specialty></Specialty>

            <ReviewSection></ReviewSection>

        </div>
    );
};

export default Home;