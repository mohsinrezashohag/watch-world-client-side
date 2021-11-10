import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BannerSection from '../BannerSection/BannerSection';
import ProductSection from '../ProductSection/ProductSection';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <BannerSection></BannerSection>
            <ProductSection></ProductSection>


            <Footer></Footer>
        </div>
    );
};

export default Home;