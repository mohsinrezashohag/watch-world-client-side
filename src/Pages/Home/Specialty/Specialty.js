import React from 'react';
import specialImage from '../../../images/speciallty.jpg'
import './Specialty.css'

const Specialty = () => {
    return (
        <div>
            <h2 className='section-heading'>Our Specialty</h2>
            <h5 className='sub-heading'>Checkout Our Specialty ,What we Are Giving You As Service </h5>

            <div className="container">

                <div className="row mt-5">

                    <div className="col-md-6 mt-5">

                        <img className='img-fluid special-img' src={specialImage} alt="" />

                    </div>


                    <div className="col-md-6 mt-5 specialty-text-part">

                        <div className='mb-3' >
                            <h2>Replacement & Waranty Ensure</h2>
                            <p>
                                You can return undamaged goods from our e-shop within 14 days of delivery/collection. You do not always have to return the entire order; you can only return part of it. In the wizard, you choose which goods from the order you want to return.

                                Please try to return the items as complete as possible (with all documentation, packaging, etc.). If the returned item will be considered as "used", we're allowed to charge you % of the total returned amount as a fee to make the item sellable (replacing scratched parts etc.).
                                Yes we do. If you’d like to exchange an item for something else, please let us know via e-mail or phone. Please prepare the order number and tells us, which item you'd like to have. We'll find the best solution for you.

                            </p>
                        </div>


                        <div className='mt-4'>
                            <h2>After-Sales Service Support</h2>
                            <p>
                                After-sales support, sometimes called after-sales service, is any service provided after a customer has purchased a product. After-sales support may be provided by a retailer, manufacturer, or a third-party customer service or training provider. Typically, examples of after-sales service include support regarding warranty service, training, or repair and upgrades. After-sales support may also be considered to be part of a company's overall marketing strategy. Some customers might seek out a company’s products based on its after-sales service, for example, Best Buy Co.’s Geek Squad or Apple Inc.'s Apple Care.</p>
                        </div>
                        <div className='mt-4'>
                            <h2>We Will provide update on Realtime About Our Over all service ,products etc</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, vel. Ipsum ex blanditiis et, nemo laboriosam deleniti modi tempora, obcaecati, eius consequuntur alias. Aperiam, laborum quas architecto facilis quibusdam eaque quod iusto, libero veritatis voluptate totam possimus molestias suscipit accusamus culpa dolorum molestiae non repellat, omnis nostrum deserunt officiis? Perferendis.</p>
                        </div>


                    </div>


                </div>

            </div>


        </div >
    );
};

export default Specialty;