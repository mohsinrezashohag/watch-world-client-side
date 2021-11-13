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
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, vel. Ipsum ex blanditiis et, nemo laboriosam deleniti modi tempora, obcaecati, eius consequuntur alias. Aperiam, laborum quas architecto facilis quibusdam eaque quod iusto, libero veritatis voluptate totam possimus molestias suscipit accusamus culpa dolorum molestiae non repellat, omnis nostrum deserunt officiis? Perferendis.</p>
                        </div>


                        <div className='mt-4'>
                            <h2>We Ensure Replacement & Warenty Of Each Products</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, vel. Ipsum ex blanditiis et, nemo laboriosam deleniti modi tempora, obcaecati, eius consequuntur alias. Aperiam, laborum quas architecto facilis quibusdam eaque quod iusto, libero veritatis voluptate totam possimus molestias suscipit accusamus culpa dolorum molestiae non repellat, omnis nostrum deserunt officiis? Perferendis.</p>
                        </div>
                        <div className='mt-4'>
                            <h2>After Sale Support</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, vel. Ipsum ex blanditiis et, nemo laboriosam deleniti modi tempora, obcaecati, eius consequuntur alias. Aperiam, laborum quas architecto facilis quibusdam eaque quod iusto, libero veritatis voluptate totam possimus molestias suscipit accusamus culpa dolorum molestiae non repellat, omnis nostrum deserunt officiis? Perferendis.</p>
                        </div>


                    </div>


                </div>

            </div>


        </div >
    );
};

export default Specialty;