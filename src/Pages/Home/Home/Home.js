import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BannerSection from '../BannerSection/BannerSection';
import ProductSection from '../ProductSection/ProductSection';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <ProductSection></ProductSection>

            <ReviewSection></ReviewSection>

        </div>
    );
};

export default Home;