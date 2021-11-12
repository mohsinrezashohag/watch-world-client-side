import React, { useEffect, useState } from 'react';
import Watch from '../../OurWatches/Watch/Watch';

const ProductSection = () => {

    const [watches, setWatches] = useState([])

    useEffect(() => {
        fetch('https://hidden-tor-06620.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => {
                setWatches(data)
            })

    }, [])


    return (

        <div className="packages">
            <h2 className="section-heading">Our Exclusive Watches</h2>
            <h5 className='sub-heading'>Have a look on our recently launched watches for sure you will loved those</h5>
            <div className="watch-grid">
                {watches.slice(0, 3).map(watch => <Watch i key={watch._id} watch={watch}></Watch>)}

            </div>

        </div>
    );
};

export default ProductSection;