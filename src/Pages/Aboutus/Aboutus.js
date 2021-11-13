import React from 'react';
import AboutImage from '../../images/About-image.jpg'
import watchImg from '../../images/O6CCQZ0.jpg'

const Aboutus = () => {
    return (
        <div className="container">
            <h2 className="section-heading">About Our Watches & Our Shop</h2>
            <h5 className='sub-heading'>Before take decision make sure that you studyed about us and read our policy </h5>

            <div className="row my-5">

                <div className="col-md-6">
                    <img className="img-fluid" src={AboutImage} alt="" />
                </div>
                <div style={{ textAlign: 'left' }} className="col-md-6">
                    <div className="my-2">
                        <h3>Leading Computer, Laptop & Watch & Online Shop in Bangladesh</h3>
                        <p>Technology has become a part of our daily lives and for a huge portion of our life, we are dependent on tech products daily. There is hardly a home in Bangladesh without a tech product. This is where we come in. Star Tech & Engineering Ltd had started as a Tech product shop way back in March 2007. We focused on giving the customers the best service possible. This is why Star Tech is one of The most trusted names in the tech industry of Bangladesh today.</p>
                    </div>

                    <div>
                        <h3>Best Price, Product & After-sales service</h3>
                        <p>Watch World has taken care of its customers since the beginning. No matter if someone is inquiring or purchasing; every customer wants to get a genuine product with the best price. We deliver their desired products at the best price in the market for both online or physical stores. Apart from that, we offer the most extensive range of pre-sale and post-purchase product support and after-sales service. To ensure customer satisfaction with product and service We have branches in major cities like Dhaka, Chittagong, Rangpur, Gazipur, and Khulna. The plan of establishing our branches in other cities is already in motion. Hopefully, we will be available in all the districts in the very near future. Currently, we have online delivery available in all 64 districts in Bangladesh.</p>
                    </div>

                </div>
            </div>

            <div className="row my-5">



                <div style={{ textAlign: 'right' }} className="col-md-6">
                    <div className="my-5">
                        <h3>Best PC component & accessories Shop in Bangladesh
                        </h3>
                        <p>For any PC enthusiast out there; it is easy to get a custom PC with your chosen components from Star Tech. You can even Choose accessories as per your preference to garnish your PC. So it means you can choose the main components like the Processor (CPU), Monitor, Motherboard, Graphics Card, SSD, HDD, RAM, Casing, Cooler, Power supply (PSU), etc. Or any other accessories for PC like Keyboard, mouse, mousepad, headphones, webcam, capture card, etc with extensive features like RGB lighting to give your PC gaming vibe. The best part is, you can change any of your preferred components or accessories before the final purchase; whether you are buying from Star tech’s Physical Store or online Shop.

                        </p>
                    </div>

                    <div>
                        <h3>How You Would Be Connected To Us ?</h3>
                        <p>Come our Shop to buy products on hand or order us online , you will need some basic information of the your product you’ll be buying to, and your money and others requirements. You will, of course, also need all of your personal details that will appear on your paper.
                        </p>
                    </div>

                </div>

                <div className="col-md-6 pt3 mb-5">
                    <img className="img-fluid" src={watchImg} alt=""
                    />
                </div>

            </div>


        </div>
    );
};

export default Aboutus;