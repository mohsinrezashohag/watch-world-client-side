import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './OurWatches.css'

const OurWatches = () => {

    const [watches, setWatches] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => {
                setWatches(data)
            })

    }, [])



    return (
        <div>
            <h2 className="section-heading">Our Available Watches</h2>
            <p className="sub-heading">Pick The Unique Watch That Fits Your Style</p>
            <div className="watch-grid">
                {watches.map(watch => <Watch key={watch._id} watch={watch} ></Watch>)}

            </div>

        </div>
    );
};

export default OurWatches;